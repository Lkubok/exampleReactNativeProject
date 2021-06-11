/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { endsWith, get } from 'lodash';
import { actions as appParamsActions } from 'store/appParams';

type Args = {
  dispatch: any;
};

const invalidTokenMiddleware: (a: Args) => any = ({ dispatch }) => (next: any) => (action: any) => {
  const failureAction = endsWith(action.type, '/SET_REQUEST_FAILED');
  const status = failureAction && get(action, 'status');

  if (status === 412) {
    dispatch(appParamsActions.setShouldRequestNewSessionToken(true));
    return next(action);
  }
  return next(action);
};
export default invalidTokenMiddleware;
