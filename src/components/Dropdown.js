import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';
import { menuList, otherThemeList } from './dropdownMenu';

const Dropdown = ({ isHovering, setIsHovering }) => {
    const dropdownEl = useRef();

    // const handleClickOutside = useCallback(({ target }) => {
    //     if (isHovering && !dropdownEl.current.contains(target)) setIsHovering(false);
    // }, [isHovering, setIsHovering]);

    const test = (e) => {
        console.log(e.target.className);
    }

    const handleClick = useCallback(() => {
        setIsHovering(false);
    }, [setIsHovering]);

    useEffect(() => {
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        }
    }, [handleClick]);

    return (
        <>
            <DropdownContainer className={isHovering && 'show'}>
                <DropdownContent className='menu' ref={dropdownEl} onClick={test}>
                    <DropdownMenuWrapper>
                    {menuList.map((list) => (
                        <DropdownUl key={list.theme}>
                            <DropdownTheme>
                                {list.theme}
                                <Arrow />
                            </DropdownTheme>
                                {list.menuList.map((el) =>
                                    <DropdownLi key={el}>
                                        {el}
                                    </DropdownLi>
                                )}
                            <DropdownLi className='moreView'>더보기<Arrow /></DropdownLi>
                        </DropdownUl>
                    ))}
                    <DropdownUl>
                        {otherThemeList.map((list) => (
                            <DropdownTheme key={list}>
                                {list}
                                <Arrow />
                            </DropdownTheme>
                        ))}
                    </DropdownUl>
                    </DropdownMenuWrapper>
                </DropdownContent>
            </DropdownContainer>
        </>
    );
};

const DropdownContainer = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0,0,0,.4);
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: .5s;
  
    &.show {
    opacity: 1;  
    height: auto;
    
    & .menu {
      height: 70%;
    }
  }
  
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const DropdownContent = styled.div`
  height: 0;
  max-height: 625px;
  background: #fff;
  transition: .5s;
`;

const DropdownMenuWrapper = styled.div`
  margin: 0 auto;
  max-width: 1060px;
  width: 90%;
`;

const DropdownUl = styled.ul`
  float: left;
  width: 16.6666%;
  padding: 40px 20px 0 0;
`;

const DropdownTheme = styled.div`
  position: relative;
  font-size: 17px;
  color: #333;
  font-weight: 600;
  line-height: 20px;
  vertical-align: top;
  padding-right: 20px;
  padding-bottom: 15px;
`

const DropdownLi = styled.li`
  font-size: 13px;
  color: #999;
  line-height: 15px;
  white-space: nowrap;
  overflow: hidden;
  padding: 5px 20px 5px 0;
  
  &.moreView {
    position: relative;
  }
`;

const Arrow = styled(FaChevronRight)`
  position: absolute;
  top: 5.5px;
  right: 0;
  font-size: 11px;
  color: #999;
`;

export default Dropdown;