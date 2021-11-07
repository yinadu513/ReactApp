import React, { Component } from "react";

class ImgMain extends Component {
  render() {
    const imgPath = "/large/";
    return (
      <div>
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-8">
              <img
                className="bg-white shadow p-3 mb-5 rounded"
                src={imgPath + this.props.targetImg.image}
                height="360"
                width="430"
              />
            </div>
            <div className="col-lg-4">
              <div className="details">
                {Object.entries(this.props.targetImg).map(([key, value]) => {
                  return (
                    <p key={key}>
                      <span className="text-white bg-secondary m-1 pl-1 pr-1">
                        {key}
                      </span>
                      {value}
                      <hr />
                    </p>
                  );
                })}

                <button
                  type="button"
                  className={
                    this.props.imgInCart
                      ? "btn btn-secondary m-2 not-allowed"
                      : "btn btn-warning m-2"
                  }
                  disabled={this.props.imgInCart}
                  onClick={() => {
                    this.props.onhandleAdd(this.props.targetImg.id);
                  }}
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className={
                    this.props.imgInCart
                      ? "btn btn-primary m-2"
                      : "btn btn-secondary m-2 not-allowed"
                  }
                  disabled={!this.props.imgInCart}
                  onClick={() => {
                    this.props.onhandleRemove(this.props.targetImg.id);
                  }}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgMain;
