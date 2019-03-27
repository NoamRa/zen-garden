import React from "react";

type CanvasProps = {
  strokeStyle: string,
  lineWidth: number,
}

class Canvas extends React.Component<CanvasProps> {

  private canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef();
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  
  private prevX: number = 0;
  private currX: number = 0;
  private prevY: number = 0;
  private currY: number = 0;

  findxy = (action: string, evt: MouseEvent) => {
    this.prevX = this.currX;
    this.prevY = this.currY;
    this.currX = evt.clientX - this.canvas.offsetLeft;
    this.currY = evt.clientY - this.canvas.offsetTop;
    this.draw();
  };

  draw = () => {
    this.ctx.beginPath();
    this.ctx.moveTo(this.prevX, this.prevY);
    this.ctx.lineTo(this.currX, this.currY);
    this.ctx.strokeStyle = this.props.strokeStyle;
    this.ctx.lineWidth = this.props.lineWidth;
    this.ctx.stroke();
    this.ctx.closePath();
  };

  addListeners = (): void => {
    this.canvas.addEventListener("mousemove", (evt: MouseEvent) => { this.findxy("move", evt) }, false);
    // canvas.addEventListener("mousedown", , false);
    // canvas.addEventListener("mouseup", , false);
    // canvas.addEventListener("mouseout", , false);
  };

  componentDidMount() {
    this.canvas = this.canvasRef.current!;
    this.ctx = this.canvas.getContext("2d")!;
    this.ctx.font = "40px Courier";
    this.ctx.fillText("shake that mouse!", 210, 75);
    this.addListeners();
  };

  componentWillUnmount() {
    // this.removeListeners();
  };

  render() {
    return (
      <div style={{border: "1px gray solid"}}>
        <canvas 
          ref={this.canvasRef} 
          width={640} 
          height={360}
          
        />
      </div>
    );
  };
};

export default Canvas