import React from "react";
import logo from "./images/logo.png";
import "./App.css";
import SuggestButton from "./components/SuggestButton";
import Apple from "./images/Download_on_the_App_Store_Badge_US-UK_135x40.svg";
import Play from "./images/en-play-badge.png";
import Foursquare from "./images/poweredByFoursquare.png";

function App() {
  return (
    <div className="App">
      <div className="cont">
        <div className="blur">
          <img className="logo" src={logo} />
          <SuggestButton />
          <div className="main_a">
            <a className="account">تسجيل دخول</a>
            <span className="sep">|</span>
            <a className="account">إنشاء حساب</a>
            <span className="sep">|</span>
            <a className="account">لماذا أنشئ حساب؟</a>
          </div>
          <div className="download">
            <a href="https://play.google.com/store/apps/details?id=com.wainnakel.android">
              <img src={Play} width="80px" />
            </a>
            <a href="https://apps.apple.com/sa/app/wyn-nakl/id718380069">
              <img src={Apple} width="80px" />
            </a>
          </div>
          <div className="footer">
            <p>
              <a href="https://twitter.com/WainNakel">
                <i class="fab fa-twitter"></i>@WainNakel
              </a>
              <span className="sep">|</span>
              <span>2018 © جميع الحقوق محفوظة</span>
              <span className="sep">|</span>
              <a href="http://wainnakel.com/privacy/">Privacy Policy</a>
            </p>
            <img className="foursquare" src={Foursquare} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
