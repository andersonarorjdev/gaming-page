//Imports from react
import React, {useState} from 'react';

//Imports from styled components
import {Navbartag, Menu, MenuHidden, MobileMenuList} from './styled-navbar';

//Imports from images and assets
import Logo from '../../assets/logo.svg';
import MenuIcon from '../../assets/menu.svg';

import styled from 'styled-components';


const Navbar = props =>{
    const [Menustate , setmenustate] = useState(false);
    const MobileMenu = styled.div`
        background-color:#08083A;
        width:70vw;
        height:100vh;
        position:absolute;
        top:0px;
        display:${Menustate ? 'block' : 'none'};
   `;

    return(
        <Navbartag>
            <MobileMenu>
                <MobileMenuList>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/">PARTICIPANTES</a>
                    </li>
                    <li>
                        <a href="/">AGENDA</a>
                    </li>
                    <li>
                        <a href="/">CONTATO</a>
                    </li>
                </MobileMenuList>
            </MobileMenu>
           <img src={Logo} alt="Gaming Logo's"/>
           <Menu>
               <li>
                   <a href="/">HOME</a>
               </li>
               <li>
                   <a href="/">PARTICIPANTES</a>
               </li>
               <li>
                   <a href="/">AGENDA</a>
               </li>
               <li>
                   <a href="/">CONTATO</a>
                </li>
           </Menu>

            <MenuHidden background={MenuIcon} onClick={() => setmenustate(!Menustate) } />
        </Navbartag>
    );

}

export default Navbar;