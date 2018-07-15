import React from 'react'
import Roundy from 'roundy'

export default class Rating extends React.Component {
  constructor() {
    super();
    this.state = {
      userRating: 5,
      globalRating: 4.7
    };
  }
  calculateRating = val => {
    return val / 2;
  };
  render() {
    const val = this.state.userRating;
    const ratingStyle = {
      display: "flex",
      paddingLeft: "10px"
    };
    return (
      <div style={{ maxWidth: "200px" }}>
        <div style={ratingStyle}>
          <div
            style={{ position: "relative", left: "5rem", paddingTop: "2.5rem" }}
          >
            <h2 style={{ marginBottom: "0",fontWeight:400 }}>{this.props.score}</h2>
            <h5 style={{ marginTop: "0",paddingLeft:'10px', fontWeight: 400 }}>
              {this.state.userRating}
            </h5>
          </div>
          <Roundy
            value={val * 2}
            min={0}
            max={20}
            step={1}
            bgColor="#ccc"
            color="#5ee7df"
            radius={55}
            strokeWidth={11}
            sliced={false}
            onChange={val => this.setState({ userRating: val / 2 })}
          />
        </div>
        <div>
          <h4 style={{ marginTop: ".5rem", fontWeight: "500" }}>
            Drama/Action/Science fiction
          </h4>
        </div>
      </div>
    );
  }
}