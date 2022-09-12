const typeNames = ["ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP", "ENFP", "ENTP", "INFP", "INTP", "ENFJ", "ENTJ", "INFJ", "INTJ"];

var dict = {
    "ISTJ": 0,
    "ISFJ": 0,
    "ESTJ": 0,
    "ESFJ": 0,
    "ISTP": 0,
    "ISFP": 0,
    "ESTP": 0,
    "ESFP": 0,
    "ENFP": 0,
    "ENTP": 0,
    "INFP": 0,
    "INTP": 0,
    "ENFJ": 0,
    "ENTJ": 0,
    "INFJ": 0,
    "INTJ": 0
};

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
