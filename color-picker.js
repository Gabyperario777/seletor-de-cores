const colorPicker = document.getElementById('colorPicker');
const selectedColor = document.getElementById('selectedColor');

colorPicker.addEventListener('input', () => {
  const color = colorPicker.value;
  selectedColor.style.backgroundColor = color;
  selectedColor.innerText = color;
});

const numSnowflakes = 50;
const body = document.querySelector('body');

for (let i = 0; i < numSnowflakes; i++) {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  body.appendChild(snowflake);
}

// Set random positions and sizes for snowflakes
const setSnowflakesStyle = () => {
  const snowflakes = document.querySelectorAll('.snowflake');
  snowflakes.forEach(snowflake => {
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDelay = `${Math.random() * -10}s`;
    snowflake.style.width = `${Math.random() * 5}px`;
    snowflake.style.height = `${Math.random() * 5}px`;
  });
};

// Call the function to set random styles
setSnowflakesStyle();

// Reset snowflakes positions on window resize
window.addEventListener('resize', () => {
  setSnowflakesStyle();
});

// Update selected color
function updateSelectedColor() {
  const selectedColor = document.querySelector('#colorPicker').value;
  document.querySelector('#selectedColor').style.backgroundColor = selectedColor;
}

// Call the function to update the selected color initially
window.addEventListener('load', () => {
  updateSelectedColor();
});