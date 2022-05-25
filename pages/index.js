import Image from 'next/image';
import ArrowPopup from '../public/static/img/Vector.svg';
import Search from '../public/static/img/Group.svg';
import HomeLine from '../public/static/img/home-line.svg';
import CalendarLine from '../public/static/img/calendar-line.svg';
import ArrowDropDown from '../public/static/img/arrow-drop-down-line.svg';
import User from '../public/static/img/user.svg';

export default function Home() {
  return (
    <div className="wrapper">
      <div className="content">
        <header>
          <div className="group">
            <ul className="navigation">
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="group">
            <ul className="camping">
              <li>Camping.</li>
            </ul>
          </div>
          <div className="group">
            <ul className="registration">
              <li>Sign In</li>
              <li>Sign Up</li>
              <li>
                <img src={Search}></img>
              </li>
            </ul>
          </div>
        </header>
        <div className="banner">
          <div className="banner__title">
            <h1>Beautiful places of England</h1>
          </div>
          <div className="banner__subtitle">
            <h2>
              Plan your vacation on the most beatiful <br></br> places of England
            </h2>
          </div>
        </div>
        <div className="popup">
          <div>
            <div className="popup__subtitle">Up next</div>
            <div className="popup__title">Aerial View of Rock Cliffs</div>
            <img src={ArrowPopup}></img>
          </div>
          <div className="popup__bg"></div>
        </div>
        <div className="book">
          <div className="book__title">Book your vacation</div>
          <div className="book__content">
            <div className="book__panel_wrapper">
              <div className="accomodation">
                <div className="book_item__wrapper">
                  <img src={HomeLine}></img>
                  <div className="book_item__content">
                    <p className="book_item__title">Accommodation</p>
                    <p>6730 Luna Land North Rhiannonmouth</p>
                  </div>
                </div>
                <img src={ArrowDropDown}></img>
              </div>
              <div className="checkin">
                <div className="book_item__wrapper">
                  <img src={CalendarLine}></img>
                  <div className="book_item__content">
                    <p className="book_item__title">Check-in</p>
                    <p>19.06.2019</p>
                  </div>
                </div>
              </div>
              <div className="checkout">
                <div className="book_item__wrapper">
                  <div className="book_item__content">
                    <p className="book_item__title">Check-out</p>
                    <p>19.06.2019</p>
                  </div>
                </div>
              </div>
              <div className="guests">
                <div className="book_item__wrapper">
                  <img src={User}></img>
                  <div className="book_item__content">
                    <p className="book_item__title">Guests</p>
                    <p>4 adults</p>
                  </div>
                </div>{' '}
                <img src={ArrowDropDown}></img>
              </div>
            </div>
            <button className="btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
