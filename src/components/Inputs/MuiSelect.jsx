import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import styled from "styled-components";

const ariaLabel = { "aria-label": "description" };

export const MuiSelect = ({
  placeholder,
  width,
  onChange,
  id,
  value,
  type,
  error,
  children,
}) => {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      style={{ margin: "3rem 0rem" }}
      noValidate
      autoComplete="off"
    >
      {children}
      <ErrorTag> {error ? error : null}</ErrorTag>

      {/* <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
      <Input defaultValue="Error" error inputProps={ariaLabel} /> */}
    </Box>
  );
};

const ErrorTag = styled.p`
  color: red;
  font-size: 12px;
  font-weight: 500;
`;
