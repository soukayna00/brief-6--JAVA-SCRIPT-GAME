let btn = document.getElementById("btn");
let output=document.getElementById("outputtext");

let number=[Math.floor(math.random()*100+1)]

addEventListener('click',function(){
let input = document.getElementById('userInput').value;
if (input==number){
output.innerHTML= 'you are a genius your number was $(number)'
}else if(input<number){
    output.innerHTML="try a higher number"
};
if (input>number){
    output.innerHTML="try a lower number"
}
})
