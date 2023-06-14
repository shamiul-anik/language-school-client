import CommonBanner from "../../components/CommonBanner";
import SectionTitle from '../../components/SectionTitle';
import { useTitle } from "../../hooks/useTitle";
import { useContext, useEffect } from "react";
import Aos from "aos";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClassCard from "./ClassCard";

const Classes = () => {

  useTitle("Classes");

  const { user, userRole, setUserRole, loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  // TODO: Change to AxiosSecure
  const { data: allApprovedClasses = [], refetch } = useQuery({
    queryKey: ["allApprovedClasses", user?.email, userRole],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/classes/approved`);
      setLoading(false);
      // console.log(res?.data);
      return res?.data;
    },
  });

  return (
    <div>
      {/* Classes Page Banner */}
      <CommonBanner bannerHeading="Classes"></CommonBanner>
      
      <section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">

        <SectionTitle heading="Classes" subHeading="Explore Our Highly Regarded Language Programs"></SectionTitle>

        <div>
          <h1 className="text-2xl font-bold text-teal-600 underline underline-offset-8 text-center mb-6">Total Approved Classes: {allApprovedClasses?.length}</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8">
          {
            allApprovedClasses?.map((classData) => <ClassCard key={classData._id} classData={classData}></ClassCard>)
          }
        </div>
      </section>
    </div>
  );
};

export default Classes;