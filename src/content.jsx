//Imports to React
import React from 'react';

//Import to styles and external stylesheets
import Globalreset from './styles/Global-styles';

//Imports to components
import Main from './components/main/main';
import FirstCards from './components/cardsfirst/cardsfirst';
import SecondCards from './components/cardssecond/cardssecond';
import Footer from './components/footer/footer';

//Imports to images and assets
import Banner from './assets/banner.png';

const content = props =>{
    return(
      <>
        <Globalreset />
        <Main image={Banner}/>
        <FirstCards />
        <SecondCards />
        <Footer />
      </>
    )
}

export default content;