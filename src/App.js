import React, { Component } from "react";

import "./App.css";

import arrow from "./images/Icon/arrow.gif";

import Portfolio from "./components/page/Portfolio";
import Contact from "./components/page/Contact";
import About from "./components/page/About";
import Skill from "./components/page/Skill";
import Footer from "./components/UI/Footer";
import Hero from "./components/hero/Hero";

export default class App extends Component {
  state = {
    scrollPostion: 0,
  };

  listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        this.calculateScrollDistance();
      });
    });
  };

  calculateScrollDistance = () => {
    const scrollToTop = document.getElementsByClassName("scroll-to-top");
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight; // untuk menghitung besar layar
    const docHeight = this.getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);

    if (scrollPostion >= 30) {
      scrollToTop[0].style.opacity = 1;
      scrollToTop[0].style.transition = ".15s ease-in";
    } else {
      scrollToTop[0].style.opacity = 0;
    }

    this.setState({
      scrollPostion,
    });
  };

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  componentDidMount() {
    this.listenToScrollEvent();
  }

  render() {
    const goToTop = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
    return (
      <>
        <Hero />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
        <Footer />
        <div className="scroll-to-top" onClick={goToTop}>
          <img src={arrow} alt="Arrow" />
        </div>
      </>
    );
  }
}
