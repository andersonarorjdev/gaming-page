import styled from 'styled-components';

export const Navbartag = styled.nav`
    width:99vw;
    height:18vh;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    img{
       padding:30px;
    }
`;

export const Menu = styled.ul`
    display:flex;
    flex-direction:row;
    align-items:center;

    list-style:none;
    font-style:italic;
   

    li{
        padding:0px 23px;
    }

    a{
        text-decoration:none;
        color:#08083A;
        font-size:18px;
        font-weight:bolder;
    }

    a:hover{
        color:#FF017B;
    }

    @media(max-width:820px){
        display:none;
    }
`;

export const MenuHidden = styled.button`
    width:65px;
    height:65px;

    margin:30px;
    background-image:url(${props => props.background});
    background-size:65px;
    background-color:#FFFFFF;
    border:none;

    @media(min-width:821px){
        display:none;
    }
`;