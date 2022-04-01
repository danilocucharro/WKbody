const campo = document.getElementById('campo')
campo.addEventListener('submit', handleSubmit);

function handleSubmit(event){
event.preventDefault();

const peso = getInputNumberValue('campo');

console.log(campo);
}

//function getInputNumberValue(id){
    //return Number(document.getElementById(id).value);

//}