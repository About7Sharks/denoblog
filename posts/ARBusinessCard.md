---
title: AR Business Card
publish_date: 2020-9-16
author: Zachary Carlin
location: Tampa FL
image: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.s-nbcnews.com%2Fj%2Fnewscms%2F2017_37%2F2152646%2F170912-augmented-reality-mn-1555_ef744fbb489d79f4a3668d5b7560dd5b.fit-760w.jpg&f=1&nofb=1
summary: Viro Augmented reality business card
tags: ["AR", "Javascript"]
---

# AR Business Card

![GIF](https://imgur.com/jujybPg.gif)
I recently found [ViroReact](https://viromedia.com/viroreact/)

> ViroReact is an open source developer platform for rapidly building AR/VR applications using React Native. Use a single code base for your AR and VR apps

While looking through the documentation for the Viro library I realized that they had an a amazing marker system.

```
ViroARTrackingTargets.createTargets({
  "ben" : {
    source : require('./res/ben.jpg'),
    orientation : "Up",
    physicalWidth : 0.157 // real world width in meters
  }
});
```

Look how nice that is 🤯. By supplying a source image, the orientation and the real world size; you can easily create a tracking target to pin virtual assets.

## How to make your own

Open up a terminal and type in the following commands (skip homebrew and node.js if you already have them installed)

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install node
brew install watchman
npm install -g react-native-cli
npm install -g react-viro-cli
git clone https://github.com/About7Sharks/ARBusinessCard.git
cd ARBussinessCard
npm install
npm run start
```

If you navigate to ARBussinessCard/js/res folder you will see the zCard.jpg tracking image I used. Change that with whatever picture you'd like to use as the tracker.

You'll also want to replace the avatar.png photo to one of yourself.

Lastly navigate back one folder and you should see the businessCardAR.js open it up in your preferred text editor and change lines 82, 96, 115 to your personal info and you should be ready to test your AR app.

## Trying it out

Open up your terminal and go into your ARBusiness folder run `npm start` and a local development server should start.

Download Vizio's app from the app store on your phone and click Enter Testbed button; then type the ngrok or you computers local ip and press go.
