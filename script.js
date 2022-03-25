class Validator{
    constructor(){
        this.validations = [        

        ]
        
}

//iniciar validação de todos os campos
validate(form) {
    //pegar os inputs

    let inputs = form.getElementsByTagName('input');

    console.log(inputs);

    //Transformo uma HTMLCollection -> array
    let inputsarray= [...inputs]
    console.log(inputsarray);
}
}

let form = document.getElementById("ajuster-form")
let submit = document.getElementById("btn-submit")

let validator = new Validator();

//evento que dispara as validações
submit.addEventListener('click', function(e){
    
    e.preventDefault();

    validator.validate(form);

})

function cadPessoa(segunda,terça,quarta,quinta,sexta,sabado){
    var tb = document.getElementById("tbPessoa");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    //var cellCodigo = linha.insertCell(0);
    var cellSegunda = linha.insertCell(0);
    var cellTerça = linha.insertCell(1);
    var cellQuarta = linha.insertCell(2);
    var cellQuinta = linha.insertCell(3);
    var cellSexta = linha.insertCell(4);
    var cellSabado = linha.insertCell(5);

    //cellCodigo.innerHTML = qtdLinhas ;
    cellSegunda.innerHTML = segunda ;
    cellTerça.innerHTML = terça ;
    cellQuarta.innerHTML = quarta ;
    cellQuinta.innerHTML = quinta ;
    cellSexta.innerHTML = sexta ;
    cellSabado.innerHTML = sabado ;

} 


/*class treino{
    constructor(){
        this.arrayProdutos;

    }
    ///adicionar(segunda){
        //this.arrayProdutos.push(segunda);

    //}
}   

    /*listatabela() {
    let tbody = document.getElementById('tbody')
    for(let i = 0; i < this )
    }*/