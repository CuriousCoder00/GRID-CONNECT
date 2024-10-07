import { Gradient } from "@/components/Landing/Gradient";
import { Navbar } from "@/components/Header/Navbar";
import Banner from "@/components/Landing/Custom/Banner";
import CommunityNavs from "@/components/Landing/Custom/CommunityNavs";


const links = [
  {
    name: "Login",
    href: "/auth/login",
  },
  {
    name: "Register",
    href: "/auth/register",
  },
];

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center max-sm:overflow-hidden">
      <Banner />
      <div className="flex flex-col relative">
        <Navbar navLinks={links} showInput={true} />
        <Gradient />
        <div className="container w-full h-full z-10 md:my-12 my-5 sticky top-12 min-h-[85vh] max-h-[85vh]">
          <div className="lg:w-[65vw] grid grid-cols-12 mt-12 ">
            <div className="lg:col-span-3 col-span-12">
              <CommunityNavs />
            </div>
            <div className="lg:col-span-9 gap-3 col-span-12 overflow-y-auto transition-all duration-150 max-h-[80vh]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreLayout;
