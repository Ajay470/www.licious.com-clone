
    let signinbtn =document.querySelector(".signin");
    signinbtn.addEventListener("click",loginSlide)
    function loginSlide(){
        document.querySelector("#person").textContent="Login"

        

    let slideup=document.querySelector(".signin-slide")
    slideup.style.right="0px"
    let slidein=document.querySelector(".signup-slide")
    slidein.style.right="-500px"
    let closelogin =document.querySelector(".close-logpop")
    closelogin.style.right="19px"
    closelogin.addEventListener("click",closelogpop)
    function closelogpop(){
        slideup.style.right="-500px"
    }
    }


    let  sighup =document.querySelector("#signupage");
    sighup.addEventListener("click",moveTosignup)

    let  signupin =document.querySelector("#signuptosignin");
    signupin.addEventListener("click",loginSlide)

    function moveTosignup(){
    let slideup=document.querySelector(".signup-slide")
    slideup.style.right="0px"
    let slidein=document.querySelector(".signin-slide")
    slidein.style.right="-500px"
    let closelogin =document.querySelector(".close-signpop")
    closelogin.style.right="19px"
    closelogin.addEventListener("click",closelogpop)
    function closelogpop(){
        slideup.style.right="-500px"
    }
    }
    let userdetails=JSON.parse(localStorage.getItem("user-detail"))||[];
    

    let formup=document.querySelector("#signuppp");

    formup.addEventListener("submit",signupuser)

    function signupuser(event){
        event.preventDefault()
        let inputdata={
            name:formup.sname.value,
            email:formup.semail.value,
            password:formup.spassword.value
        }
        if(checkdata(inputdata.email)==true){
            userdetails.push(inputdata);
            alert("Account created sucessfuly")
            localStorage.setItem("user-detail",JSON.stringify(userdetails))
            formup.sname.value=""
            formup.semail.value=""
            formup.spassword.value=""
            loginSlide()
        }else{
            alert("Already have an account")
        }   
    }
    function checkdata(id){
        let count=0;
        for(let i=0; i<userdetails.length; i++){
            if(userdetails[i].email===id){
                count++;
            }
        }
        if(count==0){
            return true;
        }else{
            return false;
        }
       
    }
    //login use

    let formin=document.querySelector("#signinin");

    formin.addEventListener("submit",makeLoginin)


    function makeLoginin(event){
        event.preventDefault();
        let loginArrr=[];
        count=0;
        for(let i=0; i<userdetails.length; i++){
            if(userdetails[i].email===formin.inmail.value && userdetails[i].password==formin.inpassword.value){
                loginArrr.push(userdetails[i]);
                count++;
            }
        }  
        if(count==1){
            alert("Successfully Signin") 
            formin.inmail.value=""
            formin.inpassword.value=""
            itscool(loginArrr);
        }else{
            alert("Wrong input data") 
        }
        let slidein=document.querySelector(".signin-slide")
        slidein.style.right="-500px"
    }
    function itscool(loginArrr){
        if(loginArrr.length==1){
            console.log(loginArrr[0].name)
            document.querySelector("#person").textContent=loginArrr[0].name+"\n"+"(logout)"
    }
}
/////////////////////////////////////////////////////////////////////////cart//////////////////////

     let cartbtn =document.querySelector("#cartbtnx");

     cartbtn.addEventListener("click",openCart)

     function openCart(){
        let sjcart= document.querySelector("#surajcart");
        sjcart.style.right="0px"
        // window.location.reload();
        last
        let totalp= document.querySelector("#last");
        totalp.style.right="0px"
     }

     let cartcut =document.querySelector("#cartclose");
    

     cartcut.addEventListener("click",cartcutt)

function cartcutt(){
   let sjcart= document.querySelector("#surajcart");
   sjcart.style.right="-500px"
   // window.location.reload();
   last
   let totalp= document.querySelector("#last");
   totalp.style.right="-500px"
}


////////////////////////////////////cart start js///////////////////////////

let cartLS = JSON.parse(localStorage.getItem("cartpage")) || []

    //let count = 0;
    
    let sum=0;
    text1="Congratulations, Your delivery charge is waived off!!!";
    text2="Your cart value is less than ₹399 & delivery charge applies";
    cartLS.forEach(function (elem, index) {
        // window.location.reload()
        sum=sum+(+elem.MRP)
        //console.log(sum)
             document.querySelector("#padit>span>span").innerText=sum;
            document.querySelector("#firstHalf>h2>span").innerText=sum;
        if(sum>399){
            document.querySelector("#extraCharge").innerText=0
            document.querySelector("#deliveryCharge>h4").innerText=text1;
            // document.querySelector("#padit>span>span").innerText=sum;
            // document.querySelector("#firstHalf>h2>span").innerText=sum;
        }else{
            document.querySelector("#extraCharge").innerText=39
            document.querySelector("#padit>span>span").innerText=sum+39;
            document.querySelector("#firstHalf>h2>span").innerText=sum+39;
            
        }
      
       
      


     

        document.querySelector("#subtotal").innerText=sum
        
        
       
        
        let firstDiv = document.createElement("div")
        firstDiv.setAttribute("class", "mainAttached")
        document.getElementById("main").append(firstDiv)

        let rowFirstDiv = document.createElement("div")
        rowFirstDiv.setAttribute("class", "firstLine")
        document.querySelector(".mainAttached").append(rowFirstDiv)

        let serial = document.createElement("span")
        let index1=index
        serial.innerText = ++index1;
        serial.setAttribute("class", "sr_no")
        rowFirstDiv.append(serial)

        let name = document.createElement("div")
        name.setAttribute("class", "nameBox")
        rowFirstDiv.append(name)

        let h4 = document.createElement("h4")
        h4.innerText = elem.Title;
        name.append(h4)

        let cancle = document.createElement("span")
        cancle.innerText = "X"
        cancle.setAttribute("class", "deleteRow")
        rowFirstDiv.append(cancle)


        //for deleting row
        cancle.addEventListener("click", function () {
       
        deleteOne(index,elem);

        })

        // 2nd line


        let rowSecondDiv = document.createElement("div")
        rowSecondDiv.setAttribute("class", "secondLine")
        document.querySelector(".mainAttached").append(rowSecondDiv)

        let wt = document.createElement("span")
        wt.setAttribute("class", "item_weight");
        wt.innerText = elem.Netwt || elem.Pieces
        rowSecondDiv.append(wt)

        let price = document.createElement("span")
        price.setAttribute("class", "item_price")
        price.innerText = "₹" + elem.MRP;
        rowSecondDiv.append(price)

        //for counter in 2nd line
        let counterDiv = document.createElement("div")
        counterDiv.setAttribute("class", "counter")
        rowSecondDiv.append(counterDiv)


        let quantity = document.createElement("span")
        quantity.innerText = 1;
        quantity.setAttribute("class", "item_qty")

        let minus = document.createElement("span")
        minus.innerText = "-"
        minus.setAttribute("class", "minus_one")
        
        minus.addEventListener("click", function () {
           quantity.innerText--;
           if(quantity.innerText==0){
            deleteOne(index,elem)
           }
           minusOne(elem,index)
        })

       
        

        let plus = document.createElement("span")
        plus.innerText = "+";
        plus.setAttribute("class", "plus_one")
        counterDiv.append(minus,quantity,plus)

        plus.addEventListener("click", function () {
            quantity.innerText++;
            addOne(elem,index)
        })

        let hor_line = document.createElement("hr")
        hor_line.setAttribute("class", "hr_line")
        document.querySelector(".mainAttached").append(hor_line)
        
    })


 function deleteOne(index,elem){
       cartLS.splice(index, 1);
       console.log(cartLS)
      localStorage.setItem("cartpage", JSON.stringify(cartLS))
      window.location.reload()
 }

 function addOne(elem,index){
    sum=sum+ (+elem.MRP)
    let disc=sum*0.1;
    document.querySelector("#gotDiscounted").innerText=disc
    document.querySelector("#subtotal").innerText=sum;
    document.querySelector("#padit>span>span").innerText=sum;
    document.querySelector("#firstHalf>h2>span").innerText=sum;
    
    if(sum>399){
        document.querySelector("#extraCharge").innerText=0
        document.querySelector("#deliveryCharge>h4").innerText=text1;
    }
}
function minusOne(elem,index){
    sum=sum- (+elem.MRP)
    document.querySelector("#subtotal").innerText=sum;
    

    if(sum<399){
        document.querySelector("#extraCharge").innerText=39
        document.querySelector("#padit>span>span").innerText=sum+39;
    document.querySelector("#firstHalf>h2>span").innerText=sum+39;
    document.querySelector("#deliveryCharge>h4").innerText=text2;
    }else{
        document.querySelector("#padit>span>span").innerText=sum;
    document.querySelector("#firstHalf>h2>span").innerText=sum;
    document.querySelector("#deliveryCharge>h4").innerText=text1;
    }
   
}
