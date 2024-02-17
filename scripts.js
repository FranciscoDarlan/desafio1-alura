alert('Boas Vindas ao Nosso Site!')

let nome = 'Lua';


let idade = 25;


let numeroDeVendas = 50;



let saldoDisponivel = 1000;


alert('alerta de Erro! Preencha todos os campos');

let mensagemDeErro = 'Erro com let! Preencha todos os campos';
alert(mensagemDeErro);

let usuario = prompt('Qual Nome do Usuário?');
console.log(usuario);

let idade_P = prompt('Qual sua Idade?');
console.log(idade_P);

if (idade_P >= 18 ){
    alert(`${usuario} Você pode tirar habilitação!`)
}else{
    alert(`${usuario } você tem menos de 18 anos, não pode tirar habilitação!`)
};



