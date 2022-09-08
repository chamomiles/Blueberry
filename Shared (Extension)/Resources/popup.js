document.addEventListener("DOMContentLoaded", function() {
    findTypes()
});

function findTypes() {
    browser.tabs.executeScript({file:"content.js"});
}

browser.runtime.onMessage.addListener((request) => {
    if (request.type == "Read types response") {
//        let countDiv = document.getElementById("type_list");
        
        document.getElementById("INTJ").innerHTML = new "hi";
        
//        var unique = request.types.filter(onlyUnique);
        var pageTypes = request.types;
        
//        var filtered = unique.filter(function (el) {
//            return el != null && el != "" && el != " ";
//        });
        
        if (pageTypes != null && pageTypes.length > 0) {
            
//            document.getElementById('INTJ').innerHTML += `${dict['INTJ']}`;
            
//            var div = document.createElement('div');
//            div.setAttribute('id', 'proList');
            
//            countDiv.appendChild(div);
            
//            pageTypes.forEach(renderProductList);
            
//            function renderProductList(element, index, arr) {
//                var div2 = document.createElement('div');
//                div2.setAttribute('class', 'item');
//
//                div.appendChild(div2);
//
//                div2.innerHTML=div2.innerHTML + element + ` ${dict[element]}`;
            }
        }
        else {
            countDiv.appendChild(document.createTextNode('No types here.'));
        }
    }
});

function onlyUnique(value, index, self) {
    dict[value] += 1;
    return self.indexOf(value) === index;
}
