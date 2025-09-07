const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let field1 = document.getElementById("field1-el")
let field2 = document.getElementById("field2-el")
let isgenerate = false

function generatePasswords(){
    field1.textContent = " "
    field2.textContent = " "
    for (let i =1;i<=15;i++){
        let password1 = Math.floor(Math.random()*characters.length)
        field1.textContent += characters[password1]       
    }

    for (let i =1;i<=15;i++){
        let password2 = Math.floor(Math.random()*characters.length)
        field2.textContent += characters[password2] 
             
    }
    isgenerate = true 
    return 
}




