import { Gradient } from "@/components/static/Gradient";
import { Banner } from "@/components/static/Banner";
import { Navbar } from "@/components/Navbar";

const links = [
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Register",
    href: "/register",
  },
];

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col">
        <Navbar navLinks={links} showInput={true} />
        <Gradient />
        <Banner />
        <Gradient />
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default ExploreLayout;
