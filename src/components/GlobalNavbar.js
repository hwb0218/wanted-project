import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { BsSearch, BsBell } from "react-icons/bs";
import Dropdown from "./Dropdown";
import NavbarMenu from "./NavbarMenu";



const GlobalNavbar = () => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Navbar>
            <Wrapper>
                <Title>wanted</Title>
                <Menu>
                    <NavbarMenu setIsHovering={setIsHovering}/>
                </Menu>
                <Dropdown isHovering={isHovering} setIsHovering={setIsHovering}/>
                <Aside>
                    <ul>
                        <IconList className="search"><BsSearch /></IconList>
                        <IconList className="alert">
                            <BsBell />
                            <Badge>N</Badge>
                        </IconList>
                        <IconList className="profileBox">
                            <Avatar src="/assets/cat.jpg"/>
                            <Badge>N</Badge>
                        </IconList>
                        <IconList className="lastList"><button>기업 서비스</button></IconList>
                    </ul>
                </Aside>
            </Wrapper>
        </Navbar>
    );
};

const Navbar = styled.nav`
  width: 100%;
  height: 50px;
  position: fixed;
  background: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  overflow: hidden;
  white-space: nowrap;
  
  @media screen and (max-width: 767px) {
    height: 57px;
    padding-top: 4px;  
  }
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1060px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  
  @media screen and (max-width: 767px) {
    margin: 0;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  cursor: pointer;
  
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Menu = styled.ul`
  font-size: 14px;
  font-weight: bold;
  
  @media screen and (max-width: 911px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
  }
  
  @media screen and (max-width: 767px) {
    display: inline-block;
  }
  
  
`;

const Aside = styled.aside`
  height: 100%;
  padding: 9px 0;
  
  & > ul {
    height: 100%;
  }
`;

const IconList = styled.li`
  display: inline-block;
  height: 100%;
  padding: 0 10px;
  vertical-align: middle;
  cursor: pointer;
  
  &.alert {
    position: relative;
    margin-right: 8px;
  }
  
  &.profileBox {
    position: relative;
    margin-right: 5px;
    padding: unset;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #e1e2e3;
    
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  
  &.lastList {
      padding: unset;
      margin-left: 20px;
      &::before {
      display: inline-block;
      content: "";
      width: 1px;
      height: 10px;
      background-color: #e1e2e3;
      margin-right: 10px;
      
    }
  }
  
  & > button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin-left: 15px;
    height: 30px;
    padding: 0 10px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    background: #fff;
    font-size: 13px;
    cursor: pointer;
  }
  
  & svg {
    height: 100%;
    vertical-align: middle;
  }
`;

const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-right: 11px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
`;

const Badge = styled.div`
  display: inline-block;
  position: absolute;
  top: -2px;
  right: -2px;
  padding: 2px 3px;
  vertical-align: middle;
  border-radius: 40%;
  background-color: #258bf7;
  color: #fff;
  font-size: xx-small;
`;

export default GlobalNavbar;