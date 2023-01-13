import { useEffect, useState } from 'react';
import { ACCESS_TOKEN } from '../../constants/token/token.constant';
import { getToken } from '../../lib/token';

export const useTokenCheck = () => {
  const [isAuthority, setIsAuthority] = useState(false);
  useEffect(() => {
    getToken(ACCESS_TOKEN) === null ? setIsAuthority(false) : setIsAuthority(true);
  }, [ACCESS_TOKEN]);
  return { isAuthority };
};
