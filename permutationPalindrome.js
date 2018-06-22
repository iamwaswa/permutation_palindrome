function permutationPalindrome(str){

    const maxSize = 1;
    const characterSet = new Set();
    const arr = str.split(``);

    arr.forEach(element => {
        
        if(characterSet.has(element)){
            characterSet.delete(element);
        } else {
            characterSet.add(element);
        }
    });

    return characterSet.size <= maxSize;
}