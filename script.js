
function escrevendoLetra(){
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
}

const ativaMenu = document.querySelector('.fa-bars');

const navMenu = document.querySelector('header .navegacao-primaria');

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})


