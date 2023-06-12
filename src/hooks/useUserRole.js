import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import { useQuery } from "@tanstack/react-query";

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

  // const { data: role = [], refetch } = useQuery({
  //   queryKey: ["userRole", user?.email],
  //   enabled: !loading,
  //   queryFn: async () => {
  //     const data = await axios(
  //       `${import.meta.env.VITE_API_URL}/users/${user?.email}`
  //     );
  //     // console.log({data})
  //     setUserRole(data?.data?.role);
  //     return data?.data?.role;
  //   },
  //   // retry: 6,
  // });

  return [userRole];
};

export default useUserRole;