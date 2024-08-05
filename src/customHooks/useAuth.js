import { useSelector } from "react-redux";

const useAuth = () => {
  const { accessToken } = useSelector((state) => state.auth);

  return !!accessToken;
};

export default useAuth;
