let name = "";

try {
    
    if(name == ""){
        throw new Error('Please enter your name')
    }

    console.log("Hello " + name);
}
catch(err) {
  console.log(err.name);
}
finally{
    console.log("Bye");
}