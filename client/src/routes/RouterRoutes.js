import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ErrorPage from '../pages/ErrorPage';
import MenuPage from '../pages/MenuPage';
import CompanyProfile from '../pages/CompanyProfile';
import CorporateGoals from '../pages/CorporateGoals';
import Production from '../pages/Production';
import LogisticsPage from '../pages/LogisticsPage';
import Advice from '../pages/Advice';

const RouterRoutes = () => {

    useScrollRestore();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/company-profile" element={<CompanyProfile />} />
                <Route path="/corporate-goals" element={<CorporateGoals />} />
                <Route path="/production" element={<Production />} />
                <Route path="/logistics" element={<LogisticsPage />} />
                <Route path="/advice" element={<Advice />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details/:productId" element={<ProductDetails />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default RouterRoutes;