import React from "react";
import ButtonDrum from "../common/ButtonDrum";

class DrumContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPressed: '',
      drums: [
        { keyAcc: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
        { keyAcc: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
        { keyAcc: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
        { keyAcc: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
        { keyAcc: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
        { keyAcc: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
        { keyAcc: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
        { keyAcc: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
        { keyAcc: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
      ],
    };

    this.handleKeyPressed = this.handleKeyPressed.bind(this);
  }

  handleKeyPressed(newKeyPressed) {
    this.setState((prevState) => ({
      keyPressed: newKeyPressed,
      drums: prevState.drums,
    }));
  }


  render() {
    const buttons = this.state.drums.map(({ keyAcc, src }, index) => (
      <ButtonDrum
        key={index}
        keyAccess={keyAcc}
        handleKeyPressed={this.handleKeyPressed}
        src={src}
      />
    ));

    return (
      <div id="drum-machine">
        <div id="display">{this.state.drums.find(elem => elem.keyAcc === this.state.keyPressed)?.src.split("/").at(-1).split(".")[0]}</div>
        {buttons}
      </div>
    );
  }
}

export default DrumContainer;
