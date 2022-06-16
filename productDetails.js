// DUMMY DATA 
let data={
    ProductId:"cook101",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/59f81a69-ae84-72e8-b310-92678caa5a4b/original/Crispy-Chicken-Wings-Tag_(1).jpg?format=webp",
    Title:"Crispy Chicken Wings | Ready To Cook",
    productPagedetails:"Craving crispy, juicy wings but don't have the time to make them from scratch? Licious Crispy Chicken Wings are what you need! Marinated in hot chilli seasoning, the wings are then coated in batter & covered in panko bread crumbs. This means that all you have to do is to deep-fry these wings & it's ready within 8 minutes! Have the crispy, juicy wings with a squeeze of lime or paired with your favourite condiment.",
    Details:"Chicken wings marinated in spices & coated in panko crumbs.",
    Netwt:"225gms", 
    Pieces:"7-8",
    MRP:"99",
    Menu:"Wings",
   image1:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/710f58cb-052c-7e81-a97b-3962aff07022/original/Crispy-Chicken-Wings"
}
//PRODUCT DETAILS DISPLAY - 1

let image=document.createElement("img")
image.setAttribute("src", data.image)
let title=document.createElement("h1")
title.innerText=data.Title
let details=document.createElement("p")
details.innerText=data.productPagedetails
let div2=document.createElement("div")
let image5=document.createElement("img")
image5.setAttribute("src", "https://d2407na1z3fc0t.cloudfront.net/Banner/Netwt.png")
let netwt=document.createElement("p")
netwt.innerText="Net wt."+data.Netwt;
div2.append(image5, netwt)
let price=document.createElement("h2")
price.innerText="MRP:₹"+data.MRP
let btn=document.createElement("button")
btn.innerText="ADD TO CART"
let line=document.createElement("hr")
let image2=document.createElement("img")
image2.setAttribute("src", "https://www.licious.in/img/rebranding/express_delivery.svg")
let delivery=document.createElement("p")
delivery.innerText="Tomorrow 6 AM - 8 AM"

document.querySelector(".image").append(image)
document.querySelector(".details").append(title, details, div2, price, btn, line, image2, delivery)

//PRODUCT DETAILS DISPLAY - 2

let image3=document.createElement("img")
image3.setAttribute("src", data.image)
let div=document.createElement("div")
let title2=document.createElement("h3")
title2.innerText=data.Title
let title3=document.createElement("p")
title3.innerText=data.Title

div.append(title2, title3);
document.querySelector("#product").append(image3, div);

let price2=document.createElement("h2")
price2.innerText="MRP:₹"+data.MRP
let btn2=document.createElement("button")
btn2.innerText="ADD TO CART"
let line2=document.createElement("hr")
let image4=document.createElement("img")
image4.setAttribute("src", "https://www.licious.in/img/rebranding/express_delivery.svg")
let delivery2=document.createElement("p")
delivery2.innerText="Tomorrow 6 AM - 8 AM"

document.querySelector("#price").append(price2, btn2, line2, image4, delivery2)
