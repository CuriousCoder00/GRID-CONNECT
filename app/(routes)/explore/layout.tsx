import { Gradient } from "@/components/static/Gradient";
import { Banner } from "@/components/static/Banner";
import { Navbar } from "@/components/Navbar";

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
        <div className="w-full h-full z-10 backdrop-blur-xl">{children}</div>
      </div>
    </div>
  );
};

export default ExploreLayout;
