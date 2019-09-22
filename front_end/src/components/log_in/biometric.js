import React from "react";
import { Button } from "semantic-ui-react";
import { navigate } from "hookrouter";

export default function biometric() {
  const shiftToProfilePage = () => {
    navigate("/workerhome");
  };

  return (
    <div>
      <p>finger scanner</p>
      <Button onClick={shiftToProfilePage}>log in</Button>
    </div>
  );
}
