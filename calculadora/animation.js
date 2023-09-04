const res = document.querySelector("#res")  
let val_1, val_2

const number = document.querySelectorAll("#btnNumber")


number.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        if (res.innerHTML.length<10) {
            res.innerHTML += btn.value
        }
        
        
    })
});

const simbol = document.querySelectorAll("#btnSimb")

let operacao = 0

simbol.forEach(btn => {
    btn.addEventListener("click", ()=>{
        val_1 = parseFloat(res.innerHTML)
        res.innerHTML = ""

        switch (btn.value) {
            case "/":
                operacao = 0
                break;
            case "*":
                operacao = 1
                break;
            case "-":
                operacao = 2
                break;
            case "+":
                operacao = 3
                break;

        }        
    })
    
});

