import React from "react";
import { useRouter } from "next/dist/client/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  const loadProjectHandler = () => {
    // Load data
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "Dhruv50AE", clientprojectid: "projecta" },
    });
  };
  return (
    <div>
      <h1>The Client Projects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
