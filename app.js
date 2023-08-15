
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
    let is = document.querySelector("i")
     for(let i of is){
        i.pa
     }
 }
export function bouton()
{
   let buttons = document.querySelectorAll("button")
   for(let button of buttons){
    button.addEventListener("click",function(e){
        if(button.classList.contains("active")){
           button.classList.remove("active")
        }
        button.classList.add("active")
    })
   }

}

