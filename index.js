function count(){
    const usersText = document.getElementById("inputTextArea").value;
    const usersWord = document.getElementById("inputWordArea").value;
    const words = usersText.match(/\b([\w-\.']+)\b/g);
    // console.log(usersText);
    wordCount(words);
    paragraphCounter(usersText);
    sentenceCounter(usersText);
    givenWordCounter(words, usersWord);
}
function wordCount(words){
    console.log(words)
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
    let word = "";
    let wordCount = 0;
    for(let i = 0 ; i < words.length;i++){
        word = words[i].toLowerCase();
        if(word.includes(usersWord)){
            wordCount++;
        }

    }

    document.getElementById("inputWord").innerHTML =  wordCount + "";
}

function bigramCounter(words){

}