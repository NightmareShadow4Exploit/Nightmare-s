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
      window.location.href = 'hello.html';
    }, 1000); // Redirect after all letters are typed (adjust delay as needed)
  }
}

window.onload = function() {
  typeWriter();
};
