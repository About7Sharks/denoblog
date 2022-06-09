---
title: A Greener Web
publish_date: 2022-6-08
author: Zachary Carlin
location: Tampa FL
image: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4079938%2Fpexels-photo-4079938.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26fit%3Dcrop%26h%3D627%26w%3D1200&f=1&nofb=1
summary: A Greener Web
tags: ["Web Development", "Personal"]
---
# A Greener Web
### **Simplicity**
We should strive to have the simplest solution to the most complex problem. Even if this simple solution is abstracted onto a more complicated platform, we should still be able to make the most of it using the simplest possible interface as well.

### **Accessibility**
We should strive to make our software accessible to all. This is a key part of our mission to make the world a better place. It's easy to use huge libraries but remember that takes energy to send to the client. Even a simple google search has been estimated to use enough energy to power a lightbulb for an hour. It's too easy to bloat our codebase with unnecessary features that are not needed.

### How?
By leveraging the power of javascript we can create simple sites in as simple as the code snippet below.
```js
import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";
import {config} from "./getArticles.ts";
blog({
  title: config.name,
  author: config.name,
  description: config.JobTitle,
  avatar:'https://avatars.githubusercontent.com/u/30053857?v=4',
  links: config.links,
  background: "#efefef",
});
```
It's as simple as that. We can now create a blog with a title, author, description, and avatar. We can also add links to our blog. We can also add a background color. Then we can host it on something like [deno.com/deploy](https://deno.com/deploy). This site is currently hosted using deno deploy @ [zacsblog.deno.dev](https://zacsblog.deno.dev).
