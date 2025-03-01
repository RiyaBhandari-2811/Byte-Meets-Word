import { NavigateOptions, To, useNavigate } from 'react-router-dom';

type NavigateFunction = (to: To, options?: NavigateOptions) => void;

const useNavigateToRoute = (): NavigateFunction => {
  const navigate = useNavigate();
  return (path, options) => navigate(path, options);
};

export type { NavigateFunction };
export default useNavigateToRoute;
