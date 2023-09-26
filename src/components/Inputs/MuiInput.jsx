import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import styled from "styled-components";

const ariaLabel = { "aria-label": "description" };

export const MuiInput = ({
  placeholder,
  width,
  onChange,
  id,
  value,
  type,
  error,
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
      <Input
        value={value}
        id={id}
        name={id}
        fullWidth
        placeholder={placeholder}
        inputProps={ariaLabel}
        onChange={onChange}
        type={type || "text"}
      />
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
