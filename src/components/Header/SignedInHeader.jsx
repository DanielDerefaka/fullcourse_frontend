import React, { useEffect } from "react";
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
const SignedInHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchData = async () => {
    dispatch(showAllCart());
  };
  useEffect(() => {
    fetchData();
  }, []);

  const { items, total } = useSelector((state) => state.cart);
  return (
    <HeaderContainer>
      <Logo />

      <div>
        <FlexContainer
          orientation={"row"}
          width={"300px"}
          justify_content="space-between"
        >
          <Link to="/cart">
            <FaCartPlus size={20} />
            <Badge color="danger">{total}</Badge>
          </Link>

          <Link to={"/wallet"}>
            <FaWallet size={20} />
          </Link>
          <GrNotification size={20} />
          <Link to="/profile">
            <CgProfile size={20} />
          </Link>
        </FlexContainer>
      </div>
    </HeaderContainer>
  );
};

export default SignedInHeader;
