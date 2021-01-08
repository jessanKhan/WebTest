function abc(...arg) {
  
  
  let array= [...arg]
  let a=[]

  array.map((element,index)=>{
  a.push(capital(element))
  
  })

let arraWord= a.join() 

let comas= arraWord.replace(/,/g, ' ')

console.log(comas)

 
  
  
}

 function capital(srting){

let b =[]

const result = srting.charAt(0).toUpperCase()+srting.substr(1).toLowerCase()


return result

} 

abc("I", "aM", "a", "bOy")
// I Am A Boy.
