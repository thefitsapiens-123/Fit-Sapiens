import React from "react";
import { useParams } from "react-router";

function Member() {
  const { id } = useParams();

  return (
    <div>
      <h1>Member Info ID {id}</h1>
    </div>
  );
}

export default Member;
