import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';

import { useLocale } from 'hooks';

import { getMenuMessages } from '../requests/getMenuMessages';
import { GetMenuMessagesResponse } from '../responseTypes';
import { GetMenuMessagesHookParameters } from '../requestTypes';

export interface HookInterface {
  failureCallback?: (err: AxiosError) => void;
  successCallback?: (data: GetMenuMessagesResponse) => void;
}

type ReturnDataType = {
  isLoading: boolean;
  responseData: null | GetMenuMessagesResponse;
  runRequest: (requestArgs: GetMenuMessagesHookParameters) => void;
};

interface HookArgs extends HookInterface {
  sid: string;
}

export const useGetMenuMessages: (args: HookArgs) => ReturnDataType = ({
  failureCallback: componentFailureCallback,
  successCallback: componentSuccessCallback,
  sid,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<null | GetMenuMessagesResponse>(null);
  const dispatch = useDispatch();
  const { locale } = useLocale();

  const runRequest = useCallback(
    (data: GetMenuMessagesHookParameters) => {
      setIsLoading(true);
      dispatch(
        getMenuMessages({
          params: { ...data, locale, sid },
          failureCallback: (err) => {
            setIsLoading(false);
            componentFailureCallback && componentFailureCallback(err);
          },
          successCallback: (data) => {
            setResponseData(data);
            setIsLoading(false);
            componentSuccessCallback && componentSuccessCallback(data);
          },
        }),
      );
    },
    [componentFailureCallback, componentSuccessCallback, dispatch, locale, sid],
  );

  const returnObject: ReturnDataType = {
    isLoading,
    runRequest,
    responseData,
  };

  return returnObject;
};
