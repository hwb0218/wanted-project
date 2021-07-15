import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Diamond } from "../styles/GlobalStyles";
import { BsX } from 'react-icons/bs';
import { myWantedList, myWantedListMobile } from "./dropdownMenu";
import cat from "../images/cat.jpg";

const circles = ['circle1', 'circle2', 'circle3'];

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
                        {circles.map((circle, i) => (
                        <div className={circle}>
                            {i > 0 && <div className={'innerCircle' + i} />}
                        </div>
                    ))}
                    </i>
                    <BsX onClick={handleProfileBtn} style={{ cursor: 'pointer'}} />
                </WantedLogo>
                <ul>
                    {innerWidth > 767
                        ? myWantedList.map((item, i) => (
                            <MyWantedListItem key={item} index={i}>
                                <div>{item}</div>
                            </MyWantedListItem>
                        ))
                        : myWantedListMobile.map((item, i) => (
                            <MyWantedListItem key={item} index={i}>
                                <div>{item}</div>
                                {item === 'MY 원티드' && <Avatar src={cat} />}
                            </MyWantedListItem>
                        ))}
                </ul>
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
    overflow: auto;
  }
`

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
  position: ${({ index }) => index === 0 && 'relative'};
  
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
  position: relative;
  margin-bottom: 45px;
  
  @media screen and (max-width: 767px) {
    display: block;
  }
  
  & > svg {
    font-size: 28px;
    color: #999;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
  }
  
  & > i {
    display: inline-block;
    
    & div {
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      top: 50%;
      transform: translate(0, -50%);
    }
    
    & .circle1 {
      background: rgb(36, 224, 166);
    }
    
    & .circle2 {
      background: rgb(67, 139, 255);
      left: 18px;
      overflow: hidden; 
    }
    
    & .circle3 {
      background: rgb(44, 91, 242);
      left: 36px;
      overflow: hidden;
    }
    
    & .innerCircle1 {
      background: rgb(58, 104, 249);
      right: 18px;
    }
    
    & .innerCircle2 {
      background: rgb(0, 73, 219);
      right: 18px;
    }
  }
`;

const Avatar = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`

export default MyWanted;