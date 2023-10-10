import React from "react";

class ButtonDrum extends React.Component {
  constructor(props) {
    super(props);

    this.handleKey = this.handleKey.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  reproduceSound(keyAcc) {
    document.querySelector(`#drum-${keyAcc}`).focus();
    const audio = new Audio(document.querySelector(`#drum-${keyAcc} #${keyAcc}`).currentSrc);
    audio.play();
  }

  handleClick(e) {
    this.props.handleKeyPressed(e.target.textContent);
    this.reproduceSound(e.target.textContent);
  }

  handleKey(e) {
    if (e.key.toUpperCase() === this.props.keyAccess) {
      this.props.handleKeyPressed(e.key.toUpperCase());
      this.reproduceSound(e.key.toUpperCase());
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey);
  }

  render() {
    return (
      <button
        id={`drum-${this.props.keyAccess}`}
        className="drum-pad"
        onClick={this.handleClick}
      >
        {this.props.keyAccess}
        <audio id={this.props.keyAccess} className="clip">
          <source src={this.props.src} />
        </audio>
      </button>
    );
  }
}

export default ButtonDrum;
