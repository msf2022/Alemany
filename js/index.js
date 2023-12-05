// display buy now when mouce hover to the image
const prices = document.querySelectorAll(".price");
const images = document.querySelectorAll(".course_image");
const buys = document.querySelectorAll(".buy");

images.forEach(function (image) {
    
    image.addEventListener("mouseenter", function (e) {
        images.forEach((image) => {
                image.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        let selector1 = `.active .price`
        let selector2 = `.active .buy`
        const cost = document.querySelector(selector1);
        const buy = document.querySelector(selector2);
        if (cost.innerHTML !== "مجانا") {
            buy.style.display="block"
        }
        // buy.addEventListener("mouseclick",function(){
        //     let productblock = document.(".products-block")
        //     let item = `<div class="row w-75 product-row" >
        //     <div class="col-md-1 border text-danger ">
        //       <span class="delet-icon pt-2"><i class="fa-solid fa-xmark fa-2x"></i></span> 
        //     </div>
        //     <div class="col-md-1 border pt-2"><img class="img-fluid" src="images/5.jpg" alt=""></div>
        //     <div class="col-md-6 border pt-2">المنتج</div>
        //     <div class="col-md-1 border pt-2 product-price">5236</div>
        //     <div class="col-md-1 border pt-2">الكمية</div>
        //     <div class="col-md-2 border pt-2">المجموع</div>
        // </div>` ; 
        // productblock.insertAdjacentHTML("beforeend",item);
        // })
    })
    image.addEventListener("mouseleave", function (e) {
        images.forEach((image) => {
                image.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        let selector1 = `.active .price`
        let selector2 = `.active .buy`
        const cost = document.querySelector(selector1);
        const buy = document.querySelector(selector2);
        if (cost.innerHTML !== "مجانا") {
            buy.style.display="none"
        }
    })
})

// start cart page 

// const emptycart = document.querySelector(".empty-cart");
// const fullcart = document.querySelector(".full-cart");
// const productsprices = document.querySelectorAll(".product-price");

// function show(){
//     productsprices.forEach(function(productprice){
//         if(productprice.innerHTML===""){
//             emptycart.classList.remove("d-none");
//             fullcart.classList.remove("d-none");
//             fullcart.classList.add("d-none");
//         }
//         else{
//             emptycart.classList.remove("d-none");
//             fullcart.classList.remove("d-none");
//             emptycart.classList.add("d-none");
//         }
//     });

// }


// document.addEventListener("load",show());


// star my-cources page

const corsestatus = document.querySelectorAll(".corse-status");
const corsecertificate = document.querySelectorAll(".corse-certificate");

function showcertificate(){
for(let i=0; i<corsestatus.length; i++){
    for(let j=0; j<corsecertificate.length; j++){
        if(corsestatus[i].innerHTML==="تم انهاء الدورة بنجاح"){
            corsecertificate[i].classList.remove("d-none")
        
        }
        else{
            
            corsecertificate[i].classList.add("d-none")
           
            
        }
    }
}
}




// function showcertificate(){
// corsesstatus.forEach(function(corsestatus){
//     corsecertificates.forEach(function(corsecertificate){
//         if(corsestatus.innerHTML==="تم انهاء الدورة بنجاح"){
//             corsecertificate.classList.remove("d-none")
        
//         }
//         else{
//             corsecertificates.forEach(function(corsecertificate){
//                 corsecertificate.classList.add("d-none")
//             })
            
//         }
       
//     })


   
// })
// }

document.addEventListener("load",showcertificate());




// start course-data page

const corseprice =document.querySelector(".corse-price");
const buynow =document.querySelector(".buy-now");
const gonow =document.querySelector(".go-now");



function hide (){

    if(corseprice.innerHTML === "مجانا"){
        buynow.classList.add("d-none");
        gonow.classList.remove("d-none")
    }
    else{
        buynow.classList.remove("d-none")
        gonow.classList.add("d-none")
    }
    
}

document.addEventListener("load",hide());

