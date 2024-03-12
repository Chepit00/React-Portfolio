
import { Outlet } from 'react-router-dom';
// Importing the navigation component
import Navigation from './components/Navigation';
// Importing the footer component
import Footer from './components/footer/Footer';



// Main component of the application
function App() {
  return (
    <>
      <Navigation/>
      <Outlet />
      <Footer />
    </>
  );
}
// Exporting the App component as the default
export default App;
