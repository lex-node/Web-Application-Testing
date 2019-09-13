/*The specifications are listed below.

### Count Rules

- balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
- balls and strikes reset to 0 when a `hit` is recorded.
- a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.


### Dashboard

- provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
- there is **NO** need to specify the type of hit (single, double, etc).
- changes recorded on this component should update the information shown by the `Display` component.
*/
import React, {useState} from 'react';
import Display from './Display';

export const increaseStat = value => {
    return value + 1;
}



const Dashboard = (props) => {

    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [hits, setHits] = useState(0);

    const resetAll = () => {
        setStrikes(0);
        setBalls(0);
        setFouls(0);
        setHits(0);
    }

    return (
        <div className="main">
            <div className="boxed buttonContainer">
                <button onClick={() => setStrikes(increaseStat(strikes))}>
                    Strike
                </button>
                <button onClick={() => setBalls(increaseStat(balls))}>
                    Ball
                </button>
                <button onClick={() => setFouls(increaseStat(fouls))}>
                    Foul
                </button>
                <button onClick={() => setHits(increaseStat(hits))}>
                    Hit
                </button>
                <button onClick={() => resetAll()}>
                    New Batter
                </button>
            </div>
            <Display strikes={strikes} balls={balls} fouls={fouls} hits={hits}/>
        </div>

    )
}

export default Dashboard;