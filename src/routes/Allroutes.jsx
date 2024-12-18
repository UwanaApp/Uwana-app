import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/nav comps/Header';
import Footer from '../components/nav comps/Footer';
import Home from "../pages/Home";


export const AllRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
};

export default AllRoutes;
