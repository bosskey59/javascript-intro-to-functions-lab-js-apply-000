function shout(string){
  return string.toUpperCase()  
}
function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var inputString= string
  if (inputString === inputString.toLowerCase()){
    return "I can't hear you!"
  }
  else{
    return "YES INDEED!"
  }
}

