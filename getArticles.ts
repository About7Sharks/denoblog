export const config = {
  user: "About7Sharks",
  name: "Zachary Carlin",
  JobTitle: "Software Engineer",
  location: "Tampa, FL",
  repo: "Markdown",
  branch: "main",
};

export const repoUrl = (
  user: string = config.user,
  repo: string = config.repo,
  branch: string = config.branch
): string => {
  return `https://api.github.com/repos/${user}/${repo}/git/trees/${branch}?recursive=1`;
};
// helper function to get an article url
export const getArticle = async ({
  user = config.user,
  repo = config.repo,
  branch = config.branch,
  article = "README",
}) => {
  // if includes .md, remove it
  if (article.includes(".md")) article = article.replace(".md", "");
  let data = await fetch(`https://raw.githubusercontent.com/${user}/${repo}/${branch}/${article}.md`);
  return data
};
let data = await fetch(repoUrl());
let json = await data.json();
let files = json.tree;
let articles = files.filter((file:any) => file.path.includes(".md"));
let articlePromises = articles.map((article:any) => getArticle({ article: article.path }));
let allArticles = await Promise.all(articlePromises);
// save each article
allArticles.forEach(async(article:any) => {
  let text= await article.text()
// replace data with publish_data
text=text.replace("date", "publish_date")
//get the markdown file name from url
let fileName=article.url.split("/").pop()
if(fileName==='README.md'||fileName==='TableOfContents.md'){
  return
}
await Deno.writeTextFile(`./posts/${fileName}`,text);
})
