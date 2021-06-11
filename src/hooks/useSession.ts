import { useContext } from 'react';
import { SessionContext, SessionContextProps } from 'contexts';

export const useSession: () => SessionContextProps = () => {
  const {
    removeSessionToken,
    setSessionToken,
    updateSessionToken,
    sessionToken,
    sid,
    logIn,
    logOut,
    getUserStatus,
  } = useContext(SessionContext) as SessionContextProps;

  const returnObject: SessionContextProps = {
    removeSessionToken,
    setSessionToken,
    updateSessionToken,
    sessionToken,
    sid,
    logIn,
    logOut,
    getUserStatus,
  };

  return returnObject;
};

export default useSession;
