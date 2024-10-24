'use client'
import React from "react";
import { useRouter } from "next/navigation";

export const useReturn = () => {
  const router = useRouter();

  const returnToPrevious = () => {
    router.back();
  };

 
  return { returnToPrevious };
};


