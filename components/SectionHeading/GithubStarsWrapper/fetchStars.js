'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fetchGithubStars;
function fetchGithubStars() {
    return fetch('https://api.github.com/repos/reiniergs/react-rainbow/stargazers').then(function (respose) {
        return respose.text();
    }).then(function (responseText) {
        return JSON.parse(responseText);
    }).then(function (starsArray) {
        return starsArray.length;
    });
}