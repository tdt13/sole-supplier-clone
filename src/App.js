import './App.css';
import Blog from './Components/Blog';
import Navbar from './Components/Navbar';
import MainStore from './Components/MainStore';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';

// Clone of Sole Supplier website; a trainer sale site
// the site uses React and Tailwind CSS for styling
// I need to add responsive design and routing but
// for the purpose of this excercise it is sufficient as
// it shows how props are passed from one component to
// another in a resusable manner

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="border-t border-gray-300 my-4"></div>
      <MainStore></MainStore>
      <div className="border-t border-gray-100 my-4"></div>
      <Blog></Blog>
      <div className="border-t border-gray-100 my-4"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
