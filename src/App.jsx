import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import './App.css'

const App = () => {
    return (
        <div>
            <Header class = "header"/>
            <Navigation class='navbar' />
           <Outlet> </Outlet>
            <Footer />
        </div>
    );
};

export default App;