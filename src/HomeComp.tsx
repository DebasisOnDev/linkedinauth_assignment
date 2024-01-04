import {
  SignOutButton,
  SignInButton,
  SignedIn,
  SignedOut,
  useClerk,
} from "@clerk/clerk-react";
import KeyPressMenu from "./KeyPressMenu";

const HomeComp = () => {
  const { user } = useClerk();
  return (
    <div className=" flex flex-col px-2  items-center justify-center min-h-screen bg-gray-200">
      <SignedOut>
        <div className=" mb-6 w-24 h-10 flex items-center justify-center font-semibold text-white bg-blue-500 rounded">
          <SignInButton />
        </div>
        <div className=" text-lg font-semibold text-slate-700 tracking-wide ">
          Click here to Sign In
        </div>
      </SignedOut>
      <SignedIn>
        <div className=" flex flex-col bg-slate-100  items-center justify-center gap-2 md:w-[600px] h-auto w-full  md:h-[300px]  rounded border-[2px] border-slate-600 border-opacity-25 ">
          <div className="flex h-2/5 py-2 gap-3 items-start justify-center">
            {" "}
            <div className="flex mt-2 items-start justify-center">
              <img
                src={user?.imageUrl}
                alt="user image"
                className=" h-[90px] w-[90px]   object-contain rounded-full"
              />
            </div>
            <div className=" flex mt-2 gap-1 items-start justify-center flex-col ">
              <h1 className=" font-semibold text-lg text-slate-800">
                {user?.fullName === null ? "Anonymous" : user?.fullName}
              </h1>
              <span className=" text-sm text-slate-600 text-opacity-60">
                Experimenting
              </span>
              <div className="  w-16 text-[13px]  h-6 flex items-center justify-center font-semibold text-white bg-blue-600 bg-opacity-80  border-[0.01px] border-slate-500 border-opacity-30  rounded">
                <SignOutButton />
              </div>
            </div>
          </div>
          <span className="  border-[1px] border-slate-600 border-opacity-25 mt-2 w-full"></span>
          <div className=" flex items-center justify-center py-6 md:py-0 h-3/5">
            <KeyPressMenu />
          </div>
        </div>
      </SignedIn>
    </div>
  );
};

export default HomeComp;
