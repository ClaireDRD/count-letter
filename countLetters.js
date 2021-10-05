
const countLetters = (str) => {
    // 1. const stringcount = 
    // your code here

    if(str === undefined) return false;

    const strArray = str.split('');
    
    //Faire un test sur chaque élément du tableau pour vérifier si l'élément est déjà présent et incrémenter une valeur de comptage

    let eachLetter = {};
    for(let i = 0; i < strArray.length; i++ ){

        //eachLetter[strArray[i]] = eachLetter[strArray[i]] ? eachLetter[strArray[i]] + 1 : 1;

        let currentLetter = strArray[i];

        if(eachLetter[currentLetter]) {
            eachLetter[currentLetter] = eachLetter[currentLetter] + 1;
        } else {
            eachLetter[currentLetter] = 1;
        }

        //eachLetter[strArray[i]] = (eachLetter(strArry[i]) ? (eachLetter(strArray)) 
        //console.log(eachLetter);
       // console.log(strArray[i]);
       // for (let j = 0; j < keys.length; j++){
           // console.log("plop");
        //}
    }
    //console.log(eachLetter)
    return eachLetter;
    //strArray.forEach (function(strArray[i])
}


module.exports = countLetters;