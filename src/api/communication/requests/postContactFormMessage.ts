import axios, { AxiosError } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { actions as appParamsActions } from 'store/appParams';
import { RootReducerState } from 'store/reducers';
import { endpoints } from 'api';

import * as requestTypes from '../requestTypes';
import * as responseTypes from '../responseTypes';
import { HookInterface } from '../hooks/usePostContactFormMessage';

export interface RequestInterface extends HookInterface {
  data: requestTypes.PostContactFormMessageRequestBody;
}

const url = endpoints.CONTACT_FORM_MESSAGE;

export const postContactFormMessage = ({
  failureCallback,
  successCallback,
  data,
}: RequestInterface): ThunkAction<void, RootReducerState, unknown, Action<string>> => (dispatch) => {
  dispatch(appParamsActions.setIsRequesting(true));
  return axios
    .request<responseTypes.PostContactFormMessageResponse>({
      method: 'PUT',
      url,
      data,
      params: { sid: data.sid, locale: data.locale },
    })
    .then((result) => {
      dispatch(appParamsActions.setIsRequesting(false));
      successCallback && successCallback(result.data);
    })
    .catch((err: AxiosError) => {
      dispatch(appParamsActions.setIsRequesting(false));
      //NOTE: ERROR handling only - START
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const baseURL = `${err.response?.config.baseURL}${url}`;
      const status = err.response?.status;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const method = err.request?._method as string;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const headers = err.request?._headers as string;
      const message = JSON.stringify({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        responseData: err.response?.data,
        requestData: { data, url, baseURL, status, method, headers },
      });
      //NOTE: ERROR handling only - END
      dispatch(appParamsActions.setRequestFailed(message, status ?? 0));
      failureCallback && failureCallback(err);
    });
};
