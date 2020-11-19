import styled from 'styled-components';

export const Cards = styled.div`
width:100vw;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-around;
padding-top:50px;
padding-bottom:40px;
`;

export const Card = styled.div`
width:350px;
height:350px;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;

img{
    width:140px;
    height:140px;
}
span{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
}
h1{
    color:#08083A;
    font-size:28px;
    font-weight:bolder;
    font-style: italic;
    opacity:1;
    font-family: sans-serif;
    padding:15px 0px;
}
p{
    color:#AAAAAA;
    font-size:14px;
    text-align:center;
    
}

@media(max-width:1000px){
    margin-top:60px;
}

`;