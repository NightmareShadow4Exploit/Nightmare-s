const text = 'NIGHTMARE';
let index = 0;
const speed = 100; // Adjust the speed (in milliseconds) as needed

function typeWriter() {
  if (index < text.length) {
    document.getElementById('animation-text').innerText += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(function() {
      window.location.href = 'home.html';
    }, 1000); // Redirect after all letters are typed (adjust delay as needed)
  }
}

window.onload = function() {
  typeWriter();
};


























let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slides img');
  
  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Increment slideIndex and show the next slide
  slideIndex++;
  if (slideIndex >= slides.length) { 
    slideIndex = 0; // Reset slideIndex if it reaches the end
  } 
  slides[slideIndex].style.display = 'block';  

  // Call the function recursively after a delay
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


