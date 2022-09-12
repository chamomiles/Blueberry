document.addEventListener("DOMContentLoaded", function() {
    findTypes()
});

function findTypes() {
    browser.tabs.executeScript({file:"content.js"});
}

browser.runtime.onMessage.addListener((request) => {
    if (request.type == "Read types response") {

        // This returns the array of all types on a page (duplicates included)
        var pageTypes = request.types;
        
        for (const type of pageTypes) {
            // This increments the html number for each type by 1 on every occurence of that type
            var typeValue = document.getElementById(type);
            var number = typeValue.innerHTML;
            number++;
            typeValue.innerHTML = number;
            
            var typeNameId = type + "name";
            var typeName = document.getElementById(typeNameId);
            typeValue.style.color = "white";
            typeName.style.color = "white";
            typeValue.style.opacity = 1.0;
        }
        
    }
});
