import { io } from "socket.io-client";

export class MySocket {
  URL = "http://localhost:8000";
  // URL = "https://v3.immersfy.com";
  socket;
  constructor() {
    this.socket = io(this.URL);
  }

  connectServer = (isConnected) => {
    if (!isConnected) {
      this.socket.connect();
    }
    this.socket.on("connect", () => console.log("socket connected"));
    this.socket.on("disconnect", () => console.log("socket disconnected"));
  };
  disconnectServer = () => {
    // this.socket.emit("disconnect", userId);
    this.socket.disconnect();
    this.socket.off("connect");
    this.socket.off("disconnect");
  };
  recieveImage = (setSocketCallData) => {
    this.socket.on("frameGenerated", (e) => {
      // dispatch(frameActions.setData(e));
      setSocketCallData(e);
    });
  };
  imageGenerationCompleted = (setGenerationCompleted) => {
    this.socket.on("frameGenerationCompleted", () => {
      setGenerationCompleted();
    });
  };
  emitUser = (id = "") => {
    this.socket.emit("newUser", id);
  };
}

export const socketInstance = new MySocket();
