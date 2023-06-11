import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

export default function useData() {
  const { userData: user } = useContext(AuthContext);

  return user;
}
