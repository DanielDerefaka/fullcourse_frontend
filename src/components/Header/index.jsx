import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuItems } from "../../data/HouseMenu";
import { CurvedButton } from "../Buttons/CurvedButton";
import FlatButton, { UnstyledButtons } from "../Buttons/UnstyledButton";
import { HeaderContainer } from "./HeaderContainer";
import { FaCartPlus, FaWallet, FaPeopleCarry } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

import { MenuItemsContainer } from "./MenuItemsContainer";
import { Badge, List, ListInlineItem } from "reactstrap";
import Logo from "../Logo";
import { useDispatch, useSelector } from "react-redux";

import FlexContainer from "../Layouts/FlexContainer";
import { showAllCart } from "../../features/cart/cartActions";
import SignedInHeader from "./SignedInHeader";
import NotSignedInHeader from "./NotSignedInHeader";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo, isSuccess, user } = useSelector((store) => store.auth);
  const { items, total } = useSelector((state) => state.cart);

  const fetchData = async () => {
    dispatch(showAllCart());
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <>{user ? <SignedInHeader /> : <NotSignedInHeader />}</>;
};

export default Header;
