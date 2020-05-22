const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const atLeastThree = users.filter(user => user.languages.length >= 3);
console.log(atLeastThree);

const emails = users.map(user => user.email);
console.log(emails);

const totalYears = users.reduce((totalYrs, user) => {
    return totalYrs + user.yearsOfExperience;
}, 0)

console.log(totalYears / users.length);

const longestEmail = users.reduce((currentLong, user) => {
    if(user.email.length > currentLong.length) {
        return user.email;
    }
    else return currentLong;
}, "")

console.log(longestEmail);

const allNames = users.reduce((allName, user) => {
        return allName.push(user.name);
}, "")

console.log(allNames);

// const allKnownLanguages = users.reduce((languageSum, user) => {
//     let newLang = user.languages.reduce(language => languageSum.indexOf(language) === -1) {
//
//     }
// }, "")