import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuItems } from "../../data/HouseMenu";
import { CurvedButton } from "../Buttons/CurvedButton";
import FlatButton, { UnstyledButtons } from "../Buttons/UnstyledButton";
import { HeaderContainer } from "./HeaderContainer";

import { MenuItemsContainer } from "./MenuItemsContainer";
import { Badge, List, ListInlineItem } from "reactstrap";
import Logo from "../Logo";
import FlexContainer from "../Layouts/FlexContainer";

const NotSignedInHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo />
      <MenuItemsContainer>
        <FlexContainer  type="inline">
          {MenuItems.map((items, index) => {
            return (
              <ListInlineItem
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(items.value);
                }}
              >
                {items.menu}
              </ListInlineItem>
            );
          })}
        </FlexContainer >
      </MenuItemsContainer>
      <MenuItemsContainer>
        <UnstyledButtons
          onClick={() => {
            navigate("login");
          }}
        >
          {" "}
          Login
        </UnstyledButtons>
        <CurvedButton
          onClick={() => {
            navigate("signup");
          }}
        >
          {" "}
          create account
        </CurvedButton>
      </MenuItemsContainer>
    </HeaderContainer>
  );
};

export default NotSignedInHeader;
