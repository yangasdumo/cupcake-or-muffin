
     
const message = document.querySelector(".message");
const muffin_price = document.querySelector(".muffin_price");
const cupcake_price = document.querySelector(".cupcake_price");
const buttonElement = document.querySelector(".button");

    function N (){
        // console.log(cupcake_price.value)
        // alert('12')

        // message.innerHTML = muffin_price.value;
        message.innerHTML = whatToBuy(Number(cupcake_price.value), Number(muffin_price.value))
     
}

buttonElement.addEventListener('click',N);