import { useEffect } from "react";
import { socketInstance } from "../utils/socketHelper";

export const useSocket = (
  imageSetter,
  emitUser = "",
  forceConnect = false,
  generationCompleteFunction
) => {
  // connection
  useEffect(() => {
    if (forceConnect) {
      socketInstance.connectServer();
    }
    return () => {
      socketInstance.disconnectServer();
    };
  }, [forceConnect]);

  // listener
  useEffect(() => {
    if (imageSetter) {
      socketInstance.recieveImage(imageSetter);
    }
  }, [imageSetter]);

  useEffect(() => {
    if (generationCompleteFunction) {
      socketInstance.imageGenerationCompleted(generationCompleteFunction);
    }
  }, [generationCompleteFunction]);

  useEffect(() => {
    if (emitUser) {
      socketInstance.emitUser(emitUser);
    }
  }, [emitUser]);
};
