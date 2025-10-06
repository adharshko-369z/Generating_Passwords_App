const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
     "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];



const generateBtn = document.getElementById("generate-btn")
const copy1Btn = document.getElementById("copy1-btn")
const copy2Btn = document.getElementById("copy2-btn")

let field1 = document.getElementById("field1-el")
let field2 = document.getElementById("field2-el")
let inputEl = document.getElementById("input-el")


generateBtn.addEventListener("click", function(){
    let customLength = inputEl.value
    field1.textContent = " "
    field2.textContent = " "
    for (let i =1;i<=customLength;i++){
        let password1 = Math.floor(Math.random()*characters.length)
        field1.textContent += characters[password1]       
    }

    for (let i =1;i<=customLength;i++){
        let password2 = Math.floor(Math.random()*characters.length)
        field2.textContent += characters[password2] 
             
    }
    return 
})

copy1Btn.addEventListener("click", function(){
    navigator.clipboard.writeText(field1.textContent)
        .then(function(){
            alert("Copied!")
        })
})

copy2Btn.addEventListener("click", function(){
    navigator.clipboard.writeText(field2.textContent)
        .then(function(){
            alert("Copied!")
        })
})


















































// let isgenerate = false

// function generatePasswords(){
//     let customLength = inputEl.value
//     field1.textContent = " "
//     field2.textContent = " "
//     for (let i =1;i<=customLength;i++){
//         let password1 = Math.floor(Math.random()*characters.length)
//         field1.textContent += characters[password1]       
//     }

//     for (let i =1;i<=customLength;i++){
//         let password2 = Math.floor(Math.random()*characters.length)
//         field2.textContent += characters[password2] 
             
//     }
//     isgenerate = true 
//     return 
// }




