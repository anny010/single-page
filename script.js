const leftMove=document.getElementById("left");
const rightMove=document.getElementById('right');

const sliderImg=document.getElementsByClassName("images");
const slider=document.querySelectorAll('.slide');

let imgArray=[
    './assets/Bitmap (1).svg',
    './assets/Bitmap (2).svg',
    './assets/Bitmap (3).svg',
    './assets/Bitmap Copy 2.svg',
    './assets/Bitmap Copy.svg',
];

rightMove.addEventListener('click', ()=> {
    
    let lastImg=slider[0].src;

    slider[0].src=slider[1].src;

    slider[1].src=slider[2].src;

    slider[2].src=slider[3].src;

    slider[3].src=slider[4].src;

    slider[4].src=lastImg;

});

leftMove.addEventListener('click',()=>{

    let lastImg=slider[4].src;

    slider[4].src=slider[3].src;

    slider[3].src=slider[2].src;

    slider[2].src=slider[1].src;

    slider[1].src=slider[0].src;

    slider[0].src=lastImg;
})
