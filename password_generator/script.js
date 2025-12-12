const resultEl = document.getElementById("result") 
const lengthEl = document.getElementById("length") 
const uppercaseEl = document.getElementById("uppercase") 
const lowercaseEl = document.getElementById("lowercase") 
const numbersEl = document.getElementById("numbers") 
const symbolsEl = document.getElementById("symbols") 
const clipboardBtn = document.getElementById("clipboard") 
const generateBtn = document.getElementById("generate") 
const warningEl = document.querySelector(".warning")

const randomFunc = {
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
}

clipboardBtn.addEventListener("click", ()=>{
    const textarea = document.createElement("textarea")
    const password = resultEl.innerText

    if(!password){
        warningEl.innerText = 'There is nothing to copy'
        return
    }
    textarea.value = password

    document.body.appendChild(textarea)
    textarea.select()

    document.execCommand('copy')
    textarea.remove()
    
    alert('Password Copied to Clipboard')
})


generateBtn.addEventListener("click", ()=>{
    // + converts it to a number
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)

})


function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = ''

    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

    if(typesCount === 0){
        warningEl.innerText = 'Please at least include one of the things'
        return ''
    }

    warningEl.innerText = ''

    for(let i=0; i < length; i+=typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }


    const finalPassword = generatedPassword.slice(0,length)

    return finalPassword
}


function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97 )
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65 )
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48 )
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*()[]{}=<>/.,'
    return symbols[Math.floor(Math.random() * symbols.length)]
}


