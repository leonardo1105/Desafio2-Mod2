{
    let idade=19;
    if(idade > 18){
        console.log('Você possui mais de 18 anos')}
    else if(idade == 18){
        console.log('Você tem 18 anos')
    }
    else{
        console.log('Você é menor de idade')
    }
}
{
    let idade=20;
    let condicaoHumana=true;
    if(idade > 18 && condicaoHumana){
        console.log('Parábens, você é maior de idade e a sua condição humana é verdadeira')
    }else{
        console.log('Sinto muito, você não atende aos requesitos')
    }
}
let mesAniversario='Janeiro';
if (mesAniversario === 'Janeiro' || mesAniversario === 'Dezembro' ){
    console.log(`Você é do mês de ${mesAniversario}`);
}

let nome='Leonardo'
let cond=nome[0]
if(cond==='R'){
    console.log('Seu nome começa com R')
}else{
    console.log('Seu nome não começa com R')
}

if(cond==='E' || nome.length > 6){
    console.log('Parabéns, você tem sorte')
}else{
    console.log('Você está com azar hoje')
}