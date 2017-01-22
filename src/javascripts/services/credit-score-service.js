import fetch from 'isomorphic-fetch';

export function getScoreForUser() {
  return fetch('/fixtures/score-panel.json')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then((scoreData) => scoreData[0].score)
    .catch((error) => error);
}
