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
            var typevalue = document.getElementById(type);
            var number = typevalue.innerHTML;
            number++;
            typevalue.innerHTML = number;
        }
        
    }
});

//function onlyUnique(value, index, self) {
//    dict[value] += 1;
//    return self.indexOf(value) === index;
//}
