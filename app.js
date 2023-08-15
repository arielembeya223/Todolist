
export function insert(){
   let form = document.querySelector("form ")
   form.addEventListener("submit",function(e){
     let content = e.currentTarget
     let contentForm= new FormData(content)
     let get = contentForm.get("title")
     let ul = document.querySelector("ul")
     let li = document.createElement("li")
     li.classList.add("todo","list-group-item","d-flex","align-items-center")
     ul.appendChild(li)
     let input = document.createElement("input")
     input.classList.add("form-check-input")
     input.setAttribute("type","checkbox")
     li.appendChild(input)
     let label= document.createElement("label")
     label.classList.add("ms-2","form-check-label")
     label.innerHTML=get
     li.appendChild(label)
     let label2=document.createElement("label")
     label2.classList.add("ms-auto","btn","btn-danger","btn-sm")
     li.appendChild(label2)
     let i = document.createElement("i")
     i.classList.add("bi-trash")
     label2.appendChild(i)
     e.preventDefault()
   })
} 
export function checkbox(){
    let checkboxs = document.querySelectorAll(".form-check-input")
    for(let checkbox of checkboxs){
        checkbox.addEventListener("change",function(e){
            console.log("bonjour")
            e.preventDefault()
        })
    }
}
 export function disapair(){
    let is = document.querySelectorAll(".bi-trash")
     for(let i of is){
        i.addEventListener("click",function(e){
            let parrent = i.parentElement.parentElement
            parrent.classList.add("d-none")
        })
     }
 }
 function ifclick(document1,document2,document3){
    document1.addEventListener('click',function(e){
         document1.classList.add("active")
         document2.classList.remove("active")
         document3.classList.remove("active")
    })
 }
export function bouton()
{
    const bouton1 = document.querySelector('button[data-filter="todo"]')
    const bouton2= document.querySelector('button[data-filter="all"]')
    const bouton3 = document.querySelector('button[data-filter="done"]')
    ifclick(bouton1,bouton2,bouton3)
    ifclick(bouton2,bouton1,bouton3)
    ifclick(bouton3,bouton2,bouton1)
}
export function checked()
{
let inputs = document.querySelectorAll(".form-check-input")
for (let input of inputs){
    input.addEventListener("change", function (e) {
        console.log("bonjour")
    })
}
}
export function filter()
{

}