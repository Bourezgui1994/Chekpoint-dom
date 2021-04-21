// total price 

total=Number(document.getElementById('tot').innerHTML)




//increment buttom



var btn1 = document.getElementsByClassName('btn-warning');


for (let i = 0; i < btn1.length; i++) {
    btn1[i].addEventListener('click', function() {
        btn1[i].nextElementSibling.value ++
        let price =Number(btn1[i].parentNode.previousElementSibling.innerHTML)
        total+=price
document.getElementById('tot').innerHTML=total

    })
}

// decrement buttons
var btn2 = document.getElementsByClassName('btn-danger');

for (let i = 0; i < btn2.length; i++) {
    btn2[i].addEventListener('click', function() {
        if (btn2[i].previousElementSibling.value > 1)
       { btn2[i].previousElementSibling.value --
        let price =Number(btn1[i].parentNode.previousElementSibling.innerHTML)
        total-=price
    }
    document.getElementById('tot').innerHTML=total
    })
}


// heart favoris 

var fav =document.getElementsByClassName('fa-heart');

for (let i = 0; i < fav.length; i++) {

fav[i].addEventListener('click', function() {
    if (fav[i].style.color === "red") {
        fav[i].style.color = 'gray'
    } else {
        fav[i].style.color = "red"
    }
})

}


// remove card 

var  btnClose = document.getElementsByClassName('btn-close');
console.log(btnClose)

 for (let i =0; i<btnClose.length; i++) {
    btnClose[i].addEventListener('click', function() {
let price =btnClose[i].parentNode.children[1].innerHTML
console.log(price)
let qty=btnClose[i].parentNode.children[2].children[1].innerHTML

total-=(price*qty)
        btnClose[i].parentNode.remove()
        document.getElementById('tot').innerHTML=total
      
    })
 }


