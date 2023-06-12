import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useUserRole = () => {

  const { user } = useContext(AuthContext);
  const [userRole, setUserRole] = useState("");
  
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/users/${user?.email}`).then(
      (data) => {
        setUserRole(data?.data?.role);
      }
    );
  }, [user?.email]);

  return [userRole];
};

export default useUserRole;