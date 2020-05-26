"use strict";


//make a function that takes a github username
//returns a promise
//resolves to date of recent commit

function lastCommit(userName) {
    return fetch(`https://api.github.com/users/${userName}/events`, {
        headers: {'Authorization': `token ${GITHUB_API_KEY}`}
    }).then(response => response.json())
        .then(events => {
            return events.filter(event => event.type === 'PushEvent')[0].created_at;
        });
}

lastCommit('trevormullis12').then(date => {
    console.log(new Date(date).toDateString());
});