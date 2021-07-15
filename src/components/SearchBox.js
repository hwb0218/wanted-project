import React, {useEffect, useCallback, forwardRef} from 'react';
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import {FaChevronRight} from 'react-icons/fa';

const tagList = ['#핀테크', '#설립3년이하', '#자율복장', '#연봉상위2~5%', '#퇴사율5%이하'];

const SearchBox = ({isClickedSearchBtn, setClickedSearchBtn}) => {

    const elRef = useCallback(
        (node) => {
            if (node !== null) {
                node.focus();
            }
            return node;
        },
        []
    );
    const handleClick = useCallback(({target}) => {
        if (isClickedSearchBtn && target.localName !== "input") setClickedSearchBtn(false);
    }, [setClickedSearchBtn]);

    useEffect(() => {
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        }
    }, [handleClick]);

    return (
        <SearchBoxContainer>
            <SearchBoxOverlay>
                <SearchBoxWrapper>
                    <SearchBoxContent>
                        <Icon/>
                        <Input type="text" placeholder="#태그, 회사, 포지션 검색" ref={elRef}/>
                    </SearchBoxContent>
                    <TagContainer>
                        <span>추천태그로 검색해보세요</span>
                        <span className='tagSearch'>
                            기업태그 홈 이동하기
                            <FaChevronRight/>
                        </span>
                        <TagList>
                            {tagList.map((item) => (
                                <TagListItem key={item}>
                                    {item}
                                </TagListItem>
                            ))}
                        </TagList>
                    </TagContainer>
                </SearchBoxWrapper>
            </SearchBoxOverlay>
        </SearchBoxContainer>
    );
};

const SearchBoxContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.4);
  z-index: 101;
`;

const SearchBoxOverlay = styled.div`
  background: #fff;
  
  @media screen and (max-width: 767px) {
    height: 100%;
  }
`;

const SearchBoxWrapper = styled.div`
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  padding-top: 30px;
  position: relative;
  background-color: #fff;
  
  @media (min-width: 767px) and (max-width: 1199px) {
    width: 90%;
  }
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`;

const SearchBoxContent = styled.div`
  position: relative;
`;

const Icon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 20px;
  margin-right: 16px; 
  margin-left: 6px;
  color: #666;
  transform: translate(0, -50%);
`;

const Input = styled.input`
  height: 50px;
  width: 100%;
  padding: 0 36px 0 60px;
  border: 1px solid #f2f4f7;
  border-radius: 25px;
  font-size: 16px;
  background-color: #f2f4f7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
    
  &:focus {
    background: #fff;
    border: 1px solid #36f;
    outline: none;
  }
`;

const TagContainer = styled.div`
  padding-top: 50px;
  
  @media screen and (max-width: 767px) {
    padding-top: 40px;
  }
  
  & span {
    font-size: 14px;
    font-weight: 600;
  }  
  
  & .tagSearch {
    float: right;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #767676;
    cursor: pointer;
    
    & svg {
      margin-left: 4px;
      font-size: 11px;
    }
  }
`

const TagList = styled.ul`
  padding-top: 15px;
  padding-bottom: 50px;

`;

const TagListItem = styled.li`
  display: inline-block;
  margin: 5px 10px 0 0;
  height: 50px;
  padding: 0 26px;
  line-height: 50px;
  font-size: 15px;
  color: #333;
  border-radius: 25px;
  cursor: pointer;
   
    
  @media screen and (max-width: 767px) {
    margin: 10px 4px 0 0;
    font-size: 13px;
    padding: 0 12px;
    height: 34px;
    line-height: 34px;
    
    & + & {
    margin-left: 0;
    }
  }
  
  &:first-child {
    background: #f0f8f8;
  }
  
  &:nth-child(2) {
    background: #eeedf4;
  }
  
  &:nth-child(3) {
    background: #e8edf3;
  }
  
  &:nth-child(4) {
    background: #e9f4fb;
  }
   
  &:last-child {
    background: #effbf3;
  } 
`;

export default SearchBox;