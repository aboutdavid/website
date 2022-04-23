var domainID = "ed2d6c15-7aca-42fc-8f8f-6c0a49fed42e"
var inst = ackeeTracker.create('https://ackee.aboutdavid.me/')
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