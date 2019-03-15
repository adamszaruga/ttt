let initialState = {
    board: "---------",
    isGameOver: false,
    winner: null
}

// helper method that looks at a board and determines one of four scenarios
// 1) Player X has a winning row
// 2) Player O has a winning row
// 3) The board is full and no one won (tie)
// 4) The board is not full yet and no one has won (game still in progress)

let checkGame = (board) => {
    let row1 = board.substring(0,3);
    let row2 = board.substring(3, 6);
    let row3 = board.substring(6, 9);
    let col1 = board[0]+board[3]+board[6];
    let col2 = board[1]+board[4]+board[7];
    let col3 = board[2]+board[5]+board[8];
    let diag1 = board[0]+board[4]+board[8];
    let diag2 = board[2]+board[4]+board[6];

    let allWinConditions = [row1, row2, row3, col1, col2, col3, diag1, diag2];

    let xHasWon = allWinConditions.some(winCondition => winCondition === "XXX");
    let oHasWon = allWinConditions.some(winCondition => winCondition === "OOO");

    let boardIsFull = !board.includes('-');

    if (xHasWon) {
        return "X WINS"
    } else if (oHasWon) {
        return "O WINS"
    } else if (boardIsFull) {
        return "TIE"
    } else {
        return "IN_PROGRESS"
    }

}

let reducer = (state = initialState, action) => {

    if (action.type === "WRITE_TO_SQUARE") {
        let { index, value } = action;

        let updatedBoard = state.board.split('').map((char, i) => {
            if (i === index) {
                return value;
            }
            return char
        }).join('');
        
        let winner = checkGame(updatedBoard) 

        return {
            board: updatedBoard,
            isGameOver: winner != "IN_PROGRESS",
            winner: winner
        }

    }

    return state;
}

export default reducer;