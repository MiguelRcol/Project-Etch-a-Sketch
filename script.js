const board = document.querySelector('.board');



function createBoard(size) {
    const boardSize = 400; // Size of the board in pixels
    const squareSize = boardSize / size; // Size of each square
  

    board.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
            
        });
        board.appendChild(square);
    }
}
const resizeButton = document.getElementById('resize');
resizeButton.addEventListener('click', () => {
    let newSize = prompt("Enter new board size (e.g., 16 for 16x16):");
    if (newSize) {
        newSize = parseInt(newSize);
        if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
            alert("Please enter a valid number between 1 and 100.");
        } else {
            createBoard(newSize);
        }
    }
});

const resetButton= document.getElementById('reset');
resetButton.addEventListener('click', () => {
    createBoard(16); // Reset to default size
});

createBoard(16);   
