import React from "react";
import ControlledInput from "../Reusables/ControlledInput";
import AuthButton from "../Reusables/AuthButton";
import Link from "next/link";

const SignupModal = () => {
  return (
    <section className="bg__overlay">
      <div className="max-w-[898px] w-full bg-white h-fit p-5 rounded-2xl border border-[#00030A]">
        <h1 className="font-medium text-[32px] leading-[40px] my-2">
          Log in or Sign up to continue
        </h1>
        <p className="text-[#00030AA3] text-[14px] leading-[21px]">
          Are you a volunteer looking for oppurtunities? you are just one click
          away.
        </p>

        <form autoComplete="off" className="my-5 space-y-5 w-full">
          <div>
            <ControlledInput
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <ControlledInput type="password" placeholder="Password" />
          </div>
          <div>
            <ControlledInput type="password" placeholder="Confirm Password" />
          </div>
          <div>
            <AuthButton
              text="Sign up"
              bgColor="bg-black"
              textColor="text-white"
            />
          </div>
        </form>
        <div className="my-5 space-y-3 w-full">
          <div>
            <AuthButton
              icon="/img/google.svg"
              text="Continue with Google"
              bgColor="bg-transparent"
              textColor="text-black"
            />
          </div>
          <div>
            <AuthButton
              icon="/img/apple.svg"
              text="Continue with Apple"
              bgColor="bg-transparent"
              textColor="text-black"
            />
          </div>
        </div>

        <div className="w-full flex items-center  justify-center">
          <small className="text-[12px] leading-3 text-center">
            Already have an account?{" "}
            <Link className="text-blue-800" href={"/auth/login"}>
              Log in
            </Link>
          </small>
        </div>
      </div>
    </section>
  );
};

export default SignupModal;
