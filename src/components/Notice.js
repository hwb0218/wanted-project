import React from 'react';
import styled, {css} from 'styled-components';
import { noticeList } from "./dropdownMenu";
import { Diamond } from "../styles/GlobalStyles";

const Notice = () => {
    return (
        <NoticeDropdown>
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
`;

const NoticeListItem = styled.li`
  margin: 8px;
  padding: 13px 17px 11px;
  
  & .theme {
    font-size: 12px;
    color: #36f;
    margin-bottom: 6px;
  }
  
  & .text {
    font-size: 14px;
    color: #111;
    margin-bottom: 7px;
  }
  
  & .date {
    font-size: 12px;
    color: #767676;
    margin-top: 4px;
  }
`;

export default Notice;