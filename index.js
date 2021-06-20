function count(){
    const usersText = document.getElementById("inputTextArea").value;
    const usersWord = document.getElementById("inputWordArea").value;
    const words = usersText.match(/\b([\w-\.']+)\b/g);
    // console.log(usersText);
    wordCount(words);
    paragraphCounter(usersText);
    sentenceCounter(usersText);
    givenWordCounter(words, usersWord);
    bigramCounter(words);
}
function wordCount(words){
    // console.log(words)
    document.getElementById("words").innerHTML = words.length;
}
function paragraphCounter(usersText){
    const paragraphs = usersText.split("\n")
    // console.log(paragraphs);
    document.getElementById("paragraphs").innerHTML = paragraphs.length;
}
function sentenceCounter(usersText){
    const sentences = usersText.split(/[!?.]/);
    // console.log(sentences);
    document.getElementById("sentences").innerHTML = (sentences.length - 1);
}
function givenWordCounter(words, usersWord){
    if(usersWord.trim() == "") {
        document.getElementById("inputWord").innerHTML =  `No word was provided`;
    }
    else{
        let word = "";
        let wordCount = 0;
        for(let i = 0 ; i < words.length;i++){
            word = words[i].toLowerCase();
            if(word.includes(usersWord)){
                wordCount++;
            }
        }
        document.getElementById("inputWord").innerHTML =  `${wordCount}`;
    }
}

function bigramCounter(words){
    // ["The", "sun", "is", "shinning"]
    // ["The sun", "sun is", "is shining"]
    // "This is a" --> 3
    // "this is this is" --> 1 
    let obj = {};
    for(let i = 1; i < words.length; i++){
        firstWord = words[i-1];
        secondWord = words[i];
        let pair = `${firstWord} ${secondWord}` 
        obj[pair] = obj[pair]? obj[pair]+1: 1;
    }
    document.getElementById("bigram").innerHTML = "";
    for(let [key, occurance] of Object.entries(obj)){
        let data = `${key} : ${occurance}`;
        document.getElementById("bigram").innerHTML +=  "</br>"+ data;
    }
}