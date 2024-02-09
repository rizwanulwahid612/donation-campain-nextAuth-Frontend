"use server";

import { revalidateTag } from "next/cache";
// import { redirect } from "next/navigation";

export const deleteDoctor = async (id: string) => {
  console.log(id);
  const res = await fetch(`${process.env.BACKEND_URL}/doctors/${id}`, {
    method: "DELETE",
  });
  const { data } = await res.json();
  revalidateTag("all-doctors");
  // redirect
};
