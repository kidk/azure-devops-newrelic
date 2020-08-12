const DEVOPS_PROJECT = process.env["DEVOPS_PROJECT"];
const DEVOPS_USERNAME = process.env["DEVOPS_USERNAME"];
const DEVOPS_USERNAME_API = process.env["DEVOPS_USERNAME_API"];

const DEVOPS_RANDOM_BUILDS = [
    1,
    1,
    1,
    1,
    2,
];

const DEVOPS_RANDOM_RELEASES = [

];

module.exports = async function (context, myTimer) {
    const fetch = require("node-fetch");
    var buildId = DEVOPS_RANDOM_BUILDS[Math.floor(Math.random() * DEVOPS_RANDOM_BUILDS.length)];
    context.log('Running build', buildId);
    fetch('https://dev.azure.com/' + DEVOPS_USERNAME + '/' + DEVOPS_PROJECT + '/_apis/build/builds?api-version=6.0-preview.6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + Buffer.from(DEVOPS_USERNAME + ":" + DEVOPS_USERNAME_API).toString('base64'),
        },
        body: JSON.stringify({
            definition: {
                id: buildId
            }
        })
    });
};

module.exports({
    log: (...args) => {
        console.log(...args)
    }
})
