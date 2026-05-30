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

createBoard(16  );   
