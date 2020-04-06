import * as React from 'react';
import '../game.css';
import Board from './board';

function Game() {
    const wordarray: Array<string> = [
        'Bat',
        'Cat',
        'Hat',
        'Apple',
        'Pear',
        'Desk',
        'Chair',
        'Bread',
        'Shoes',
        'Carrot',
        'House',
        'Mouse',
        'Dog',
        'Book',
        'Friend',
        'Window',
        'Socks',
        'Show',
        'Bird',
        'Bee',
        'Jacket',
        'Nose',
        'Block',
        'Couch',
        'Phone',
    ];
    return (
        <div id="game-view">
            <Board words={wordarray}></Board>
        </div>
    );
}

export default Game;
