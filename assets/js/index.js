turn = 0

let slid = document.querySelectorAll('ul>li')

slid.forEach(function(val, index){
    val.addEventListener('click', function(){
        // console.log(index);
        let temp = val.firstChild.getAttribute('src')
        document.querySelector('.pic>img').setAttribute('src', temp)
        turn = index
    })
})

document.getElementsByClassName('right')[0].addEventListener('click', function(){
    if(turn < slid.length-1){
        turn++
    }else{
        turn =0
    }
    let temp = slid[turn].firstChild.getAttribute('src')
    show(temp)
})

document.getElementsByClassName('left')[0].addEventListener('click', function(){
    if(turn ==0){
        turn = slid.length-1
    }else{
        turn--
    }
    let temp = slid[turn].firstChild.getAttribute('src')
    show(temp)
})

function show(temp){
    document.querySelector('.pic>img').setAttribute('src', temp)
}