import React from 'react';
import '../style/game.css'
import ItemsList from '../components/Game/ItemsList'

function Game(props) {
    return (
        <div className="game">
            <ItemsList />
        </div>
    );
}

export default Game;