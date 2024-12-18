import React, { useEffect, useState } from "react";
import MemberTable from "../components/MemberTable";
import { useOutletContext } from "react-router";

function Dashboard() {
  const { setPageTitle } = useOutletContext();

  useEffect(() => {
    setPageTitle("Dashboard");
  }, [setPageTitle]);

  return (
    <>
      <MemberTable />
    </>
  );
}

export default Dashboard;
