
//////////////////////////////////ragisterring///////////////////////////////////////
if('serviceWorker' in navigator){

    navigator.serviceWorker.register('/service.js').then((reg)=>console.log("ragistered",reg)).catch((err)=> 
    
    console.log("servise worker not ragister",err))
    
    } 