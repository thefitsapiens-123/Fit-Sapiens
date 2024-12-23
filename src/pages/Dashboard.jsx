import React, { useEffect, useState } from "react";
import MemberTable from "../components/MemberTable";
import { useOutletContext } from "react-router";

function Dashboard() {
  return (
    <>
      <MemberTable />
    </>
  );
}

export default Dashboard;
