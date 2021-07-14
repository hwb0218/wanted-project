import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Diamond } from "../styles/GlobalStyles";
import { FaTimes } from 'react-icons/fa';
import { myWantedList, myWantedListMobile } from "./dropdownMenu";

const MyWanted = ({ handleProfileBtn }) => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [timer, setTimer] = useState(0);

    const debounce = (fn, delay) => {
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
            const newTimer = setTimeout(() => {
                fn();
            }, delay);
            setTimer(newTimer);
        };
    };

    const handleResize = debounce(() => {
        setInnerWidth(window.innerWidth);
    }, 0);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize]);

    return (
        <MyWantedContainer onClick={handleProfileBtn}>
            <MyWantedWrapper>
                <WantedLogo>
                    <i>
                        <span></span>
                    </i>
                    <FaTimes />
                </WantedLogo>
                <MyWantedList>
                    {innerWidth > 767
                        ? myWantedList.map((item, i) => (
                            <MyWantedListItem key={item} index={i}>
                                <div>{item}</div>
                            </MyWantedListItem>
                        ))
                        : myWantedListMobile.map((item, i) => (
                            <MyWantedListItem key={item} index={i}>
                                <div>{item}</div>
                            </MyWantedListItem>
                        ))}
                </MyWantedList>
            </MyWantedWrapper>
            <Diamond />
        </MyWantedContainer>
    );
};

const MyWantedContainer = styled.div`
  position: absolute;
  top: 130%;
  left: -27px;
  margin-top: 13px;
  
  @media screen and (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 0;
  }
`;

const MyWantedWrapper = styled.div`
  padding-top: 14px;
  width: 194px;
  border-radius: 10px;
  background: #fff; 
  box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
  border: 1px solid #cdcdcd;
  
  @media screen and (max-width: 767px) {
    width: 100%;  
    height: 100%;
    box-shadow: none;
    border-radius: 0;
    padding: 20px;
  }
`

const MyWantedList = styled.ul`

`;

const desktop = css`
  position: relative;
  text-align: center;
  height: 34px;
  color: #333;
  font-size: 14px;
  line-height: 20px;
  
  & > div {
    margin: 0 8px;  
    padding: 8px;
   
    &:hover {
      background: #f7f7f7;
      border-radius: 8px;  
    }
  }
  
  &:nth-child(2), 
  &:nth-child(6) {
    &:after { 
      content: '';
      display: block;
      margin: 7px 0;
      width: 100%;
      height: 1px;
      background: #ececec;
    }
  }
  
  &:nth-child(3) > div,
  &:nth-child(7) > div {
    margin-top: 18px;
  }
  
  &:last-child {
    height: 50px;
    line-height: 34px;
    margin-top: 9px;
    background: #f7f7f7;
    border-top: 1px solid #ececec;
    border-radius: 0 0 10px 10px;
    
    & > div:hover {
      background: transparent;
    }
  }
`;

const mobile = css`
  font-size: 20px;
  
  & > div {
    padding: 15px 0;
  }
  
  ${({ index }) => (index === 2 || index === 7 || index === 9) && css`
    border-top: 1px solid #ececec;
    margin-top: 15px;
    padding-top: 15px;
  `};
`;

const MyWantedListItem = styled.li`
  @media screen and (min-width: 767px) {
    ${desktop};
  }
  
  @media screen and (max-width: 767px) {
    ${mobile};
  }
`;

const WantedLogo = styled.div`
  display: none;
  height: 50px;
  
  @media screen and (max-width: 767px) {
    display: block;
  }
  
  & > i {
    display: inline-block;
    
    & span {
      &:before {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(36, 224, 166, .8);
      }
    }
  }
`;

export default MyWanted;