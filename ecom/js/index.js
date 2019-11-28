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
let subbtn=document.getElementById("submitbtn");
let final=document.getElementById("final");


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

function showPromo(){
  promo.style.display='block';
}

promobtn.addEventListener("click", showPromo);

function discount(){
  let code=document.getElementById("code").value;

  if(code=="NOTAX"){
    final.innerHTML=`Your total after discount is $ `+ subtotal.innerHTML;
  }
  else if(code=="FIFTYFIFTY"){
    final.innerHTML=`Your total after discount is $ `+ (parseFloat(total.innerHTML)/2).toFixed(2);
  }
  else{
    alert(`your promo code is not valid`);
  }
}

subbtn.addEventListener("click",discount);
