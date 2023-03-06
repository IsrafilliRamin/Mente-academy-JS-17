

let malinQiymeti = document.querySelector(".malinQiymeti");
let sayi = document.querySelector(".sayi");
let cemi = document.querySelector(".cemi");
let increment = document.querySelector(".incrment");
let decrement = document.querySelector(".decrement");





let newPrice = 200;
cemi.innerHTML = newPrice
malinQiymeti.innerHTML = newPrice;
let newCount = 1;
sayi.innerHTML = newCount;




increment.addEventListener("click",()=>{
    newCount ++ ;
    sayi.innerHTML = newCount;
    cemi.innerHTML = newPrice * newCount

    if(newCount > 1){
        decrement.removeAttribute("disabled");
        decrement.style.backgroundColor = "green"
    }

})



decrement.addEventListener("click",()=>{
    

    if(newCount <= 1){
        decrement.setAttribute("disabled","")
        decrement.style.backgroundColor = "gray"
        newCount = 1;
       
    }else{
        newCount -- ;
        sayi.innerHTML = newCount;
        cemi.innerHTML = newPrice * newCount
    }

})






/* DOM  2-ci dersinin movzusu setAttribut*/



/* 3-cu bir deyiseni elave etmeden 2 deyiseknin yerini deyisin  */

let a = 5;
let b = 3;

/* b = 5 */
/* a = 3 */

a = a - b;

/* console.log(a);  */ /* a = 2 */

b = a + b 

console.log(b);  /* b = 5 */

a = b - a 

console.log(a); /* a = 3 */




