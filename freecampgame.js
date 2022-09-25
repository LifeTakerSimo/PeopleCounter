
// --------------------
// i will be testing javascript codes of freecamp 


let count = 0; 
// listen for the button to be clicked 

function up()
{   
    console.log("the button was clicked")
    count += 1 ;
    document.getElementById("count-el").textContent=count;
}


function save()
{
    let countstr = count + "->"; 
    document.getElementById("saveEl").textContent+=countstr
    count = 0;
    document.getElementById("count-el").innerText=count;
}