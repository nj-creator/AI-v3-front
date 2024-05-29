import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { getData, postData } from "../utils/serverHelper";
import { authActions } from "../store/slice/auth.reducer";

export const useAuth = (autoFetch = false) => {
  const authState = useAppSelector((state) => state.auth);

  const { errorMessage, isLoggedIn, status, user } = authState;

  const isLoading = useMemo(
    () => status === "loading" || status === "initial",
    [status]
  );
  const isError = useMemo(() => status === "error", [status]);

  const dispatch = useAppDispatch();

  const descopeFunction = useCallback(
    async (payload, changePage) => {
      try {
        dispatch(authActions.setFetchingUser());
        const data = await postData("/user/descope", payload);
        dispatch(authActions.setSuccessUser(data.data));
        changePage();
      } catch (error) {
        dispatch(
          authActions.setFailedUser(
            error?.message || "Error occured while login"
          )
        );
      }
    },
    [dispatch]
  );

  const logoutFunction = useCallback(
    async (closePopup) => {
      try {
        await getData("/user/logout");

        dispatch(authActions.setLogout());
        closePopup();
      } catch (error) {
        console.log(error, "logout error");
      }
    },
    [dispatch]
  );

  const getProfile = useCallback(async () => {
    try {
      const data = await getData("/user/profile");
      dispatch(authActions.setSuccessUser(data?.data));
    } catch (error) {
      console.log(error, "get profile error");
      dispatch(
        authActions.setFailedUser(error?.message || "Error occured while login")
      );
    }
  }, [dispatch]);

  useEffect(() => {
    if (autoFetch) {
      getProfile();
    }
  }, [autoFetch, getProfile]);

  return {
    isLoading,
    isError,
    user,
    isLoggedIn,
    errorMessage,
    descopeFunction,
    logoutFunction,
  };
};
