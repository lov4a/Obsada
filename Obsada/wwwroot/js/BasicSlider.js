﻿function test1() {
    const img = document.getElementById('carousel');
    const rightBtn = document.getElementById('right-btn');
    const leftBtn = document.getElementById('left-btn');

    // Images are from unsplash
    let pictures = ['~/Images/Technology_1.png'];

    img.src = pictures[0];
    let position = 0;

    const moveRight = () => {
        if (position >= pictures.length - 1) {
            position = 0
            img.src = pictures[position];
            return;
        }
        img.src = pictures[position + 1];
        position++;
    }

    const moveLeft = () => {
        if (position < 1) {
            position = pictures.length - 1;
            img.src = pictures[position];
            return;
        }
        img.src = pictures[position - 1];
        position--;
    }

    rightBtn.addEventListener("click", moveRight);
    leftBtn.addEventListener("click", moveLeft);
}
