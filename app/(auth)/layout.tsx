import { Navbar } from "./(routes)/_components/Navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col items-end justify-end">
      <Navbar/>
      {children}
      </div>
  );
};

export default AuthLayout;
