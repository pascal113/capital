import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import MenuPage from '../pages/MenuPage';
import CompanyProfile from '../pages/CompanyProfile';
import CorporateGoals from '../pages/CorporateGoals';
import Production from '../pages/Production';
import LogisticsPage from '../pages/LogisticsPage';
import Advice from '../pages/Advice';
import JobPostings from '../pages/JobPostings';
import LogisticsStorage from '../pages/LogisticsStorage';
import LogisticsShipment from '../pages/LogisticsShipment';
import LogisticsPurchasing from '../pages/LogisticsPurchasing';
import LogisticsShipmentDetails from '../pages/LogisticsShipmentDetails';
import Contact from '../pages/Contact';
import AboutPage from '../pages/AboutPage';
import AboutCompany from '../pages/AboutCompany';
import ApplyPage from '../pages/ApplyPage';

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
                <Route path="/logistics-storage" element={<LogisticsStorage />} />
                <Route path="/logistics-shipment" element={<LogisticsShipment />} />
                <Route path="/logistics-shipment-details/:id" element={<LogisticsShipmentDetails />} />
                <Route path="/logistics-purchasing" element={<LogisticsPurchasing />} />
                <Route path="/advice" element={<Advice />} />
                <Route path="/contacts" element={<Contact />} />
                <Route path="/job-postings" element={<JobPostings />} />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/about-company/:id" element={<AboutCompany />} />
                <Route path="/apply" element={<ApplyPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default RouterRoutes;