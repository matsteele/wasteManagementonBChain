import React, { useState } from "react";
import JobCoinLogo from "../../assets/job_coin_logo";
import { StyledInputComp } from "./input";
import Biometric from './biometric'
import styled from "@emotion/styled";
import { Button, Dropdown } from "semantic-ui-react";

const LogIn = () => {
  const [ifWriting, setIfWriting] = useState(false);
  const [signingIn, setsigningIn] = useState(false);
  const [signupBioPage, setsignupBioPage] = useState(true);
  const [JCoinAddr, setJCoinAddr] = useState("");
  const [helperText, sethelperText] = useState(
    "sign in with your jobcoin address"
  );

  const handleChange = e => {
    const text = e.target.value;
    setJCoinAddr(text);
    const ifWritingCheck = text.length > 0;
    setIfWriting(ifWritingCheck);
  };

  const options = [
    { key: 1, text: "looking for work", value: 1 },
    { key: 2, text: "I have services/goods to provide", value: 2 },
    { key: 3, text: "I am a gov admin", value: 3 }
  ];

  const startSignup = (e) =>{
    e.preventDefault()
     setsigningIn(true)
  }

  const takeFingerStamp = () =>{
    setsigningIn(false)
    setsignupBioPage(false)
    sethelperText(
      "Just press your finger to the scanner and wait for it to turn green"
    );
  }

  //color b8d8ba
  return (
    <LogInContainer>
      <Section>
        <JobCoinLogo
          dashboard={false}
          scale={100}
          backgroundColor={ifWriting ? "grey" : "white"}
          emphasisColor={ifWriting ? "grey" : "red"}
        />
        <LogInForm
          backgroundColor={ifWriting ? "grey" : "white"}
          data-test="LogInForm"
        >
          {signupBioPage ? (
            <>
              <Text color={ifWriting ? "white" : "darkgray"}>
                welcome {JCoinAddr} to junk jobs!
              </Text>
              <Button.Group widths="4">
                <Button color="red" size="large" onClick={startSignup}>
                  sign-up
                </Button>
                <Button.Or />
                <Button
                  size="large"
                  disabled={signingIn ? true : false}
                  takeFingerStamp
                  onClick={takeFingerStamp}
                >
                  log-in
                </Button>
              </Button.Group>
              {signingIn ? (
                <>
                  <Dropdown clearable options={options} selection />
                  <InputContainer>
                    <StyledInputComp
                      handleChange={handleChange}
                      ifWriting={ifWriting}
                      list={"addresses"}
                      iconName={"sign-in"}
                      placeholderText={"first name"}
                    />
                    <StyledInputComp
                      handleChange={handleChange}
                      ifWriting={ifWriting}
                      list={"addresses"}
                      iconName={"sign-in"}
                      placeholderText={"last name"}
                    />
                  </InputContainer>
                  <Button color="red" size="small" onClick={takeFingerStamp}>
                    input finger stamp
                  </Button>
                </>
              ) : (
                ""
              )}
            </>
          ) : (
            <Biometric />
          )}
          <Text color={ifWriting ? "white" : "darkgray"}>{helperText}</Text>
        </LogInForm>
      </Section>
    </LogInContainer>
  );
};

export default LogIn;

//styles
const Section = styled.section`
  height: 25em;
  width: 20em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  margin: 0 auto;
`;

const LogInContainer = styled.div({
  width: "100%",
  height: "100%"
});

const LogInForm = styled.form(
  {
    boxShadow: "0 1px 10px #000000ad",
    height: "30em",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  props => ({
    backgroundColor: props.backgroundColor
  })
);

const InputContainer = styled.form({
  flexDirection: "row",
  display: "flex",
  justifyContent: "space-between",
  width: "80%"
});

export const Text = styled.p(
  {
    fontSize: 13
  },
  props => ({
    color: props.color
  })
);
