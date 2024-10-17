"use client";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import AuthButton from "../Reusables/AuthButton";
import { useRouter } from "next/navigation";
// import {useReturn} from "../hooks/useReturn";

const ConfirmSignup = () => {
  const router = useRouter()
  // const { returnToPrevious } = useReturn();

  return (
    <div className="w-full max-w-[430px] mx-auto py-10">
      <div>
        <IoMdArrowBack
          onClick={() => {
            router.back()
          }}
          size={25}
        />
      </div>

      <div>
        <h1 className="font-medium text-[32px] leading -[40px]">
          Which are you?
        </h1>
        <p className="text-[#00030AA3] text-[14px] leading-[21px]">
          Please select the option that best fits your interest in choosing us.
        </p>

        <form className="space-y-5 my-10">
          <div>
            <label className="flex items-center gap-2 text-black text-[14px] leading-[21px] border-[#00030A14] border tracking-tight p-2 rounded w-full max-w-[400px]">
              <input type="radio" name="role" value="volunteer" className="text-[#189452]" />
              Volunteer
            </label>
          </div>
          <div>
            <label className="flex items-center gap-2 text-black text-[14px] leading-[21px] border-[#00030A14] border tracking-tight p-2 rounded w-full max-w-[400px]">
              <input type="radio" name="role" value="organisation" />
              Organisation
            </label>
          </div>
          <div>
            <AuthButton
              text="Continue"
              bgColor="bg-black"
              textColor="text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmSignup;
