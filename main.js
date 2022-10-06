const firstLine = document.querySelector(".firstLine");
const secondLine = document.querySelector(".secondLine");
const buttons = document.querySelectorAll("[operator]");
const allClear = document.querySelector(".allClear");
const backSpace = document.querySelector(".backSpace");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const equal = document.querySelector(".equal");
let operator;
buttons.forEach((item)=>{
    item.addEventListener("click",()=>{
        if ( secondLine.textContent.includes(".") && item.textContent==="." ) return;
        if ( secondLine.textContent.length>12 ) {
            alert("the number exceed the limit");
            return
        }
        secondLine.textContent += item.textContent
    })
})
allClear.addEventListener("click",()=>{
    firstLine.textContent = "";
    secondLine.textContent = "";
    operator = ""
})
backSpace.addEventListener("click",()=>{
    secondLine.textContent = secondLine.textContent.slice(0,-1);
})
plus.addEventListener("click",()=>{
    condition("+","+")
})
minus.addEventListener("click",()=>{
    condition("-","-")
})
multiply.addEventListener("click",()=>{
    condition("*","*")
})
divide.addEventListener("click",()=>{
    condition("/","/")
})
equal.addEventListener("click",()=>{
    condition(operator,"")
})
function condition(pari1,pari2) {
    if (firstLine.textContent === "" && secondLine.textContent==="") return;
    if (firstLine.textContent !== "" && secondLine.textContent===""){
        operator = pari1;
        return;}
    if ((firstLine.textContent === "" && secondLine.textContent!=="")||(operator === "")){
        firstLine.textContent = parseFloat(secondLine.textContent).toString();
        secondLine.textContent = "";
        operator = pari1;
        return
    }
    switchCase();
    operator = pari2;
}
function switchCase() {
    switch (operator) {
        case "":
            break
        case "+":
            firstLine.textContent = parseFloat(firstLine.textContent) + parseFloat(secondLine.textContent);
            secondLine.textContent = "";
            break
        case "-":
            firstLine.textContent = parseFloat(firstLine.textContent) - parseFloat(secondLine.textContent);
            secondLine.textContent = "";
            break
        case "*":
            firstLine.textContent = parseFloat(firstLine.textContent) * parseFloat(secondLine.textContent);
            secondLine.textContent = "";
            break
        case "/":
            firstLine.textContent = parseFloat(firstLine.textContent) / parseFloat(secondLine.textContent);
            secondLine.textContent = "";
            break
        default:
            break}
}