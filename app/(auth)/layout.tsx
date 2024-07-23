import { Navbar } from "@/components/Navbar";
import { Gradient } from "@/components/static/Gradient";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-center">
      <Navbar hideMobileNav={true} />
      <div className="flex flex-col justify-center items-center w-full">
        <Gradient />
        {children}
        <Gradient />
      </div>
    </div>
  );
};

export default AuthLayout;
