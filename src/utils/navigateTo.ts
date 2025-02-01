import { useNavigate } from 'react-router-dom';

type NavigateFunction = (path: string) => void;

const useNavigateToRoute = (): NavigateFunction => {
  return useNavigate();
};

export type { NavigateFunction };

export default useNavigateToRoute;
