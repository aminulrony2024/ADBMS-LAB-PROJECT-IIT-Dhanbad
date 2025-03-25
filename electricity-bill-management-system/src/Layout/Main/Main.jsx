import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#eaeaea]">
      <Header></Header>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-9 lg:col-span-8">
            <Banner></Banner>
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-4">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;