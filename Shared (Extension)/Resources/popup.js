document.addEventListener("DOMContentLoaded", function() {
    findTypes()
});

function findTypes() {
    browser.tabs.executeScript({file:"content.js"});
}

browser.runtime.onMessage.addListener((request) => {
    if (request.type == "Read types response") {
        
        document.getElementById("INTJ").innerHTML = new "hi";
        var pageTypes = request.types;
        
    }
});

function onlyUnique(value, index, self) {
    dict[value] += 1;
    return self.indexOf(value) === index;
}
