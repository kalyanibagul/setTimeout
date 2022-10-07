function fn(){
    console.log("HELLO");
}
fn();

setTimeout(fn , 2000);


setTimeout(function(){
      console.log("WORLD")
}, 5000)


