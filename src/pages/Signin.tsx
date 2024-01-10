import { Button } from "@/components/ui/button";
import * as msal from "@azure/msal-browser";
import api from "../api/fetch";

const msalConfig = {
  /* The keys should not be hardcoded. Use a configuration file */
  auth: {
    clientId: "0aa73793-92c5-429f-9c24-61df5e014bba", //client-id set on azure
    authority:
      "https://login.microsoftonline.com/c83f55a7-7fe8-4934-b759-09926430aef0", //appended tenant-id is set on azure
    redirectUri: "http://localhost:5173/", //must match what is set on azure, preferably index of front-end
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
};

const msalInstance =
  await msal.PublicClientApplication.createPublicClientApplication(msalConfig);

async function sendAccessTokenToAPI(accessToken: string) {
  /* The endpoint in our laravel backend is `api/login` but use correct domain:port */
  try {
    const response = await api.post(
      "/api/login",
      {
        access_token: accessToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true /* Necessary for storing cookies */,
      }
    );

    const data = response.data;

    //for debugging purpose, to see response of login api
    console.log("API response:", data);
    return data;

    //temporary redirection to /home, will be changed
    // window.location.href = "/home";
  } catch (error) {
    //for debugging purpose, handle errors properly
    console.error("API request error:", error);
  }
}

async function loginWithMicrosoft() {
  const loginRequest = {
    scopes: ["user.read", "openid", "profile"],
  };

  try {
    const authResult = await msalInstance.loginPopup(loginRequest);
    console.log(authResult);
    const loginResult = await sendAccessTokenToAPI(authResult.accessToken);

    if (loginResult.message === "Successful login") {
      window.location.assign("/home");
    }
  } catch (error) {
    //for debugging purpose, handle login failures properly
    console.error("Authentication error:", error);
  }
}

async function userInfo() {
  try {
    const response = await api.get("/api/me", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true /* Necessary for storing cookies */,
    });
    const data = response.data;
    console.log("API response:", data.roles);
    return data;
  } catch (error) {
    console.error("API request error:", error);
  }
}

const Signin = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Header */}
      <div className="mx-auto w-full max-w-[100rem] px-16 flex flex-col py-3">
        <div className="flex flex-col justify-between items-center | md:flex-row ">
          <img src="/plm_logo.png" className="h-20" />
          <h1 className="font-montserrat font-bold text-xl text-[#434343] mt-5 | md:mt-0">
            The PLM Online Campus
          </h1>
        </div>
      </div>

      {/* Gradient Divider */}
      <div>
        <img src="/divider_signin.png" className="w-full h-3" />
      </div>

      {/* Middle */}
      <div className="mx-auto w-full max-w-[100rem] p-16 flex flex-col justify-center items-center">
        <div className="py-16 px-12 border border-black rounded-md w-[31rem]  font-open-sans relative z-10 bg-white">
          <h1 className="font-bold font-montserrat text-2xl mb-10 text-main-red">
            Sign In
          </h1>
          <p className="text-sm mb-10">
            You will be redirected to Microsoft Sign In Portal. <br />
            Please provide there your respective PLM Outlook account.
          </p>
          <p className="text-sm mb-10">
            Don’t have an account yet?{" "}
            <a className="text-main-blue underline">Please contact ICTO</a>
          </p>

          <div className="flex justify-end ">
            <Button
              asChild
              className="bg-main-red hover:bg-destructive w-24 relative cursor-pointer"
              onClick={loginWithMicrosoft}
            >
              <div>Continue</div>
            </Button>
          </div>
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
          className="fixed right-0 bottom-0 z-0"
        />
      </div>

      {/* Footer */}
      <div className="mx-auto w-full bg-[#434343] relative ">
        <div className="max-w-[100rem] px-16 py-12 mx-auto flex flex-col justify-center font-open-sans">
          <div className="flex flex-col justify-between items-center mb-1 text-sm | md:flex-row md:items-start">
            <p className="text-white text-center">
              This is the official CRS website of{" "}
              <strong>Pamantasan ng Lungsod ng Maynila</strong>
            </p>
            <p className="text-white">For inquiries and concerns:</p>
          </div>
          <div className="text-sm flex flex-col justify-between items-center | md:flex-row md:items-start">
            <p className="text-main-yellow" onClick={userInfo}>
              © 2023 ONPLM. All rights reserved.
            </p>
            <p className="font-bold text-white">ithelp@plm.edu.ph</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
