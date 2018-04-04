import React from "react"

class Station extends React.Component {

  render() {
    return (
      <div className="channel" style={{ backgroundColor: `#${this.props.background}` }}>
        <img src={this.props.image} className="channel-img" alt="channel pic" />
        <div className="channel-info">
          <h2>{this.props.name}</h2>
          <audio className="channel-audio" controls>
            <source src={this.props.audio} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    )
  }
}

export default Station
