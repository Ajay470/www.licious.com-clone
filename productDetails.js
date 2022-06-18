let data={
    ProductID:"chicken-101",
    image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/58b7f670-6e56-a198-73a6-039b07182868/original/ChickenLC.jpg?format=webp",
    Title:"Chicken Curry Cut (Small Pcs)",
    Details:"Small pieces of bone-in & boneless chicken for curries",
    Netwt:"500gms",
    Gross:"526gms",
    MRP:"170",
  
    Delivery:"Normal Delivery",
    ChickenType:"Broiler",
    BoneType:"Bone-in",
    CutType:"Breast",
    BestSuitedFor:"Grill",
    PackSize:"Regular",
  
    productPageDetails:"With our Chicken Curry Cut on hand, making a delicious chicken curry has never been easier! Licious Chicken Curry Cut is a mix of bone-in, small pieces of breast, wing (without the tip), leg and thigh meat, enough to feed a small to medium-sized family. This Small pack consists of 13-16 pieces of smaller cuts of chicken, for when you are making a smaller portion of curry or looking to reduce cooking time. Smaller pieces of chicken cook faster because of the higher surface-to-volume ratio.These pieces remain juicy and turn tender once cooked. Make Andhra Style Chicken Curry, Dhaba Style Chicken Curry, Mughlai Chicken Curry and more with Licious Chicken Curry Cut (Small).  Licious chickens are raised on bio-secure farms and are antibiotic-residue free.",
    Serves:"4",
    image1:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_5785b9065d7e1/3/prod_display_image/1584770437.9208--2020-03-2111:30:37--738?format=webp"
  }

//let data=JSON.parse(localStorage.getItem("in-page-obj"));

//PRODUCT DETAILS DISPLAY - 1

let image=document.createElement("img")
image.setAttribute("src", data.image)
let title=document.createElement("h1")
title.innerText=data.Title
let details=document.createElement("p")
details.innerText=data.productPageDetails
let div2=document.createElement("div")
let image5=document.createElement("img")
image5.setAttribute("src", "https://d2407na1z3fc0t.cloudfront.net/Banner/ColdCut.png")
image5.setAttribute("id", "imgwt")
let netwt=document.createElement("p")
netwt.innerText="Net wt."+data.Netwt;
let image6=document.createElement("img")
image6.setAttribute("src", "https://d2407na1z3fc0t.cloudfront.net/Banner/Netwt.png")

let grosswt=document.createElement("p")
grosswt.innerText="Gross Wt."+data.Gross;
div2.append(image6, grosswt, image5, netwt)
let price=document.createElement("h2")
price.innerText="MRP:₹"+data.MRP
let btn=document.createElement("button")
btn.innerText="ADD TO CART"
btn.addEventListener("click", addtoCart)
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
btn2.addEventListener("click", addtoCart)
let line2=document.createElement("hr")
let image4=document.createElement("img")
image4.setAttribute("src", "https://www.licious.in/img/rebranding/express_delivery.svg")
let delivery2=document.createElement("p")
delivery2.innerText="Tomorrow 6 AM - 8 AM"

document.querySelector("#price").append(price2, btn2, line2, image4, delivery2)

function addtoCart(){
    let cartProduct=JSON.parse(localStorage.getItem("cartpage")) || []
    let filtered=cartProduct.filter(function(el){
        
        return el.ProductID === data.ProductID;
        
    })
    console.log(filtered)
    if(filtered.length>0){
        alert("Product is already in Cart")
    }else{
        cartProduct.push(data)
        localStorage.setItem("cartpage", JSON.stringify(cartProduct));
        window.location.reload();
    }
}
