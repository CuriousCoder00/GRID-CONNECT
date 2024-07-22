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
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default ExploreLayout;
