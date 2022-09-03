document.addEventListener("DOMContentLoaded", function() {
    findTypes()
});

function findTypes() {
    browser.tabs.executescript({file:"content.js"});
}

browser.runtime.onMessage.addEventListener((request) => {
    if (request.type == "Read types response") {
        let countDiv = document.getElementById("type_list");
        
        var unique = request.types.filter(onlyUnique);
        
        var filtered = unique.filter(function (el) {
            return el != null && el != "" && el != " ";
        });
        
        if (filtered != null && filtered.length > 0) {
            
            var ul = document.createElement('ul');
            ul.setAttribute('id', 'proList');
            
            countDiv.appendChild(ul);
            
            filtered.forEach(renderProductList);
            
            function renderProductList(element, index, arr) {
                var li = document.createElement('li');
                li.setAttribute('class', 'item');
                
                ul.appendChild(li);
                
                li.innerHTML=li.innerHTML + element;
            }
        }
        else {
            countDiv.appendChild(document.createTextNode('No types here.'));
        }
    }
});

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
