import React from "react";
import Canvas from "./Canvas";

type AppState = {
  strokeStyle: string;
  lineWidth: number;
};

class App extends React.Component<{}, AppState> {
  initState = (): AppState => ({
    strokeStyle: "black",
    lineWidth: 2
  });

  state = this.initState();

  handleLineWidth = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ lineWidth: parseInt(evt.target.value) });
  };

  handleStrokeStyle = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ strokeStyle: evt.target.value });
  };

  render(): JSX.Element {
    const { strokeStyle, lineWidth } = this.state;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <React.Fragment>
            <label htmlFor="strokeStyle">stroke color</label>
            <input
              type="color"
              value={strokeStyle}
              name="strokeStyle"
              onChange={this.handleStrokeStyle}
            />
          </React.Fragment>
          <React.Fragment>
            <label htmlFor="lineWidth">stroke width</label>
            <input
              type="range"
              value={lineWidth}
              min="1"
              max="10"
              name="lineWidth"
              onChange={this.handleLineWidth}
            />
          </React.Fragment>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Canvas strokeStyle={strokeStyle} lineWidth={lineWidth} />
        </div>
      </div>
    );
  }
}

export default App;
