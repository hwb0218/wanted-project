import React from 'react';
import styled from 'styled-components';

const Notice = () => {
    return (
        <NoticeDropdown>
            <NoticeWrapper>
                <ul>ㅎㅎ</ul>
            </NoticeWrapper>
        </NoticeDropdown>
    );
};

const NoticeDropdown = styled.div`
  position: absolute;
  top: 130%;
  left: -27px;
  margin-top: 13px;
`;

const NoticeWrapper = styled.div`
  width: 395px;
  background: darkolivegreen;
`;

const NoticeListItem = styled.li`
  
`;

export default Notice;