

const boton = document.getElementById('buton');

    boton.addEventListener('click',() => {
        const user = document.getElementById('user').value;
        const pass = document.getElementById('pass').value;
    
        if (user === '123' && pass === '123') {
           window.location.href = './principal/rule34video.html';
        } else {
            console.log('error');
        }
    });




