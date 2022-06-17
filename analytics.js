var domainID = "ed2d6c15-7aca-42fc-8f8f-6c0a49fed42e"
var instance = ackeeTracker.create('https://ackee.aboutdavid.me/')
function clickedOnPost(){
instance.action(domainID, {
	key: 'Blog Post Viewed',
	value: 1
})
}
function clickedOnProject(){
    instance.action(domainID, {
        key: 'Project Viewed',
        value: 1
    })
}
function clickedOnTranslationsGithub(){
    instance.action(domainID, {
        key: 'GitHub Translation Page Viewed',
        value: 1
    })
}
function clickedOnTranslations(file){
    var lang = file.replace(".json","")
    instance.action(domainID, {
        key: `User set language to ${lang}`,
        value: 1
    })
}