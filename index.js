var i = 1;


function takeANumber(line){
  line.push(i);
  return ("Welcome! You are customer " + (i++) + ".") ;
}



function nowServing(line){
  if (line.length < 1){
    return "There is nobody waiting to be served!";
  }
  else{
    return "Currently serving " + line.shift() + ".";
  }
}



// function currentLine(line, name){
//   var i = 0;
//   if (line.length < 1){
//     return "The line is currently empty.";
//   }
// }