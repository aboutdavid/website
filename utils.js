function updateBtn(){
    if (localStorage.getItem("theme") == "dark") document.querySelector("#modeswitch").innerHTML = "☀️"
    if (localStorage.getItem("theme") == "light") document.querySelector("#modeswitch").innerHTML = "🌕"
}

function onSwitch(){
    if (localStorage.getItem("theme") == "dark") {
        document.documentElement.setAttribute('data-theme', "light")
        localStorage.setItem("theme", "light")
    } else if (localStorage.getItem("theme") == "light") {
        document.documentElement.setAttribute('data-theme', "dark")
        localStorage.setItem("theme", "dark")
    }
    updateBtn(localStorage.getItem("theme"))
}


window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    localStorage.setItem("theme", event.matches ? "dark" : "light") // watch for system changes and update
    document.documentElement.setAttribute('data-theme', event.matches ? "dark" : "light")
    updateBtn(event.matches ? "dark" : "light")
});
document.addEventListener("DOMContentLoaded", function() {
    updateBtn()
    if (!localStorage.getItem("theme")){ 
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) localStorage.setItem("theme", "dark")
        else localStorage.setItem("theme", "light")
    }

    if (localStorage.getItem("theme") == "dark") {
        document.documentElement.setAttribute('data-theme', "dark")
    } else if (localStorage.getItem("theme") == "light") {
        document.documentElement.setAttribute('data-theme', "light")
    }
});
