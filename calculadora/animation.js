//variaveis:

let operacao = 0
let val_1 = 0
let val_2 
let ponto = false
let operacaoMultipla = false
const res = document.querySelector("#res")  
const btnEqual = document.querySelector("#btnEqual")
const number = document.querySelectorAll("#btnNumber")
const erase = document.querySelector("#btnErase") 
const simbol = document.querySelectorAll("#btnSimb")

//numeros calculadora:

number.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        if (btn.value != ".") {
            if (res.innerHTML==="0"){
                res.innerHTML = ""    
            }
            if (res.innerHTML.length<10) {
                res.innerHTML += btn.value
            }
            
        }else{
            if (ponto == false) {
                if (res.innerHTML.length<10) {
                    res.innerHTML += btn.value
                    ponto = true
                }   
            } 
        }
    })
});

document.addEventListener("keydown", (tecla)=>{
    console.log(tecla)
    
})

//pega sinal da operação e armazena o primeiro valor a variavel val_1:

simbol.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if (val_1 !=0) {
            val_2 = parseFloat(res.innerHTML)
            switch (operacao) {
                    case 0:
                        if (val_2 === 0 ) {
                            res.innerHTML = "ERROR"                
                        } else {
                            res.innerHTML = val_1 / val_2
                        }    
                        break;
                        
                    case 1:
                        res.innerHTML = val_1 * val_2    
                        break;
                        
                        
                    case 2:
                        res.innerHTML = val_1 - val_2    
                        break;
                        
                        
                    case 3:
                        res.innerHTML = val_1 + val_2    
                        break;
                        
                }
            operacaoMultipla = true
            val_1 = parseFloat(res.innerHTML)
            
         
                res.innerHTML ="0"
         
            ponto = false
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
            
        } else {
            val_1 = parseFloat(res.innerHTML)
            res.innerHTML = "0"
            ponto = false
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
            
        }

    })
});


//armazena o segundo valor a variavel val_2 e realiza a operação escolhida anteriormente:

btnEqual.addEventListener("click", ()=>{
    val_2 = parseFloat(res.innerHTML)


    switch (operacao) {
        case 0:
            if (val_2 === 0 ) {
                res.innerHTML = "ERROR"                
            } else {
                res.innerHTML = val_1 / val_2
            }    
            break;
            
        case 1:
            res.innerHTML = val_1 * val_2    
            break;
            
            
        case 2:
            res.innerHTML = val_1 - val_2    
            break;
            
            
        case 3:
            res.innerHTML = val_1 + val_2    
            break;
            
    }
})


//ação do botão C:

erase.addEventListener("click", ()=>{
    val_1 = 0
    val_2 = 0
    res.innerHTML = "0"
    ponto = false
})



