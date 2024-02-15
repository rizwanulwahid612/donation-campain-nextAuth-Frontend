"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createDoctor = async (data: any) => {
  const res = await fetch(
    `https://donation-server-opal.vercel.app/api/v1/doctors/create-doctor`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    }
  );
  const { data: doctorData } = await res.json();
  revalidateTag("all-doctors");
  redirect(`/admins/doctors`);
};
