export const config = {
  user: "About7Sharks",
  name: "Zachary Carlin",
  JobTitle: "Software Engineer",
  location: "Tampa, FL",
  repo: "Markdown",
  links: [
    { title: "Email", url: "mailto:zacarlin@gmail.com", },
    { title: "GitHub", url: "https://github.com/about7sharks" },
    { title: "Twitter", url: "https://twitter.com/ZacharyCarlin", },
    { title: "LinkedIn", url: "https://www.linkedin.com/mwlite/in/zachary-carlin-85402a123", },
    { title: 'Instagram', url: "https://Instagram.com/zachary_carlin" }
  ],
};


export const repoUrl = (
  user: string = config.user,
  repo: string = config.repo,
): string => {
  return `https://api.github.com/repos/${user}/${repo}/git/trees/main?recursive=1`;
};
// helper function to get an article url
export const getArticle = async ({
  user = config.user,
  repo = config.repo,
  article = "README",
}) => {
  // if includes .md, remove it
  if (article.includes(".md")) article = article.replace(".md", "");
  let data = await fetch(`https://raw.githubusercontent.com/${user}/${repo}/main/${article}.md`);
  return data
};



let data = await fetch(repoUrl());
let {tree} = await data.json();
let articles = tree.filter((file:any) => file.path.includes(".md"));
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
try{
  await Deno.writeTextFile(`./posts/${fileName}`,text);
}catch(e){
  console.log('wrong environment',e)
}
})
