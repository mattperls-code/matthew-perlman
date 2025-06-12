import React from "react"

import { BrowserRouter, Routes, Route } from "react-router"

import MainPage from "./pages/Main"

import "./styles.scss"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} Component={MainPage} />
            </Routes>
        </BrowserRouter>
    )
}

export default App