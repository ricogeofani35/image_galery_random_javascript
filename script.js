//get parent element
let container  = document.querySelector('.container');
let imgJumbo = document.querySelector('.jumbo');
let imgThumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    // event bubbling
    if(e.target.classList.contains('thumb')) {
        // get img jumbo
        // //delete atribute src img jumbo
        // imgJumbo.removeAttribute('src');

        // // get atribute img thumb
        // const attrThumb = e.target.getAttribute('src');
        // // set atribute img jumbo with atribute img thumb
        // imgJumbo.setAttribute('src', attrThumb);

        imgJumbo.src = e.target.src;

        imgJumbo.classList.add('fade');

        setTimeout(() => {
            imgJumbo.classList.remove('fade');
        }, 500);

        
        imgThumbs.forEach(thumb => {
            // if(thumb.classList.contains('active')) {
            //     thumb.classList.remove('active');
            // }

            thumb.className = 'thumb';
        });
        
        e.target.classList.add('active');
    }
});