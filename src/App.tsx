import { Input } from "@/components/ui/input";

function App() {
  return (
    <>
      <div className="mx-auto max-w-[100rem] px-16 flex flex-col my-3">
        <div className="flex flex-col justify-between items-center | md:flex-row">
          <img src="/plm_logo.png" className="h-20" />
          <h1 className="font-montserrat font-bold text-xl text-[#434343] mt-5 | md:mt-0">
            The PLM Online Campus
          </h1>
        </div>
      </div>
      <div>
        <img src="/divider_signin.png" className="w-full h-3" />
      </div>
      <div className="mx-auto max-w-[100rem] py-16 px-16 flex flex-col justify-center items-center | md:py-32 ">
        <div className="py-14 px-16 border border-black rounded-md w-[28rem]  font-open-sans relative z-10 bg-white">
          <h1 className="font-bold font-montserrat text-2xl mb-2 text-main-red">
            Sign In
          </h1>
          <p className="text-xs">
            Please sign in to your provided student number and PLM outlook
            account, to verify your credentials.
          </p>
          <Input
            type="number"
            placeholder="Student Number"
            className="mt-5 mb-3"
          />
          <Input type="email" placeholder="email@plm.edu.ph" className="mb-7" />
          <Button className="bg-main-red hover:bg-destructive w-24 relative left-56">
            Continue
          </Button>
        </div>
        <div className="w-[28rem] flex justify-between">
          <Button
            variant="link"
            className="text-xs relative z-10 font-normal text-main-blue underline underline-offset-0 font-open-sans"
          >
            Can't Access your account?
          </Button>
          <Button
            variant="link"
            className="text-xs relative z-10 font-normal text-main-blue underline underline-offset-0 font-open-sans"
          >
            Graduate Program Application
          </Button>
        </div>
        <img
          src="/plm_logo_signin_bg.png"
          className="absolute right-0 bottom-0 z-0"
        />
      </div>
      <div className="w-full bg-[#434343] absolute bottom-0">
        <div className="max-w-[100rem] px-16 py-12 mx-auto flex flex-col justify-center font-open-sans">
          <div className="flex flex-col justify-between items-center mb-1 text-sm | md:flex-row md:items-start">
            <p className="text-white text-center">
              This is the official CRS webiste of{" "}
              <strong>Pamantasan ng Lungsod ng Maynila</strong>
            </p>
            <p className="text-white">For inquiries and concerns:</p>
          </div>
          <div className="text-sm flex flex-col justify-between items-center | md:flex-row md:items-start">
            <p className="text-main-yellow">
              © 2023 ONPLM. All rights reserved.
            </p>
            <p className="font-bold text-white">ithelp@plm.edu.ph</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
