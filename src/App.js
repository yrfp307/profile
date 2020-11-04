import Header from './components/Header';
import TabsHome from './components/Tabs';
import Footer from './components/Footer';
import Photo from './assets/Photo.jpeg';
import { Image } from 'react-bootstrap';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <div className="app-jumbotron">
      <Image className="app-photo" src={Photo} roundedCircle/>
      <Header />
      </div>
      <TabsHome />
      <Footer />
    </div>
  );
}
