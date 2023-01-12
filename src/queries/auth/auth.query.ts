import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../constants/token/token.constant';
import { postLogin } from '../../lib/apis/auth/postLogin';
import { postSignUp } from '../../lib/apis/auth/postSignUp';
import { setToken } from '../../lib/token';

export const usePostLogin = () => {
  const navigate = useNavigate();
  return useMutation(postLogin, {
    onSuccess: (data) => {
      window.alert(data.message);
      setToken(ACCESS_TOKEN, data.token);
      navigate('/');
    },
    onError: (error: any) => {
      window.alert(error.response.data.details);
      console.error(error);
      navigate('/auth');
    },
  });
};

export const usePostSignUp = () => {
  const navigate = useNavigate();
  return useMutation(postSignUp, {
    onSuccess: (data) => {
      window.alert(data.message);
      setToken(ACCESS_TOKEN, data.token);
      navigate('/auth');
    },
    onError: (error: any) => {
      window.alert(error.response.data.details);
      console.error(error);
    },
  });
};
