import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Message = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/todo-list')
  });

  return null;
}