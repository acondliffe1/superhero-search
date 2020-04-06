import React from 'react';
import Tile from './tile';

export interface BoardProps {
    /** Number of tiles to render on the Board */
    // tiles: number
    words: Array<string>;
}

function Board(props: BoardProps) {
    return (
        <div className="board">
            {props.words.map((tile) => (
                <Tile label={tile}></Tile>
            ))}
        </div>
    );
}

export default Board;
