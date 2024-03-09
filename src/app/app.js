/*Menu lateral*/
var MenuLateral = document.querySelectorAll('.item-menu');

function selectlink(){
    MenuLateral.forEach((item)=>
        item.classList.remove('ativo'))
        this.classList.add('ativo')
}

MenuLateral.forEach((item) =>
    item.assEventListener('click', selectlink)
)