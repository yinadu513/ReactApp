import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import ImgMain from "./components/ImgMain";
import ImgThumbnail from "./components/ImgThumbnail";
import ImgData from "./data/templates.json";

class App extends Component {
  state = {
    counter: 0,
    imgInDisplay: ImgData.slice(0, 4),
    gallerySize: 4,
    imgInCart: [],
  };

  onClickPrevious = () => {
    if (this.state.counter > 0) {
      let AddImg = ImgData[ImgData.indexOf(this.state.imgInDisplay[0]) - 1];
      if (AddImg) {
        this.state.imgInDisplay.pop();
        this.state.imgInDisplay.unshift(AddImg);
      }
      this.state.counter--;
      this.setState({ counter: this.state.counter });
      this.setState({ imgInDisplay: this.state.imgInDisplay });
    }
  };

  onClickNext = () => {
    if (this.state.counter < ImgData.length - 1) {
      let AddImg =
        ImgData[
          ImgData.indexOf(
            this.state.imgInDisplay[this.state.imgInDisplay.length - 1]
          ) + 1
        ];
      if (AddImg) {
        this.state.imgInDisplay.shift();
        this.state.imgInDisplay.push(AddImg);
      }
      this.state.counter++;
      this.setState({ counter: this.state.counter });
      this.setState({ imgInDisplay: this.state.imgInDisplay });
    }
  };

  handleAdd = (imgId) => {
    let checkImg = this.state.imgInCart.findIndex((i) => i.id == imgId);
    if (checkImg == -1) {
      let addImg = ImgData.find((i) => i.id == imgId);
      this.state.imgInCart = [...this.state.imgInCart, ...[addImg]];
      this.setState({ imgInCart: this.state.imgInCart });
    }
  };

  handleRemove = (imgId) => {
    let checkImg = this.state.imgInCart.findIndex((i) => i.id == imgId);
    if (checkImg != -1) {
      this.state.imgInCart.splice(checkImg, 1);
      this.setState({ imgInCart: this.state.imgInCart });
    }
  };

  handlethmbnailClick = (imgId) => {
    this.setState({ counter: ImgData.findIndex((i) => i.id == imgId) });
  };

  render() {
    return (
      <div className="App">
        <Navbar imgInCart={this.state.imgInCart} />
        <div className="targetImgStyle p-4">
          <div className="center-block">
            <ImgMain
              targetImg={ImgData[this.state.counter]}
              onhandleAdd={this.handleAdd}
              onhandleRemove={this.handleRemove}
              imgInCart={
                this.state.imgInCart.indexOf(ImgData[this.state.counter]) != -1
              }
            />
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-2 p-2">
              <a className="btn">
                <img
                  src="/previous.png"
                  alt="Pervious"
                  onClick={this.onClickPrevious}
                />
              </a>
            </div>
            {this.state.imgInDisplay.map((i) => (
              <div className="col-lg-2 p-2" key={i.id}>
                <ImgThumbnail
                  targetImg={i}
                  selected={ImgData[this.state.counter] == i}
                  onhandleClick={this.handlethmbnailClick}
                />
              </div>
            ))}
            <div className="col-sm-2 p-2">
              <a className="btn">
                <img
                  src="/next.png"
                  alt="Pervious"
                  onClick={this.onClickNext}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
