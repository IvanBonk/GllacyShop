window.addEventListener("load", preLoader);
function preLoader()
{
    setTimeout(function() {
        
        const body    =   document.getElementsByTagName("BODY")[0];
        const loader  =   document.getElementById("preloader");
        const pulsar  =   document.getElementById("pulsar");
        
        body.className   -=   "cut";
        pulsar.className +=   "hide";
        loader.className +=   "moveUp";
        
    }, 2000)
}

const modal = document.querySelector('.modal');
document.getElementById('feedback').addEventListener('click', openModal);
document.querySelector('.btn_close').addEventListener('click', closeModal);

function openModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

window.addEventListener('click', function(event){
    if(event.target === modal){
        modal.style.display = "none";
    }
})

document.querySelectorAll('.product_image')
    .forEach(el => el.addEventListener('click', btnDown));
    
function btnDown(){
    
}    


document.querySelector('.login-form input[type=submit]').addEventListener('click', sendForm);

function sendForm(e){
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            document.querySelector('.login-form').innerHTML = 'Thank you!';
            
        }else if(xhr.readyState === 4 && xhr.status != 200){
            document.querySelector('.login-form').innerHTML = 'Error!';
        }
    }
    xhr.open('POST', 'login.php', true);
    const form = document.querySelector('.login-form');
    const data = new FormData(form);
    xhr.send(data);
}