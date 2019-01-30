var i = 0;


function takeANumber(line, name){
  return ("Welcome! You are customer " + (i++) + ".") ;
}



function nowServing(katzDeliLine){
  if (katzDeliLine < 1){
    return "There is nobody waiting to be served!";
  }
  else{
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

// function currentLine(line, name){
//   var i = 0;
//   if (line.length < 1){
//     return "The line is currently empty.";
//   }
// }