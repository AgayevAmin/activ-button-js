
var historycontent=document.getElementById("history-content")

const  array=[
    {
    
     tittle1:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error voluptas sit aliquid rerum tempore est.",
     text1:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error voluptas sit aliquid rerum tempore est."
    },
    {
    tittle2:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, facere.",
    text2:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, facere."

    },
    {
    
    tittle3:"Lorem ipsum dolor sit amet.",
    text3:"Lorem ipsum dolor sit amet."
    }
]
const  div1=document.createElement("div")
div1.classList.add("historyt")
historycontent.appendChild(div1)




const  div2=document.createElement("div")
div2.classList.add("vision")
historycontent.appendChild(div2)





const  div3=document.createElement("div")
div3.classList.add("goals")
historycontent.appendChild(div3)


array.forEach(element =>{
   const  tittle1=document.createElement("h3")
   const  tittle2=document.createElement("h3")
   const  tittle3=document.createElement("h3")
   


 
   

   const text1=document.createElement("p")
   const text2=document.createElement("p")
   const text3=document.createElement("p")
  
  div1.appendChild(tittle1)
  tittle1.textContent=element.tittle1
  div2.appendChild(tittle2)
  tittle2.textContent=element.tittle2
  div3.appendChild(tittle3)
 tittle3.textContent=element.tittle3
   
  div1.appendChild(text1)
  text1.textContent=element.text1
  div2.appendChild (text2)
  text2.textContent=element.text2
  div3.appendChild(text3)
  text3.textContent=element.text3


})




var historytab=document.getElementById("history-tab")
var visiontab=document.getElementById("vision-tab")
var goalstab=document.getElementById("goals-tab")


var historyt=document.querySelector(".historyt")
var vision=document.querySelector(".vision")
var goals=document.querySelector(".goals")

historytab.addEventListener("click",function(){
   historyt.style.display='block'
   vision.style.display='none'
   goals.style.display='none'
   
});

visiontab.addEventListener("click",function(){
   historyt.style.display='none'
   vision.style.display='block'
   goals.style.display='none'
});
goalstab.addEventListener("click",function(){
   historyt.style.display='none'
   vision.style.display='none'
   goals.style.display='block'


   
});