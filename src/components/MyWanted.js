import React from 'react';
import styled from 'styled-components';

const myWantedDropdownList = ['MY 원티드', '프로필', '지원 현황', '제안받기 현황', '좋아요', '북마크', '추천', '포인트', '로그아웃'];

const MyWanted = ({ setClickedProfiled }) => {
    return (
        <MyWantedDropdown>
            <MyWantedDropdownList>
                {myWantedDropdownList.map((item) => (
                    <MyWantedDropdownListItem key={item}>
                        {item}
                    </MyWantedDropdownListItem>
                ))}
            </MyWantedDropdownList>
            <Rhombus />
        </MyWantedDropdown>
    );
};

const MyWantedDropdown = styled.div`
  position: absolute;
  top: 130%;
  left: -27px;
  margin-top: 13px;
`;

const MyWantedDropdownList = styled.ul`
  padding-top: 14px;
  width: 194px;
  border-radius: 10px;
  background: #fff; 
  box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
  border: 1px solid #cdcdcd;
`;

const MyWantedDropdownListItem = styled.li`
  text-align: center;
  padding: 8px;
  height: 34px;
  color: #333;
  font-size: 14px;
  
  &:nth-child(2), &:nth-child(6) {
    &:after {
      content: '';
      display: block;
      margin: 18px 1px;
      height: 1px;
      background: #ececec;
    }
  }
  
  &:nth-child(3),
  &:nth-child(7) {
    margin-top: 18px;
  }
  
  &:last-child {
    height: 50px;
    line-height: 34px;
    margin-top: 9px;
    background: #f7f7f7;
    border-top: 1px solid #ececec;
    border-radius: 0 0 10px 10px;
  }
`;

const Rhombus = styled.div`
  position: absolute;
  right: 50%;
  bottom: 100%;
  height: 11px;
  overflow: hidden;
  margin-bottom: -1px;
  transform: translateX(-47px);
  
  &:after {
    content: "";
    margin-top: 4px;
    border: 1px solid #cdcdcd;
    background: #fff;
    height: 14px;
    width: 14px;
    display: block;
    border-top-right-radius: 30%;
    transform: rotate(-55deg) skewX(-20deg);
  }
`;

export default MyWanted;