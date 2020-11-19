import styled from 'styled-components';

export const FooterTag =  styled.div`
    width:98vw;
    height:10vh;
    margin:60px 0px 30px 0px;
    padding:0px 20px;

    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:flex-end;

    /* Estilização para o texto do footer para nao ser necessario ter que criar mais um componente */
    color:#AAAAAA;
    font-size:15px;
    text-align:left;

    img{
        width:40px;
        height:40px;
        margin:0px 10px;
    }

 

     @media(max-width:1100px){
        margin-top:100px;

           div{
                padding-top:20px;  
            }   
    }

    @media(max-width:650px){
        align-items:center;
        justify-content:center;
    }

`;
