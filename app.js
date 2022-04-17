const feature = document.querySelector(".feature")
const company = document.getElementById("company")
const card = document.querySelector(".card")
const news = document.querySelector(".new")
const show = document.querySelector(".show")
const ar = document.querySelector(".ar")
const u = document.querySelector(".u")
const x = document.querySelector(".u")
const ar1 = document.querySelector(".ar1")
const u1= document.querySelector(".u1")

const mobmenu = document.querySelector(".mobmenu")
const hammenu = document.querySelector(".hammenu")
const close = document.querySelector(".close")
const shift = document.querySelector(".shift")
const shift1 = document.querySelector(".shift1")

const myfeature = document.querySelector(".myfeature")
const mycompany = document.querySelector(".mycompany") 


const arrowup = document.querySelector(".arrowup")
const arrowdown = document.querySelector(".arrowdown")

const arrowup1 = document.querySelector(".arrowup1")
const arrowdown1 = document.querySelector(".arrowdown1")


hammenu.addEventListener("click",()=>{

   mobmenu.classList.toggle("slide")
   console.log("h")

})

close.addEventListener("click",()=>{
    mobmenu.classList.toggle("slide")

})
 


feature.addEventListener("click",()=>{

   card.classList.toggle("show")
    ar.classList.toggle("h")
    u.classList.toggle("v")
    shift.classList.toggle("appear")
    console.log("j")

})

myfeature.addEventListener("click",(e)=>{

   arrowdown.classList.toggle("hidden")
   arrowup.classList.toggle("display")
   shift.classList.toggle("pop")
   
    
    console.log("l")
})


company.addEventListener("click",()=>{

    news.classList.toggle("show")
    ar1.classList.toggle("h1")
    u1.classList.toggle("v1")
  
 
 })


 mycompany.addEventListener("click",()=>{

    arrowdown1.classList.toggle("hidden")
    arrowup1.classList.toggle("display")
    shift1.classList.toggle("pop")
 })
