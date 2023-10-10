import React from "react";
import ButtonDrum from "./components/common/ButtonDrum";
import DrumContainer from "./components/containers/DrumContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="wrapper">
        <DrumContainer />
        <p className="mega">Untterable</p>
      </div>
    );
  }
}

export default App;
