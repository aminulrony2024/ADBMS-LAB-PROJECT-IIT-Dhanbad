import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import useAdmin from "../../Hooks/useAdmin";
const Home = () => {
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAdmin) {
      navigate("/admin-dashboard", { replace: true });
    } else {
      navigate("/dashboard", { replace: true });
    }
  }, [isAdmin, navigate]);
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
};

export default Home;