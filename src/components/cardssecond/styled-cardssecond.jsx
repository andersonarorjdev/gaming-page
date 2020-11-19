import styled from 'styled-components';

export const SecondCardsTag = styled.div`
    padding-top:100px;
    width:100vw;
    height:50vh;

    display:flex;
    flex-direction:row;
    justify-content:space-around;
    flex-wrap: wrap;

    @media(max-width:1000px){
        height:100vh;
    }
`;

export const SecondCard = styled.div`
    width:45%;
    height:250px;
    background-color:${props => props.background};

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   

    @media (max-width:1100px){
        width:480px;
        margin-top:30px;
        
    }
`;

export const TitleSecondCard = styled.h1`
    color: ${props => props.color};
    padding-bottom:20px;
    font-size:30px;
    font-weight:bolder;
    font-style:italic;
`;

export const TextParagraph = styled.p`
    color:#FFFFFF;
    text-align:center;
    padding:0px 40px;
`;