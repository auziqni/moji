import { FormSettings } from "@/components/formSettings";
import React from "react";
import { GetDataAdmin } from "@/lib/getdata";

export default async function Settings() {
  const DataAdmin = await GetDataAdmin();

  return <FormSettings admin={DataAdmin} />;
}
