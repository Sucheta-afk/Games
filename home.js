const canvas = document.getElementById('live-background');
const ctx = canvas.getContext('2d');
const yesButton = document.getElementById('yesButton');

// Function to resize the canvas and maintain the correct aspect ratio
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Call the resize function initially and whenever the window is resized
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let button;

function draw() {
    // Clear previous button if it exists
    if (button) {
        document.body.removeChild(button);
    }

    // Create a new button element
    button = document.createElement('button');
    button.textContent = 'No';
    button.style.position = 'absolute';

    // Randomize the button's position within the canvas bounds
    const x = Math.random() * (canvas.width - 100); // Subtracting button width for boundary
    const y = Math.random() * (canvas.height - 50); // Subtracting button height for boundary
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    // Style the button (optional, adjust as needed)
    button.style.backgroundColor = '#AA336A';
    button.style.color = '#FFFFFF';
    button.style.border = 'none';
    button.style.padding = '15px 25px';
    button.style.borderRadius = '5px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';

    // Append the button to the body (or a specific container)
    document.body.appendChild(button);

    // Optionally, you can add an event listener to the button
    button.addEventListener('click', () => {
        alert('Aw :(');
    });
}

// Draw a new button every 500ms
setInterval(draw, 500);

// Function to handle 'yesButton' click event
function handleYesButtonClick() {
    alert('<3');
}

// Add event listener to 'yesButton' once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    if (yesButton) {
        yesButton.addEventListener('click', handleYesButtonClick);
    }
});

function playTictactoe() {
    window.location.href = 'tictactoe.html'; 
}

function playSudoku() {
    window.location.href = 'sudoku.html'; 
}
