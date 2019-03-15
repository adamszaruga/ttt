import React from 'react';
import { connect } from 'react-redux';
import Tile from './Tile'
import './Game.css'

let Game = (props) => {
    let { board, isGameOver, winner, update } = props;
    let row1 = board.substring(0,3).split('');
    let row2 = board.substring(3,6).split('');
    let row3 = board.substring(6,9).split('');

    return (
        <div>
            <div>
                <h1>{isGameOver ? winner : ""}</h1>
            </div>
            <div className="Row">
                {
                    row1.map((tileValue, i) => (
                        <Tile key={i} value={tileValue} index={i} update={update}/>
                    ))
                }
            </div>
            <div className="Row">
                {
                    row2.map((tileValue, i) => (
                        <Tile key={i} value={tileValue} index={i+3} update={update}/>
                    ))
                }
            </div>
            <div className="Row">
                {
                    row3.map((tileValue, i) => (
                        <Tile key={i} value={tileValue} index={i+6} update={update} />
                    ))
                }
            </div>
        
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        board: state.board,
        isGameOver: state.isGameOver,
        winner: state.winner
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        update: (value, index) => dispatch({ type: "WRITE_TO_SQUARE", value: value, index: index })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)