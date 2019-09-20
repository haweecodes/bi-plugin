setTimeout(() => {
    let tp = document.getElementsByClassName('tp-modal');
    tp[0].remove();
    let backdrop = document.getElementsByClassName('tp-backdrop');  
    backdrop[0].remove();
    let body = document.body;
    body.classList.remove("tp-modal-open");
    document.getElementById('piano-inline-content-wrapper').style.display = "block";
}, 8000);
   
