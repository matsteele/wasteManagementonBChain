import React from "react";

import styled from "@emotion/styled";
// import styleUtils from "utils/styles";
import { Input } from "semantic-ui-react";

export const StyledInputComp = props => (
  <>
    <StyledInput
      onChange={e => props.handleChange(e)}
      onKeyDown={e => {
        if (e.key === "Enter") {
          props.handleSubmit();
        }
      }}
      value={props.value}
      type={props.type}
      min="0"
      placeholder={props.placeholderText}
    />
  </>
);

const StyledInput = styled(Input)`
  & > input {
    height: 20px;
    width: 100px;
    padding: 0;
    &:focus {
      border: 1px solid red !important;
    }
  }
`;
