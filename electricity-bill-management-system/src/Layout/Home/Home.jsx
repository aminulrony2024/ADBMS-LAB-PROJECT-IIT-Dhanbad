import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import Main from '../Main/Main';

const Home = () => {
    return (
        <div>
           <Header />
           <Main />
           <Footer />
        </div>

    );
};

export default Home;