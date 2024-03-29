import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userPovider } from "../../AuthProvider/AuthProvider";

const LoggedOutPrivate = ({ children }) => {
  const { user, loading } = useContext(userPovider);
  const navigate = useNavigate();

  useEffect(() => {



if(loading){
return
}
    else if(user) {
      navigate('/');
    }
  }, [user, navigate]);

  return children;
};

export default LoggedOutPrivate;
