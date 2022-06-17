var domainID = "ed2d6c15-7aca-42fc-8f8f-6c0a49fed42e"

window.addEventListener('DOMContentLoaded', (event) => {
    window.clickedOnPost = function() {
        ackeeTracker.create('https://ackee.aboutdavid.me/').action(domainID, {
            key: 'Blog Post Viewed',
            value: 1
        })
    }
    window.clickedOnProject = function() {
        ackeeTracker.create('https://ackee.aboutdavid.me/').action(domainID, {
            key: 'Project Viewed',
            value: 1
        })
    }
    window.clickedOnTranslationsGithub = function() {
        ackeeTracker.create('https://ackee.aboutdavid.me/').action(domainID, {
            key: 'GitHub Translation Page Viewed',
            value: 1
        })
    }
    window.clickedOnTranslations = function(file) {
        var lang = file.replace(".json", "")
        ackeeTracker.create('https://ackee.aboutdavid.me/').action(domainID, {
            key: `Language: ${lang}`,
            value: 1
        })
    }
});