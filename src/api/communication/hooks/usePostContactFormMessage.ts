import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';

import { useLocale } from 'hooks';

import { postContactFormMessage } from '../requests/postContactFormMessage';
import { PostContactFormMessageResponse } from '../responseTypes';
import { PostContactFormMessageRequestBody } from '../requestTypes';

export interface HookInterface {
  failureCallback?: (err: AxiosError) => void;
  successCallback?: (data: PostContactFormMessageResponse) => void;
}

type ReturnDataType = {
  isLoading: boolean;
  responseData: null | PostContactFormMessageResponse;
  runRequest: (requestArgs: PostContactFormMessageRequestBody) => void;
};

interface HookArgs extends HookInterface {
  sid: string;
}

export const usePostContactFormMessage: (args: HookArgs) => ReturnDataType = ({
  failureCallback: componentFailureCallback,
  successCallback: componentSuccessCallback,
  sid,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<null | PostContactFormMessageResponse>(null);
  const dispatch = useDispatch();
  const { locale } = useLocale();

  const runRequest = useCallback(
    (data: PostContactFormMessageRequestBody) => {
      setIsLoading(true);
      dispatch(
        postContactFormMessage({
          data: { ...data, locale, sid },
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
