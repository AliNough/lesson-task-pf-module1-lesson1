console.log('Hello World');

let randNum = () => {

   const num = Math.floor (Math.random() * 100);
    
    console.log(num);
    if (num < 50){
        console.log('is less');
    } else {
        console.log('is bigger');
    }
    
}

randNum();