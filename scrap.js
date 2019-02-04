// JS code for scrapping repositories from user profile.
// Run in code in any git user profile.
const repos = [];
// Get repositories html elements.
const repoElements = document.getElementsByClassName("d-inline-block mb-1");
// Extracts relevant informations.
for (let i = 0; i < repoElements.length; i++) {
    let lang = "";
    let desc = "";
    try {
        lang = repoElements[i].parentElement.querySelector('[itemprop="programmingLanguage"]').innerText;
        desc = repoElements[i].parentElement.querySelector('[itemprop="description"]').innerText;
    } catch (e) {
        console.debug(e);
    }

    const url = repoElements[i].parentElement.querySelector('h3').children[0].href;
    const name = repoElements[i].parentElement.querySelector('h3').children[0].innerText;
    repos.push({ lang, desc, url, name });
}
// Format to md
textBuffer = [];
for (let i = 0; i < repos.length; i++) {
    const repo = repos[i];
    textBuffer.push(
        `
### [${repo.name}](${repo.url}) ${ repo.lang ? "("+repo.lang.replace(" ","")+")" : ""}
${repo.desc}
`);
}

console.log(textBuffer.join(""))