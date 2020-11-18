//Imports to React
import React from 'react';

//Imports to styled-components
import {SecondCardsTag, SecondCard, TitleSecondCard, TextParagraph} from './styled-cardssecond';

const SecondCards = props =>{
    return(
        <SecondCardsTag>
            <SecondCard background="#08083A">
                <TitleSecondCard color="#FF0178">
                    Proin pretium
                </TitleSecondCard>
                <TextParagraph>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                </TextParagraph>
            </SecondCard>
            <SecondCard background="#FF017B">
                <TitleSecondCard color="#08093A">
                   Congue efficitur
                </TitleSecondCard>
                <TextParagraph>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                </TextParagraph>
            </SecondCard>
        </SecondCardsTag>
    );
}
export default SecondCards;