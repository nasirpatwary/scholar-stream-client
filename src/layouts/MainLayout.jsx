import { Outlet } from 'react-router'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DarkMode from '../shared/DarkMode';
const MainLayout = () => {
  return (
    <div className="dark:bg-[#121212] duration-300 transition-all">
      <div className="h-16">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-384px)]">
        <Outlet />
        <DarkMode />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout