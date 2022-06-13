import React from "react";
import { useRouter } from "next/dist/client/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>The Selected Client Project Page</div>;
};

export default SelectedClientProjectPage;
