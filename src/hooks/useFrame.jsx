import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { useParams } from "react-router-dom";
import { frameActions } from "../store/slice/frame.reducer";
import { getData } from "../utils/serverHelper";

export const useFrame = (fetchFrames = false) => {
  const frameState = useAppSelector((state) => state.frame);

  const { sceneId } = useParams();

  const {
    status,
    data: frameData,
    errorMessage,
    isGenerating,
    generatedFramesNumber,
    generationCompleted,
  } = frameState;

  const isLoading = useMemo(() => status === "loading", [status]);
  const isError = useMemo(() => status === "error", [status]);

  const dispatch = useAppDispatch();

  const generateFrames = useCallback(async () => {
    try {
      dispatch(frameActions.setFrameLoading());

      const data = await getData(`/frame/get?sceneId=${sceneId}`);

      if (data?.data?.generatingFrames) {
        dispatch(
          frameActions.setGenerationBegin(data?.data?.generatedFramesNumber)
        );
      } else {
        dispatch(frameActions.setFrameSuccess(data?.data?.data));
      }
    } catch (error) {
      dispatch(
        frameActions.setFrameError(
          error?.response?.data?.error?.message ||
            error?.response?.data?.message ||
            "Error occured while generating the frames"
        )
      );
    }
  }, [dispatch, sceneId]);

  const setSocketCallData = useCallback(
    (payload) => {
      if (payload) {
        dispatch(frameActions.setData(payload));
      }
    },
    [dispatch]
  );

  const setGenerationCompleted = useCallback(() => {
    dispatch(frameActions.setGenerationCompleted());
  }, [dispatch]);

  const updateRegeneratedFrame=useCallback((id,url)=>{
    const frames = frameState.data;
    const data = frames.map((item, inx) => {
      if (inx === id) {
        return {
          ...item,
          framesUrl: [...item.framesUrl, url]
        };
      }
      return item;
    });
    dispatch(frameActions.setRegeneratedFrame(data));
  },[dispatch])

  useEffect(() => {
    if (fetchFrames) {
      generateFrames();
    }
  }, [fetchFrames, generateFrames]);

  return {
    isLoading,
    isGenerating,
    frameData,
    errorMessage,
    generatedFramesNumber,
    setSocketCallData,
    setGenerationCompleted,
    updateRegeneratedFrame,
    generationCompleted,
    isError,
  };
};
