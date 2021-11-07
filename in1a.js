let name;
// Uppgift 1a1:
function buttonAction1() {
  //Kod här!
  let date= new Date();
  alert(" Hello! " + 'Time and date: ' + ' ' + date);
  

} // Slut!

// Uppgift 1a2 här:
function buttonAction2() {
  //Kode här
  name= prompt(" What's your name? ");
  let nameUpperCase= name.toUpperCase();
  alert(nameUpperCase + ' ' +" Nice ");

} // Slut!

// Uppgift 1a3 här:
function buttonAction3() {
  //Kode här!
  
 document.getElementById("result3").innerHTML =name;
} // Slut!

// Uppgift 1a4 här:
function buttonAction4() {
  //Kode här!
  const since_2009 =  new Date('January 01, 2009 11:25:00')
  const now = new Date();
  const diff = now - since_2009;
  const diffInSeconds = diff / 1000;
alert(` Den är tidskillnaden: ${diffInSeconds}`);
  
} // Slut!


// Uppgift 1a5 här:
function buttonAction5() {
  //Kode här!

  const num1 = document.getElementById("number1").value;
  const num2 = document.getElementById("number2").value;
  if(num1 >= 0 && num2 >= 0 && num1 <= 1000 && num2 <= 1000){
    document.getElementById("result5").innerHTML = num1 * num2;
  } else{
    
    alert("Fel!")
 

  };
  

} // Slut!

// Uppgift 1a6 här:
function buttonAction6() {
  //Kode här!
  var text = document.getElementById("textInput").value;
  var numWords = 0;

  for (var i=0; i < text.length; i++) {
    var currentCharacter = text[i];
    if (currentCharacter == " "){
      numWords += 1;

    }
  }
  numWords += 1;
  
  document.getElementById("wordCount").innerHTML = numWords;
  

} // Slut.

// Uppgift 1a7 här:
function buttonAction7() {
  //Kode här!
  let massage = prompt("Skriv ett meddelande: ");
  let someMsg = "";
  
  for ( i = 0; i < 10; i++) {
   
    someMsg += massage + " \n ";
    
  };

  alert(someMsg);

} // Slut! :)

// Uppgift 1a8 här:
function buttonAction8() {
  //Kode här!
  let button = document.getElementById("hiddenButton").style;
  if(button.visibility == "visible"){
    button.visibility = "hidden";
  } else{
    button.visibility = "visible"; 
  }


} //Slut!

// Sista proceduren: Placera data i en tabell som byggs upp
function buttonAction9() {
  //Kode här
  let input = document.getElementById("arrayInput").value; 
  let devidArr = input.split(","); // devide all inputs at ","

  let result = document.getElementById("tableContainer"); 
  let table = document.createElement("table");
  devidArr = devidArr.filter((b) => b); 
  

  for (let i = 0; i <= 7; i++) {  // Check how many rows are needed "7"
    
    row = table.insertRow();
    
    table.style.border ='4px solid pink';
    
    for (let e = 0; e < 7; e++){
    
      if(devidArr[0] != null) { 
        
         cell = row.insertCell(); // Create cell
         cell.style.border='2px solid pink';
         
         cell.appendChild(document.createTextNode(devidArr[0])); 
        devidArr.splice(0,1); 
        
      } else { 
        
        result.appendChild(table); 
        break;
      
      };
      
    };
  };
};

  



//Slut! Nu kan ni kolla över eran kod och lämna in. Gott jobbat!

/*
 * Detta är en färdig procedur (funktion) som kopplar ihop händelsehanteraren
 * för alla knappar med de funktioner som ni har till uppgift att göra
 * NI SKALL INTE RÖRA NÅGOT HÄR:
 */

function onDoneLoadingHtml() {
  document.getElementsByName("button1")[0].onclick = buttonAction1;
  document.getElementsByName("button2")[0].onclick = buttonAction2;
  document.getElementsByName("button3")[0].onclick = buttonAction3;
  document.getElementsByName("button4")[0].onclick = buttonAction4;
  document.getElementsByName("button5")[0].onclick = buttonAction5;
  document.getElementsByName("button6")[0].onclick = buttonAction6;
  document.getElementsByName("button7")[0].onclick = buttonAction7;
  document.getElementsByName("button8")[0].onclick = buttonAction8;
  document.getElementsByName("button9")[0].onclick = buttonAction9;
  document.getElementById("hiddenButton").onclick = function () {
    alert("Neeeej!, \n du startade precis...\nKaffekokaren!");
  };
}

/*
 * Anger att när webläsaren är klar med att läsa in html, css ska den
 * köra funktionen onDoneLoadingHtml
 */
window.onload = onDoneLoadingHtml;
