let buttonPantsMinus=document.getElementById("btnpantsminus");
let buttonPantsAdd=document.getElementById("btnpantsadd");
let buttonShirtMinus=document.getElementById("btnshirtminus");
let buttonShirtAdd=document.getElementById("btnshirtadd");
let buttonCalculate=document.getElementById("calculate");
let shirtPrice=document.getElementById("shirtprice");
let pantsPrice=document.getElementById("pantsprice");
let pantsQuantity=document.getElementById("pantsquantity");
let shirtQuantity=document.getElementById("shirtquantity");
let promobtn=document.getElementById("promobtn");
let promo=document.getElementById("promo");


function minusPantsQuantity(){
  pantsQuantity.innerHTML = parseInt(pantsQuantity.innerHTML)-1;

  pantsPrice.innerHTML=Math.round((parseInt(pantsQuantity.innerHTML)*40.99)*100)/100;

  if(parseInt(pantsQuantity.innerHTML)<=0){
    pantsQuantity.innerHTML=0;
    pantsPrice.innerHTML=0;
  }
}

function addPantsQuantity(){
  pantsQuantity.innerHTML = parseInt(pantsQuantity.innerHTML)+1;

  pantsPrice.innerHTML=Math.round((parseInt(pantsQuantity.innerHTML)*40.99)*100)/100;
}


buttonPantsMinus.addEventListener("click", minusPantsQuantity);
buttonPantsAdd.addEventListener("click", addPantsQuantity);

function minusShirtQuantity(){
  shirtQuantity.innerHTML = parseInt(shirtQuantity.innerHTML)-1;

  shirtPrice.innerHTML=Math.round((parseInt(shirtQuantity.innerHTML)*10.99)*100)/100;

  if(parseInt(shirtQuantity.innerHTML)<=0){
    shirtQuantity.innerHTML=0;
    shirtPrice.innerHTML=0;
  }
}

function addShirtQuantity(){
  shirtQuantity.innerHTML = parseInt(shirtQuantity.innerHTML)+1;

  shirtPrice.innerHTML=Math.round((parseInt(shirtQuantity.innerHTML)*10.99)*100)/100;
}

buttonShirtMinus.addEventListener("click", minusShirtQuantity);
buttonShirtAdd.addEventListener("click", addShirtQuantity);

function calculateTotal(){
  let subtotal=document.getElementById("subtotal");
  let tax=document.getElementById("tax");
  let total=document.getElementById("total");

  subtotal.innerHTML=Math.round((parseFloat(pantsPrice.innerHTML)+parseFloat(shirtPrice.innerHTML))*100)/100;

  tax.innerHTML=Math.round((parseFloat(subtotal.innerHTML)*0.13)*100)/100;

  total.innerHTML=Math.round((parseFloat(subtotal.innerHTML)+parseFloat(tax.innerHTML))*100)/100;
}

buttonCalculate.addEventListener("click",calculateTotal);

function coupon(){
  promo.innerHTML=`Please input your Promo Code`;
  var x = document.createElement("input");
  x.setAttribute("type", "text");
  document.body.appendChild(x);
  var y = document.createElement("input");
  y.setAttribute("type", "submit");
  document.body.appendChild(y);
}

promobtn.addEventListener("click", coupon);

// function apply(){
//   var discount=document.getElementById("discount");
//   if(x.innerHTML=`NOTAX`){
//     discount.innerHTML=`Discount: $ ${tax}`;
//   } elseif(x.innerHTML=`FIFTYFIFTY`){
//     discount.innerHTML=`Discount: $ `+ total*0.5;
//   }
// }

// let submit=document.getElementById("submit");
// submit.addEventListener("click", apply);