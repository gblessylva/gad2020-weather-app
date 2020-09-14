(()=>{
    

    window.addEventListener('beforeinstallprompt', (e)=>{       
    let deferredPrompt;
    let btnAdd = document.querySelector('.btnAdd')
    e.preventDefault();
    deferredPrompt = e;
    btnAdd.style.display ="none"
    


  })

 
    
})()