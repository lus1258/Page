const buton = document.querySelector('#buton');

buton.addEventListener('subtmit', e => {
    e.preventDefault();

    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    if(user === '123' && pass === '123'){
        window.location.href = "./videos.html";
    }
});



