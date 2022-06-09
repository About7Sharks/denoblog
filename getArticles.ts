import {getArticle,_repoData} from 'https://esm.sh/@about7sharks/get-articles@0.0.3';
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


let {tree} = await _repoData({user:config.user, repo:config.repo}) as any;
let articles = tree.filter((file:any) => file.path.includes(".md"));
let articlePromises = articles.map((article:any) => getArticle({ article: article.path,user:config.user,repo:config.repo}));
let allArticles = await Promise.all(articlePromises);
// save each article
allArticles.forEach(async({data,content}) => {
// replace data with publish_data
content=content.replace("date", "publish_date")
//get the markdown file name from url
let fileName=data.url.split("/").pop()
if(fileName==='README.md'||fileName==='TableOfContents.md'){
  return
}
try{
  await Deno.writeTextFile(`./posts/${fileName}`,content);
}catch(e){
  console.log('wrong environment',e)
}
})
