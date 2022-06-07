---
title: Meerkat
publish_date: 2020-11-15
author: Zachary Carlin
location: Tampa FL
image: https://raw.githubusercontent.com/About7Sharks/meerkat/Main/src/logo.svg
summary: A set of tools that will help you decode and map network packets
tags: ["Node", "React", "Express", "Javascript", "Security"]
---

# Meerkat

You can find the live site hosted [here](https://meerkatapp.netlify.app/).
[![Netlify Status](https://api.netlify.com/api/v1/badges/ceae32a4-08c9-4484-80c3-879d32865d54/deploy-status)](https://app.netlify.com/sites/meerkatapp/deploys)

You can view the source code on [github](https://github.com/About7Sharks/meerkat).

### Reasons for building

These past two weeks i've been working on making the invisible; visible. At any second in modern times countless packets of information are being transmitted all around you and even through you. As someone who is quite interested in the information floating around in the universe, I sought to better understand these mysterious bits floating all around. Hence meerkat was created. A set of tools that will help you decode and map network packets. I've also included a deathenticator to kick a device from it's network; for testing purposes; **I am not responsible for how you choose to use this**.

### Notes from building

I original was just playing around with a node backend but being the kind of person I am; I built a GUI for it and introduced electron. This led to me eventually refactoring it from basic html into a react app as i've grown quite comfortable with it's ecosystem. Having said all of this; most of my pain points from this project would have been mitigated if I were to have started from a Electron-React boilerplate that the community has already been kinda enough to provide. As this tech stack is used at companies like Microsoft for VS Code and Spotify for it's desktop apps.

After tweaking the package.json file I had a nice development environment to work in which allowed for modularity in my code and a seamless api from the react frontend to the node backend running on that persons device. This is a slightly different architecture as most backends run on a VPS and not on the clients device. The advantage of this is I was able to write commands for users devices with node instead of a lower level programming language like C++ or Java.

### Pain-points

Most of my issues came from packaging the application. I used the electron-builder package as the official Electron documents suggested. For some reason it did not like how I was bundling some utility scripts and I ended up just copying the functions into the main file instead of adding webpack. I also was originally loading the frontend from a local file; but refactored it to now auto update when I push a new version to github. This is a cleaner and more elegant solution as previously if an update were to be made I would have to rebuild the packages for every operating system and then the user would have to download them again. In doing it my way this will only be the case when making functional changes to either the electron portion or the node portion; allowing the frontend to updated whenever and however I please.

## Update

So in order to make the actual exacutable files downloadable without having a vps i've choosen to use github as the storage and versioning of the actual Meerkate software. I attepted to push the file as normal but received the following error

```
error: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
```

So... I went ahead and read the link povided. and learned that

> Git Large File Storage (LFS) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise.

Which solves my exact issues. Inorder to setup git-lfs for this project I first needed to install it.

```
sudo apt-get install git-lfs

```

Then in my Meerkat project directory I needed to run

```
git install lfs
git lfs track "*.AppImage"
git add .gitattributes
```

which adds lfs to the git project, tracks the filetype AppImage, and adds the files created during tracking of the file. This allows me to host files without a legit backend server :)
