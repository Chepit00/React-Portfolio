import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import ErrorPage from './pages/ErrorPage';
import AboutMe from './pages/AboutPage.jsx';
import Portfolio from './pages/PortfolioPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Resume from './pages/ResumePage.jsx';
import HomePage from './pages/HomePage.jsx';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/aboutme',
                element: <AboutMe />
            },            
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
            {
                path: '/resume',
                element: <Resume />
            }
        ]
    }
]);





//direct configuration
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
