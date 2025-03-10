import React from 'react'
import { Routes, Route } from "react-router-dom";
import { HomePage, CartPage } from '../pages';

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </>

    )
}
