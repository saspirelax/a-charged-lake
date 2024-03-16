function cycleText() {
    const elements = document.getElementsByClassName("rotate_animate");
    const phrases = ["...is a charged lake", "...committed to contrast"];
    let currentIndex = 0;

    setInterval(() => {
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = phrases[currentIndex];
        }
        currentIndex = (currentIndex + 1) % phrases.length;
    }, 2000);
}

// Call the function to start cycling text
cycleText();


// animation logo

// const circle = document.querySelector('#fcSymbol circle');

// let strokeWidth = 1;
// let direction = 1;

// function animateStrokeWidth() {
//   strokeWidth += direction;
//   if (strokeWidth >= 80 || strokeWidth <= 1) {
//     direction *= -1;
//   }
//   circle.setAttribute('stroke-width', strokeWidth);
//   requestAnimationFrame(animateStrokeWidth);
// }

// animateStrokeWidth();

