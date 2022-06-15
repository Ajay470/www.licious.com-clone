
let data={
    ProductID:"chicken-107",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/041fd1e0-80fa-2cf1-387e-5c13b7310def/original/HeroShot.jpg?format=webp",
    Title:"Chicken Drumstick",
    Details:"Bone-in,juicy meat from the lower leg with a unique flav...",
    Netwt:"450gms",
    Gross:"600gms",
    MRP:"269",
  
    Delivery:"Normal Delivery",
    ChickenType:"Broiler",
    BoneType:"Bone-in",
    CutType:"Mince",
    BestSuitedFor:"Roast",
    PackSize:"Large Pack",
  
    productPageDetails:"A mix of dark and white meat, our large Chicken Curry Cut pieces include one leg, one wing without tip, and one breast quarter with backbone. Obtained from pasture-raised healthy chickens, the meat has a rich, juicy flavour with a tender, smooth and moderate-firm texture. ",
    Serves:"4",
    image1:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/041fd1e0-80fa-2cf1-387e-5c13b7310def/original/HeroShot.jpg?format=webp"
}

//PRODUCT DETAILS DISPLAY - 1

let image=document.createElement("img")
image.setAttribute("src", data.image)
let title=document.createElement("h1")
title.innerText=data.Title
let details=document.createElement("p")
details.innerText=data.productPageDetails
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
document.querySelector(".details").append(title, details, price, btn, line, image2, delivery)

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
