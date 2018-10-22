function getUrl(url) {
    return url.split('github.com/')[1];
}

export default function fetchGithubStars(url) {
    return fetch(`https://api.github.com/repos/${getUrl(url)}/stargazers`)
        .then(respose => respose.text())
        .then(responseText => JSON.parse(responseText))
        .then(starsArray => starsArray.length);
}
