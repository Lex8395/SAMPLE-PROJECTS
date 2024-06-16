


//RANDOM PASSWORD GENERATOR


function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
{

    const lowercaseChars = "acdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "01234567890";
    const symbolsChars = "!@#$%^&*()_+=-";
    
    let allowdChars = "";
    let password = "";


    allowdChars += includeLowercase ? lowercaseChars : "";
    allowdChars += includeUppercase ? uppercaseChars : "";
    allowdChars += includeNumbers ? numberChars : "";
    allowdChars += includeSymbols ? symbolsChars : "";


    
    if(length <= 0){
        return `(password lenght must be at least 1)`;
    }
    if(allowdChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < length; i++){

            const randomIndex = Math.floor(Math.random() * allowdChars.length)
            password += allowdChars[randomIndex];
    
    
        }

    return password;

}

const passwordLength = 15;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                includeLowercase, 
                                includeUppercase, 
                                includeNumbers, 
                                includeSymbols);

console.log(`Generate password: ${password}`);



