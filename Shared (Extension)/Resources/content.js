var types = getTypes();

console.log("types: ", types);

browser.runtime.sendMessage({type: "Read types response", types: types == null ? [""] : types});

function getTypes() {
    
    var search_in = document.body.innerHTML;
    string_context = search_in.toString();
    
    array_types = string_context.match(/[I|E][S|N][T|F][J|P]/g);
    return array_types;
}

// MBTI regex: /[I|E][S|N][T|F][J|P]/g
