# app-store

This is simple application store (or repository). That you can use to register and run you applications from.

## Why?

**Why this exists?**

- becahse is fun to create something new
- because in timeI switched my appls from .net framework to .net core the click-once wanst available
- because I needed sometnig to check if i upgraded application before I run it.

## How?

- After you create and release new aplication use toolkit to generate manifest and keys files (you will need to provide repository and download path for that)
  - More information and link for toolkit I will provide later
- upload your manifest file to deisred repository and you {app_id}.app.xml here to the `v2` forlder and crete pull requests.
- DO NOT share your `keys.xml` and keep it somewhere safe. This are "keys" from your repository (store will use this for verification of the app)
- When you update your application reupload new one and update your repository with new manifest.

## Limitations

- only support single file applications
- Client can be configured and run only one application (you will need create new client for other application)

## Rules

- Only upload and use applications that you created and / or have rights to distribute
  - If I'm not sure I can ask you to prove it (I otherwise not accept your pull request)

## Like it?

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/D1D5DMOTA)
