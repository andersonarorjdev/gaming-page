import styled from 'styled-components';

 const MainBg = styled.div`
    background-image: url(${props => props.image});
    background-repeat:no-repeat;
    background-size:100%;
    background-position:cover;
    width:100%;
    height:70vh;

`;

export default MainBg;