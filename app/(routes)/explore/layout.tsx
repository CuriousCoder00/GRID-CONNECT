import { Gradient } from "../_components/Gradient";
import { Banner } from "./_components/Banner";
import CommunityNavs from "./_components/CommunityNavs";
import { Navbar } from "./_components/Nav";

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="">
        <Navbar />
        <Gradient />
        <Banner />
        <Gradient />
        <div className="container grid grid-cols-4 mt-12">
          <div className="grid-cols-1">
            <CommunityNavs />
          </div>
          <div className="grid-cols-3 flex flex-col w-full justify-center items-start gap-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreLayout;
