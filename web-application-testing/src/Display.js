/*


### Count Rules

- balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
- balls and strikes reset to 0 when a `hit` is recorded.
- a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.


### Display

- display the count of `balls` and `strikes` for the at-bat.
- should be updated when the user records activity on the `Dashboard` component.*/

import React from 'react';

const Display = props => {
    return (
        <div className="boxed displayContainer">
            <h2>At-Bat Player Stats</h2>
            <p>Strikes: {props.strikes}</p>
            <p>Balls: {props.balls}</p>
            <p>Fouls:{props.fouls} </p>
            <p>Hits: {props.hits}</p>
        </div>

    )
}

export default Display;