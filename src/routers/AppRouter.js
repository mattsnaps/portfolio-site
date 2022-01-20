import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import NotFound from "../components/NotFoundPage";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Home from "../components/Home";
import Header from "../components/Header";

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;