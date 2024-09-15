const go = document.querySelectorAll('.to-be-continued');

go.forEach(button => {
    button.addEventListener('click', function(){
        const thenow = document.querySelector('.this');
        const nextstep = 'step-' + this.getAttribute('data-next');

        thenow.classList.remove('this');     
        document.getElementById(nextstep).classList.add('this');
    })
})