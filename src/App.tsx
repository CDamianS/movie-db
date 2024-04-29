import React from 'react';
import { TopBar } from './components/TopBar';
import { PopularMovies } from './components/PopularMovies'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';

function App() {
    return <RouterProvider router={router} />
}

export default App;
