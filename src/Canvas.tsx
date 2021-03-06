import React from "react";
import Rake from "./Rake";
import { renderToString } from "react-dom/server";

type CanvasProps = {
  strokeStyle: string;
  lineWidth: number;
};

type PrepareEvent = {
  type: string;
  listener: EventListener;
  options?: boolean | AddEventListenerOptions;
};

const CANVAS_RESOLUTION = {
  width: 640,
  height: 360
};

class Canvas extends React.Component<CanvasProps> {
  private canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef();
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;

  private prevX: number = 0;
  private currX: number = 0;
  private prevY: number = 0;
  private currY: number = 0;
  private isMouseDown: boolean = false;

  updatexy = ({ clientX, clientY }: MouseEvent) => {
    this.prevX = this.currX;
    this.prevY = this.currY;
    this.currX = clientX - this.canvas.offsetLeft;
    this.currY = clientY - this.canvas.offsetTop;
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

  canvasEvents: PrepareEvent[] = [
    {
      // start draw
      type: "mousedown",
      listener: (evt: Event): void => {
        this.isMouseDown = true;
      },
      options: false
    },
    {
      // stop draw
      type: "mouseup",
      listener: (evt: Event): void => {
        this.isMouseDown = false;
      },
      options: false
    },
    {
      // draw
      type: "mousemove",
      listener: (evt: Event): void => {
        this.updatexy(evt as MouseEvent);
        if (this.isMouseDown) {
          this.draw();
        }
      },
      options: false
    },
    {
      // stop drawing if mouse is out
      type: "mouseout",
      listener: (evt: Event): void => {
        this.isMouseDown = false;
      },
      options: false
    }
  ];

  addListeners = (): void => {
    this.canvasEvents.forEach(({ type, listener, options }) => {
      this.canvas.addEventListener(type, listener, options);
    });
  };

  componentDidMount() {
    this.canvas = this.canvasRef.current!;
    this.ctx = this.canvas.getContext("2d")!;
    this.ctx.font = "40px Courier";
    this.ctx.fillText("drag that mouse!", 210, 75);
    this.addListeners();
  }

  componentWillUnmount() {
    this.canvasEvents.forEach(({ type, listener }) => {
      this.canvas.removeEventListener(type, listener);
    });
  }

  cursorString = (degrees: number) => {
    const rakeString = renderToString(
      <Rake width={26} height={26} rotation={degrees} />
    );

    return rakeString;
  };

  render() {
    return (
      <div
        style={{
          border: "1px gray solid"
        }}
      >
        <canvas
          ref={this.canvasRef}
          width={CANVAS_RESOLUTION.width}
          height={CANVAS_RESOLUTION.height}
          style={{
            color: "red",
            cursor: `url('data:image/svg+xml;utf8,${this.cursorString(45)}') 26 0, auto`
          }}
        />
      </div>
    );
  }
}

export default Canvas;
