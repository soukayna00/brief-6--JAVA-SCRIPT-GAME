// number chosen by the computer

var y = Math.floor(Math.random() * 100 + 1);
      
   // initialistion du compteur 
    var guess = 1;
    
      
    document.getElementById("submitguess").onclick = function(){
      
   
   var x = document.getElementById("guessField").value;
  
   if(x == y )
   {    if(guess<=3){
        alert(`you are a genius!!! YOU GUESSED IT RIGHT IN ${guess} GUESS `);
     }
     else
     alert(`congratulation!!! YOU GUESSED IT RIGHT IN ${guess} GUESS `);
   }
   else if(x > y ,guess<10){
       guess++;
       alert(`Try a smaller number!! Your number of guesses is ${guess} `);
   }
   else if (x<y , guess<10)
   {
       guess++;
       alert(`Try A higher number!! Your number of guesses is ${guess} `);
   }
   else if( x=!y , guess=10 )
   {    
       alert(`YOU lost your 10 attempt, restart the game `);
      


   }
}
  
