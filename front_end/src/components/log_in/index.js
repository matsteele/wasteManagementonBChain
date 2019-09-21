import React, { useState } from "react";
import JobCoinLogo from "./job_coin_logo";
import { StyledInputComp } from "./input";
import styled from "@emotion/styled";
import { Button, Dropdown } from "semantic-ui-react";

const LogIn = () => {
  const [ifWriting, setIfWriting] = useState(false);
  const [JCoinAddr, setJCoinAddr] = useState("");
  const [
    helperText,
    sethelperText
  ] = useState("sign in with your jobcoin address");

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
          <Text color={ifWriting ? "white" : "darkgray"}>
            welcome {JCoinAddr} to junk jobs!
          </Text>
          <Button.Group widths="4">
            <Button color="red" size="large">
              sign-up
            </Button>
            <Button.Or />
            <Button size="large">log-in</Button>
          </Button.Group>
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
