document.querySelector('.next').onclick = function(){
    var lits = document.querySelectorAll('.item')
    lits = document.querySelector('.slied').appendChild(lits[0])
}
document.querySelector('.prev').onclick = function(){
    var lits = document.querySelectorAll('.item')
    lits = document.querySelector('.slied').prepend(lits[lits.length-1])
}
