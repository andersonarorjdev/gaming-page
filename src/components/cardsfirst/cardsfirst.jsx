//Imports to react
import React from 'react';

//Imports to styled-components
import {Cards, Card} from './styled-cardsfirst';

//imports to images
import ComputerGame from '../../assets/gaming-computer.svg';
import Shield from '../../assets/shield.svg';
import computer from '../../assets/computer.svg';


const firstcards = props =>{
    return(
        <Cards>
            <Card>
                <img src={ComputerGame} alt="CardIcon"/>
                <span>
                    <h1>LOREM IPSUM</h1>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                         culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </span>
            </Card>
            <Card>
                <img src={Shield} alt="CardIcon"/>
                <span>
                    <h1>MAGNUM UP</h1>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                         culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </span>
            </Card>
            <Card>
                <img src={computer} alt="CardIcon"/>
                <span>
                    <h1>COMP LOWER</h1>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                         culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </span>
            </Card>
        </Cards>
    );
}

export default firstcards;