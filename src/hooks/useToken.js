import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

export default function useToken() {
  const { userData: user } = useContext(AuthContext);

  return user.token;
}
