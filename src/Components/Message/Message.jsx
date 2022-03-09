import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Message = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/todo-list-fetch')
  }, []);

  return null;
}