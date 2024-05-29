import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { sceneActions } from "../store/slice/scene.reducer";
import { getData, postData } from "../utils/serverHelper";
import { useNavigate, useParams } from "react-router-dom";

export const useScene = (fetchScenes = false) => {
  const sceneState = useAppSelector((state) => state.scene);

  const { projectId } = useParams();
  const navigate = useNavigate();

  const { status, data, errorMessage } = sceneState;

  const isLoading = useMemo(() => status === "loading", [status]);
  const isError = useMemo(() => status === "error", [status]);

  const dispatch = useAppDispatch();

  const getScene = useCallback(async () => {
    try {
      dispatch(sceneActions.setSceneLoading());

      const data = await getData(`/scene?projectId=${projectId}`);
      dispatch(sceneActions.setSceneSuccess(data?.data));
    } catch (error) {
      console.log(error, "get scene error");
      dispatch(
        sceneActions.setSceneError(
          error?.response?.data?.error?.message ||
            error?.response?.data?.message ||
            "Error occured while getting the scenes"
        )
      );
    }
  }, [dispatch, projectId]);

  const createScene = useCallback(
    async (payload, closePopup) => {
      try {
        dispatch(sceneActions.setSceneLoading());

        const data = await postData("/scene/create", payload);

        closePopup();

        navigate(`/project/${projectId}/scene/${data?.data?.sceneId}`);

        getScene();
      } catch (error) {
        console.log(error, "create scene error");
        dispatch(
          sceneActions.setSceneError(
            error?.response?.data?.error?.message ||
              error?.response?.data?.message ||
              "Error occured while creating scenes"
          )
        );
      }
    },
    [dispatch, getScene, navigate, projectId]
  );

  useEffect(() => {
    if (fetchScenes) {
      getScene();
    }
  }, [fetchScenes, getScene]);

  return {
    isLoading,
    isError,
    data,
    errorMessage,
    createScene,
  };
};

export const useSceneDetails = () => {
  const [data, setData] = useState({ loading: false, data: {}, error: "" });

  const { sceneId } = useParams();

  const getSceneDetails = useCallback(async () => {
    try {
      setData({ loading: true, data: {}, error: "" });

      const data = await getData(`/scene/details?sceneId=${sceneId}`);
      setData({ loading: false, data: data?.data, error: "" });
    } catch (error) {
      console.log(error, "get scene details error");
      setData({ loading: false, data: {}, error: error?.message });
    }
  }, [sceneId]);

  useEffect(() => {
    getSceneDetails();
  }, [getSceneDetails]);

  return {
    sceneDetails: data.data,
    isLoading: data.loading,
    errorMessage: data.error,
  };
};
