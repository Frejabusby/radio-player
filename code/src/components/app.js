import React from "react"
import Station from "./station"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: []
    }
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData = () => {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        channels: json.channels
      })
    })
  }
  render() {
    return (
      <div className="channel-list">
        <h1>Sveriges Radio</h1>
        {this.state.channels.map((channel, index) => {
          if (index === 35 || index === 2 || index === 32) {
            return <Station
              key={channel.id}
              name={channel.name}
              image={channel.image}
              audio={channel.liveaudio.url}
              background={channel.color} />
          } else {
            return false
          }
        })}
      </div>
    )
  }
}
export default App
