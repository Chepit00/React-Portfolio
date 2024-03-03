import { useState } from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Header') {
            return <Header />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        };
    }
//     if (currentPage === 'Blog') {
//       return <Blog />;
//     }
//     return <Contact />;
//   };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
