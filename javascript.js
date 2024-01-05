function generatePassword(length,includelowerCase,includeupperCase,includenumbers,includespecial){
    let allowed="";
    let password="";

    lowerCaseCharaters ="abcdefghijklmnopqrstuvwxyz"
    upperCaseCharacters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numbers ='1234567890';
    specialcharacters ="~!@#$%^&*()_+{}|<>,./?;"

    allowed += includelowerCase ? lowerCaseCharaters: "";
    allowed += includeupperCase ? upperCaseCharacters: "";
    allowed += includenumbers ? numbers : "";
    allowed += includespecial ? specialcharacters : "";

    if(length<=0){
        return "(password length must be at least 1)";
    }
    if(allowed.length===0){
        return "(Atleast one type of character set need to be selected )"
    }
    for(let i=0; i<length; i++){
        let randomInteger = Math.floor(Math.random()*allowed.length);
        password += allowed.charAt(randomInteger);
    }

    return password;


}
const length=12;
const includelowerCase=true;
const includeupperCase=true;
const includenumbers=true;
const includespecial=true;

const password=generatePassword(length,
                                includelowerCase,
                                includeupperCase,
                                includenumbers,
                                includespecial)
console.log(`your password is ${password}`);

