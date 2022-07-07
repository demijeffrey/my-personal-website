const h3 = document.createElement("h3");
h3.textContent = "Photos";

document.querySelector("body").appendChild(h3);

const h4 = document.createElement("h4");
h4.textContent = "Facts About Me"
document.querySelector("body").appendChild(h4);

h3.setAttribute('id', 'photos');

h3.addEventListener("mouseover", function(event) {
    event.target.style.color = "purple"

    setTimeout (function () {
        event.target.style.color = ""
    }, 500)
}, false)

h3.addEventListener("click", function () {
    document.location.href="file://wsl%24/Ubuntu/home/demij/Development/code/prework/my-personal-website/photos.html"
});

h4.addEventListener("mouseover", function(event) {
    event.target.style.color = "purple"

    setTimeout (function () {
        event.target.style.color = ""
    }, 500)
}, false)

h4.addEventListener("click", function() {
    document.location.href="file://wsl%24/Ubuntu/home/demij/Development/code/prework/my-personal-website/about.html"
})
