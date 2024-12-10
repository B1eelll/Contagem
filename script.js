let inicio = document.getElementById('numero');
let fim = document.getElementById('ate');
let passo = document.getElementById('dequanto');
const botao = document.getElementById('contagem');

function resultado(){

    let inicioval = parseInt(inicio.value);
    let fimval = parseInt(fim.value);
    let passoval = parseInt(passo.value);
    let resultadosconta = document.getElementById('resultadoc')

    if (!inicioval || !fimval || !passoval) {
        alert('Os campos não podem estar vazios ou com valores iguais ou menores a 0!')
    }else{
        let i = 0
            for (i = inicioval; i <= fimval; i+= passoval) {
                    resultadosconta.innerHTML += `${i}`;
                }
        }
    }    
function entrou() {
    botao.style.backgroundColor = 'gray' 
}

function saiu() {
    botao.style.backgroundColor = 'white'
}

botao.addEventListener('click', resultado);
botao.addEventListener('mouseenter', entrou);
botao.addEventListener('mouseleave', saiu);