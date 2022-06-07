import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";
import {config} from "./getArticles.ts";

blog({
  title: config.name,
  description: config.JobTitle,
  cover: "https://deno-avatar.deno.dev/avatar/blog.svg",
  // coverStyle: "avatar-rounded",
  author: config.name,
  background: "#f9f9f9",
});
