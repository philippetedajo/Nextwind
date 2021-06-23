import React, { useState } from "react";
import axios, { Method } from "axios";

interface UseAxiosProps {
  url: string;
  method?: Method;
  input?: object;
  token?: string;
}

export const useAxios = ({
  url,
  method = "GET",
  input,
  token,
}: UseAxiosProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  let header = { "Content-Type": "application/json" };
  if (token) header["Authorization"] = token;

  const getData = () => {
    setIsLoading(true);
    axios({
      url: url,
      method: method,
      data: input,
      headers: header,
    })
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .then((error: any) => {
        setError(error);
        setIsLoading(false);
      });
  };

  return { getData, data, isLoading, error };
};
