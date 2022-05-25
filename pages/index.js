import Header from '../components/Header';
import Banner from '../components/Banner';
import Popup from '../components/Popup';
import Book from '../components/Book';

export default function Home() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header></Header>
        <Banner></Banner>
        <Popup></Popup>
        <Book></Book>
      </div>
    </div>
  );
}
