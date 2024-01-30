/*navbar close and open */
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

//for open the nav bar
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    } 
    
    )
}

//for close the nav bar
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    }
    )
}
