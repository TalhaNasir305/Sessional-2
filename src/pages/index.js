import React, {useState} from 'react';
import Navbar from '../components/Sidebar';
import Sidebar from '../components/Sidebar';


const Home = () => {
    const[isOpen,setIsOpen] =useStae(false)
    const toggle=()=> {
        setIsOpen(!isOpen)
    }

    return (
        <> 
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HersSection />
        </>
  };
};

export default Home;
