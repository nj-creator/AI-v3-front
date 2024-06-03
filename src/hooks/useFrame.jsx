import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { useParams } from "react-router-dom";
import { frameActions } from "../store/slice/frame.reducer";
import { getData, postData } from "../utils/serverHelper";

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

  const updateRegeneratedFrame=useCallback(async(formData,id,close,setLoading,setSelectedFrameUrl)=>{
    try {
      const data = await postData("/frame/regenerate", formData);
      const frames = frameState.data;
      const updatedData = frames.map((item, inx) => {
        if (inx === id) {
          return {
            ...item,
            framesUrl: [...item.framesUrl, data.data]
          };
        }
        return item;
      });
      await setActiveFrame({frame_id:updatedData[id]._id,active_id:updatedData[id].framesUrl.length-1},setSelectedFrameUrl,updatedData,close)
      setLoading(false);
      // close();
    } catch (error) {
      setLoading(false);
      console.log(error,"error while regenerating");
    }
  },[dispatch,frameState])

  const setActiveFrame=useCallback(async(payload,setSelectedFrameUrl,updtData,close)=>{
    try {
      if (setSelectedFrameUrl && updtData) {
        const data=await postData("/frame/activeFrame",payload)
        setSelectedFrameUrl(payload.active_id);
        const updatedData=updtData.map((item)=>{
          if (item._id===payload.frame_id) {
            return {...item,activeUrl:payload.active_id}
          }
          return item;
        })
        dispatch(frameActions.setFramesData(updatedData));
        close();
      }else{
        const data=await postData("/frame/activeFrame",payload)
        const frames=frameState.data;
        const updatedData=frames.map((item)=>{
          if (item._id===payload.frame_id) {
            return {...item,activeUrl:payload.active_id}
          }
          return item;
        })
        dispatch(frameActions.setFramesData(updatedData));
      }
    } catch (error) {
      console.log(error,"error while setting active");
    }

  },[dispatch,frameState])

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
    setActiveFrame,
    generationCompleted,
    isError,
  };
};
