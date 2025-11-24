import { XMLParser } from 'fast-xml-parser';
import fs from 'fs-extra';
import path from 'path';

const appsDir = './Applications/v2';          // Folder with each app XML
const outputFile = './data/apps.json';   // Hugo data folder

const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    parseTagValue: true
});

async function generateIndex() {
    const files = await fs.readdir(appsDir);
    const apps = [];

    for (const file of files) {
        if (!file.endsWith('.xml')) continue;

        const filePath = path.join(appsDir, file);
        const xmlContent = await fs.readFile(filePath, 'utf-8');

        const parsed = parser.parse(xmlContent);

        // Your structure: <SignedApplication>...</SignedApplication>
        const app = parsed.SignedApplication;

        if (!app) {
            console.warn(`Skipping ${file}: Missing SignedApplication tag`);
            continue;
        }

        console.log(`Processing: ${file}`);

        apps.push({
        id: path.basename(file, '.xml'),
        repository: app.Repository ?? null,
        repositorySignature: app.RepositorySignature ?? null,
        publicKey: app.PublicKey ?? null,
        file: file
        });
    }

    // Output JSON
    await fs.outputJson(outputFile, { applications: apps }, { spaces: 2 });

    console.log(`✔ App index generated: ${outputFile}`);
}

generateIndex().catch(err => {
    console.error("❌ Error:", err);
});
