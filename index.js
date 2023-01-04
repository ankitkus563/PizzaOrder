
var PlaceOrder = document.getElementById("PlaceOrder");


PlaceOrder.addEventListener("click",function(){
var numOfPizza = document.getElementById("numOfPizza").value;
var typeOfPizza = document.getElementById("typeOfPizza").value;
var orderFrom = document.getElementById("orderFrom").value;

var DeliveryCharge;
var totalPrice;
var YourOrder;

/*<p>Paneer Pizza - Rs.99 <br>
        Egg Pizza - Rs.100 <br>
        Special Pizza - Rs.399

    </p>*/

    if(numOfPizza<1){

        document.getElementById("warn").innerHTML= "Please Type Number of Pizza";
        document.getElementById("box-2").innerHTML = "";
document.getElementById("box-3").innerHTML ="";
document.getElementById("box-4").innerHTML ="";
document.getElementById("box-5").innerHTML ="";
    }else{

        document.getElementById("warn").innerHTML= "";

if((numOfPizza>5)||(orderFrom =="Gurugram")){

    DeliveryCharge = 0;
   
}
else{

    DeliveryCharge = 50;
    
    

}

if(typeOfPizza=="PaneerPizza"){

    totalPrice = (numOfPizza*99)+DeliveryCharge;
     YourOrder= "PaneerPizza";
}else if(typeOfPizza=="EggPizza"){
    totalPrice = (numOfPizza*100)+DeliveryCharge;
    YourOrder= "EggPizza";
}else if(typeOfPizza=="SpecialPizza"){

    totalPrice = (numOfPizza*399)+DeliveryCharge;
    YourOrder= "SpecialPizza";
} else{

    totalPrice = (numOfPizza*0)+DeliveryCharge;
}

document.getElementById("box-2").innerHTML = "Your Delivery Charge is "+DeliveryCharge;
document.getElementById("box-3").innerHTML ="Your order is "+YourOrder;
document.getElementById("box-4").innerHTML ="your order is from "+orderFrom;
document.getElementById("box-5").innerHTML ="your total price is "+totalPrice;

console.log("your total price "+totalPrice);
console.log("Your Delivery Charge is "+DeliveryCharge);
console.log("Your order is "+YourOrder);
}

});