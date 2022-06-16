import { blog, config } from './deps.ts';
blog({
  title: config.name,
  author: config.name,
  description: config.JobTitle,
  avatar:'https://avatars.githubusercontent.com/u/30053857?v=4',
  links: config.links,
  background: "#efefef",
});
