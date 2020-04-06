import * as React from 'react';

export interface TileProps {
    /** Number of tiles to render on the Board */
    // tiles: number
    label: string;
}

function Tile(props: TileProps) {
    return (
        <div className="tile">
            <span>{props.label}</span>
        </div>
    );
}

export default Tile;
