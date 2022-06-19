import img1 from "../src/assets/imgs/img1.jpg";
import img2 from "../src/assets/imgs/img2.jpg";
import img3 from "../src/assets/imgs/img3.jpg";
import img4 from "../src/assets/imgs/img4.jpg";
import place1 from "../src/assets/imgs/place1.jpg";
import place2 from "../src/assets/imgs/place2.jpg";
import place3 from "../src/assets/imgs/place3.jpg";
import imgFooter from "../src/assets/imgs/img-footer.jpg";

import "../src/assets/css/App.css";
import "../src/assets/fonts/fontawesome-free-6.1.1-web/fontawesome-free-6.1.1-web/css/all.css";
import "../src/assets/fonts/themify-icons-font/themify-icons/themify-icons.css";

function App() {
  return (
    <div className="App">
      {/* header */}
      <div id="header">
        <ul id="nav">
          <i className="nav-logo ti-crown"> Travel</i>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">PACKAGES</a>
          </li>
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">PAGES</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="">
              NEWS
              <i className="nav-arrow-down ti-angle-down"></i>
            </a>
            <ul className="subnav">
              <li>
                <a href="">Merchandise</a>
              </li>
              <li>
                <a href="">Extras</a>
              </li>
              <li>
                <a href="">Media</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* slider */}
      <div id="slider">
        <div class="text-content">
          <h2 class="text-heading">Search your next Holiday</h2>
          <p class="text-description">CHECK OUR BEST PROMOTIONS</p>
          <input type="text" placeholder="Choose your place"></input>
          <div id="header-detail">
            <div id="detail-1">
              <i className="icon ti-gift"></i>
              <p>Relax</p>
            </div>
            <div id="detail-1">
              <i className="icon ti-anchor"></i>
              <p>Culture</p>
            </div>
            <div id="detail-1">
              <i className="icon ti-palette"></i>
              <p>Transport</p>
            </div>
            <div id="detail-1">
              <i className="icon ti-music-alt"></i>
              <p>History</p>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div id="content">
        {/* content-out-destinations */}
        <div className="content-section">
          <h2 className="section-heading">OUR PROPOSALS</h2>
          <div class="section-sub-heading">OUR DESTINATIONS</div>
          <div className="card-list">
            <div className="card">
              <div className="card-img">
                <img src={img1} alt="travel-img-1" />
              </div>
              <h2>Travel 1</h2>
              <p>This is my Travel 1</p>
              <button>View Destination</button>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={img2} alt="travel-img-2" />
              </div>
              <h2>Travel 2</h2>
              <p>This is my Travel 2</p>
              <button>View Destination</button>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={img3} alt="travel-img-3" />
              </div>
              <h2>Travel 3</h2>
              <p>This is my Travel 3</p>
              <button>View Destination</button>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={img1} alt="travel-img-1" />
              </div>
              <h2>Travel 1</h2>
              <p>This is my Travel 1</p>
              <button>View Destination</button>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={img2} alt="travel-img-2" />
              </div>
              <h2>Travel 2</h2>
              <p>This is my Travel 2</p>
              <button>View Destination</button>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={img3} alt="travel-img-3" />
              </div>
              <h2>Travel 3</h2>
              <p>This is my Travel 3</p>
              <button>View Destination</button>
            </div>
          </div>
        </div>

        {/* content-next-holiday */}
        <div className="content-section">
          <h2 className="section-heading">VIEW ALL PACKAGE</h2>
          <div className="section-sub-heading">YOUR NEXT HOLIDAY</div>
          <div className="holiday">
            <div className="content-holiday">
              <p>NORTH AMERICA</p>
              <h1>The Best Beaches</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin
                rhoncus urna dictum neque molestie ultricies mauris ac.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin
                rhoncus urna dictum neque molestie ultricies mauris ac.
              </p>
              <button class="btn-book-now">BOOK NOW</button>
            </div>
            <img
              src={img4}
              alt="img-next-holiday"
              className="img-next-holiday"
            />
          </div>
        </div>

        {/* content-promotion */}
        <div className="content-section">
          <h2 className="section-heading">PROMOTIONS</h2>
          <div className="section-sub-heading">OUR PACKAGES</div>

          <div className="place-list">
            <div className="place-item">
              <img
                src={place1}
                alt="place-tour-newyork"
                className="place-img"
              />
              <h3 className="place-name">Berlin</h3>
              <p className="tour-time">Fri 27 Nov 2016</p>
              <p className="tour-about">
                Praesent tincidunt sed tellus ut rutrum sed vitae justo.
              </p>
              <button className="buy-ticket js-buy-ticket">Details</button>
            </div>
            <div className="place-item">
              <img
                src={place2}
                alt="place-tour-newyork"
                className="place-img"
              />
              <h3 className="place-name">New York</h3>
              <p className="tour-time">Fri 27 Nov 2016</p>
              <p className="tour-about">
                Praesent tincidunt sed tellus ut rutrum sed vitae justo.
              </p>
              <button className="buy-ticket js-buy-ticket">Details</button>
            </div>
            <div className="place-item">
              <img
                src={place3}
                alt="place-tour-newyork"
                className="place-img"
              />
              <h3 className="place-name">San Francisco</h3>
              <p className="tour-time">Fri 27 Nov 2016</p>
              <p className="tour-about">
                Praesent tincidunt sed tellus ut rutrum sed vitae justo.
              </p>
              <button className="buy-ticket js-buy-ticket">Details</button>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="footer">
        <div className="contact">
          <div className="contact-text">
            <p>KEEP IN TOUCH</p>
            <h2>Travel with Us</h2>
          </div>
          <input type="text" placeholder="Your comment..."></input>
          <button class="btn-send">SEND</button>
        </div>
      </div>
    </div>
  );
}
export default App;
