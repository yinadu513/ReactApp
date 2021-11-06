import React, { Component } from "react";

class ImgThumbnail extends React.Component {
  state = {
    hover: false,
  };

  Onhover = () => {
    this.setState({ hover: !this.state.hover });
  };
  render() {
    const imgPath = "/thumbnails/";
    return (
      <div>
        <img
          className={
            this.props.selected
              ? "borderSize border rounded border-danger"
              : this.state.hover
              ? "borderSize border rounded border-secondary"
              : "border rounded border-light"
          }
          src={imgPath + this.props.targetImg.thumbnail}
          height="121"
          width="145"
          onMouseEnter={this.Onhover}
          onMouseLeave={this.Onhover}
          onClick={() => {
            this.props.onhandleClick(this.props.targetImg.id);
          }}
        />
        <span
          className="badge badge-light"
          className={
            this.props.selected
              ? "badge badge-danger"
              : this.state.hover
              ? "badge badge-secondary"
              : "badge badge-light"
          }
        >
          {this.props.targetImg.id}
        </span>
      </div>
    );
  }
}

export default ImgThumbnail;
