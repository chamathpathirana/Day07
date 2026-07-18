console.log("hii");

let num = Math.random() * 10 + 1;

let randomNum = Math.floor(num);

console.log(randomNum);

function btnAddCustomerOnAction(){
    let textInput = document.getElementById("inputText 1").value;
    for (let i = 1; i <= 3; i++){
        if (randomNum < textInput){
            let output= document.getElementById("output");
            output.textContent="higher"
           
            }else if(randomNum>textInput){
                let output= document.getElementById("output");
                output.textContent="less"

            }else{
                let output = document.getElementById("output");
                output.textContent+"win"

            }
         
        }
   }

}







