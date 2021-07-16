import React, { useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { noticeList } from "../dropdownMenu";
import { Diamond } from "../styles/GlobalStyles";

const Notice = ({ isClickedNotice, setClickedNotice }) => {
    const elRef = useRef();

    const handleClick = useCallback(({ target }) => {
        if (isClickedNotice && elRef.current && !elRef.current.contains(target)) setClickedNotice(false);
    }, [isClickedNotice, setClickedNotice]);

    useEffect(() => {
        window.addEventListener('click', handleClick);
        return () => {
          window.removeEventListener('click', handleClick);
        };
    }, [handleClick]);

    return (
        <NoticeDropdown ref={elRef}>
            <NoticeWrapper>
                <ul>
                    {noticeList.map((item) => (
                        <NoticeListItem key={item.id}>
                            <p className='theme'>{item.theme}</p>
                            <p className='text'>{item.text}</p>
                            <p className='date'>{item.date}</p>
                        </NoticeListItem>
                    ))}
                </ul>
            </NoticeWrapper>
            <Diamond notice />
        </NoticeDropdown>
    );
};

const NoticeDropdown = styled.div`
  position: absolute;
  top: 130%;
  left: -173px;
  margin-top: 13px;
  
  @media screen and (max-width: 767px) {
    position: fixed;
    top: 57px;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 0;
  }
`;

const NoticeWrapper = styled.div`
  width: 395px;
  height: 100%;
  max-height: 600px;
  overflow: auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
  border: 1px solid #cdcdcd;
  
  @media screen and (max-width: 767px) {
    width: 100%;
    max-height: none;  
    box-shadow: none;
    border-radius: 0;
  }
`;

const NoticeListItem = styled.li`
  margin: 8px;
  padding: 13px 17px 11px;
  
  @media screen and (max-height: 767px) {
    margin: 0 2px 0 2px;
    padding: 19px 14px 20px 18px;
  }
  
  & + & {
    border-top: 1px solid #ececec;
  }
  
  & .theme {
    font-size: 12px;
    color: #36f;
    margin-bottom: 6px;
  }
  
  & .text {
    font-size: 14px;
    color: #111;
    margin-bottom: 7px;
    line-height: normal;
  }
  
  & .date {
    font-size: 12px;
    color: #767676;
    margin-top: 4px;
  }
  
  @media screen and (max-width: 767px) {
    //height: 100%;
  }
`;

export default Notice;