import React from "react";
import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "Dhruv50AE", name: "Dhruv.50AE" },
    { id: "Dhruv49AE", name: "Dhruv.549AE" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => {
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default ClientsPage;
