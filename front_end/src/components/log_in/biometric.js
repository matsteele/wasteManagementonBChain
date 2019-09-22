import React from "react";
import { Button } from "semantic-ui-react";
import { navigate } from "hookrouter";
import fingerPrint from "../../assets/fingerPrint.svg";


export default function biometric() {
  const shiftToProfilePage = () => {
    navigate("/workerhome");
  };

  return (
    <div>
      <p>finger scanner</p>
      <br />
      <br />
      <br />
      <img src={fingerPrint} />
      <br />
      <br />
      <br />
      <br />
      <Button onClick={shiftToProfilePage}>log in</Button>
    </div>
  );
}
