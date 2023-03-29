
function ativaLetra(eLemento){
    const arrTexto = eLemento.innerHTML.split('');
    eLemento.innerHTML = '';
    arrTexto.forEach ((Letra, i)=>{
       setTimeout(()=>{
        eLemento.innerHTML += Letra;

            }, 70 * i);
       }) ;

}

const titulo = document.querySelector('.digitando');

ativaLetra(titulo);

