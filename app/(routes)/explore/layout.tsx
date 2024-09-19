import { Gradient } from "@/components/Landing/Gradient";
import { Navbar } from "@/components/Header/Navbar";
import Banner from "@/components/Custom/Banner";

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
    <div className="h-full flex items-center justify-center max-sm:overflow-hidden">
      <div className="flex flex-col">
        <Navbar navLinks={links} showInput={true} />
        <Gradient />
        <Banner />
        <div className="w-full h-full z-10 mt-12">{children}</div>
      </div>
    </div>
  );
};

export default ExploreLayout;
