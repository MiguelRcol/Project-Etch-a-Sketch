const board = document.querySelector('.board');

function createBoard(size) {
    board.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        board.appendChild(square);
    }
}

createBoard(16);   
