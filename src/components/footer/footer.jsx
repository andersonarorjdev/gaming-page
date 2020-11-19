//Imports to React
import React from 'react';

//Imports to styled-components
import {FooterTag} from './styled-footer';

//Imports to images and anothers assets
import InstaIcon from '../../assets/instagram.svg';
import FaceIcon from '../../assets/facebook.svg';

const Footer = props =>{
    return(
        <FooterTag> 
            <h5>COpyright @ 2010-2020 Gaming S.A ALL RIGHTS RESERVED</h5>
            <div>
                <img src={InstaIcon} alt="Instagram's Icon"/>
                <img src={FaceIcon} alt="Facebook's Icon"/>
            </div>
        </FooterTag>
    );
}
export default Footer;