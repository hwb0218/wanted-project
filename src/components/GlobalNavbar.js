import React, { useState } from 'react';
import styled from 'styled-components';
import {FiSearch, FiBell, FiMenu} from 'react-icons/fi'
import Dropdown from "./Dropdown";
import NavbarMenu from "./NavbarMenu";
import SearchBox from "./SearchBox";
import MyWanted from "./MyWanted";

const GlobalNavbar = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClickedSearchBtn, setClickedSearchBtn] = useState(false);
    const [isClickedProfile, setClickedProfiled] = useState(false);

    const handleSearchBtn = () => {
        setClickedSearchBtn(true);
    }

    const handleProfileBtn = () => {
        setClickedProfiled(!isClickedProfile);
    }

    return (
        <>
        <Navbar>
            <Wrapper>
                <Title>wanted</Title>
                <Menu>
                    <NavbarMenu setIsHovering={setIsHovering}/>
                </Menu>
                <Dropdown isHovering={isHovering} setIsHovering={setIsHovering}/>
                <Aside>
                    <ul>
                        <IconList className="search" onClick={handleSearchBtn}><FiSearch style={{ fontSize: '18px', color: '#333' }} /></IconList>
                        <IconList className="alert">
                            <FiBell style={{ fontSize: '18px', color: '#333' }} />
                            <Badge>N</Badge>
                        </IconList>
                        <IconList className="profileBox" onClick={handleProfileBtn}>
                            <Avatar src="/assets/cat.jpg"/>
                            <Badge>N</Badge>
                            {isClickedProfile ? <MyWanted /> : null}
                        </IconList>
                        <IconList className="lastList"><button>기업 서비스</button></IconList>
                        <IconList className="dropdownMenu"><FiMenu style={{ fontSize: '18px', color: '#333' }} /></IconList>
                    </ul>
                </Aside>
            </Wrapper>
        </Navbar>
            {isClickedSearchBtn ? <SearchBox setClickedSearchBtn={setClickedSearchBtn} /> : null}
        </>
    );
};

const Navbar = styled.nav`
  width: 100%;
  height: 50px;
  position: fixed;
  background: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  white-space: nowrap;
  z-index: 100;
  
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
    width: 100%;
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
    font-size: 13px;
  }
  
  @media screen and (max-width: 767px) {
    display: inline-block;
    font-size: 14px;
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
    
    @media screen and (max-width: 767px) {
      margin: 0;
    }
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
      
      @media screen and (max-width: 767px) {
        display: none;
      }
      
      &::before {
      display: inline-block;
      content: "";
      width: 1px;
      height: 10px;
      background-color: #e1e2e3;
      margin-right: 10px;
    }
  }
  
  &.dropdownMenu {
    display: none;
    margin-right: 10px;
    
    @media screen and (max-width: 767px) {
      display: inline-block;
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
    
    @media screen and (max-width: 767px) {
      height: 85%;
    }
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
  padding: 2px 3.5px;
  vertical-align: middle;
  border-radius: 40%;
  background-color: #258bf7;
  color: #fff;
  font-size: xx-small;
`;

export default GlobalNavbar;
