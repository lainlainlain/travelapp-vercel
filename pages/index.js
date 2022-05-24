import Image from 'next/image';

export default function Home() {
  return (
    <div className="app">
      <div className="overlay">
        <div className="container">
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
                  <Image
                    src="/public/static/img/Group.svg"
                    alt="Landscape picture"
                    width={24}
                    height={24}
                  />
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
          <div className="popup"></div>
          <div className="book">
            <div className="book__title">Book your vacation</div>
            <div className="book__content">
              <div className="book__panel_wrapper">
                <div className="accomodation">
                  <p>6730 Luna Land North Rhiannonmouth</p>
                </div>
                <div className="checkin">19.06.2019</div>
                <div className="checkout">19.06.2019</div>
                <div className="guests">4 adults</div>
              </div>

              <button className="btn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
