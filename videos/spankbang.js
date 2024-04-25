const data = [
    { src: "https://la.spankbang.com/948ok/embed/" },
    { src: "https://la.spankbang.com/98ble/embed/" }
]


const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded',
    data.forEach(element => {
        container.textContent = `<iframe width="560" height="315" src="${element.src}" frameborder="0" scrolling="no" allowfullscreen></iframe>`;
    })
);
