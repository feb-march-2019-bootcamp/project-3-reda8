function palindrome (str){

    let smallStr = str.toLowerCase(str);
    let replacedStr = smallStr.replace(/\W|\_|\*/gi, "");
    let reversedStr = replacedStr.split("").reverse().join("");
    if (replacedStr === reversedStr){
    
        return true;
    }else{
        return false;
    }
    }
    
    
    console.log(palindrome("EyE"));