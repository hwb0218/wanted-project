import React, {useState} from 'react';
import styled from 'styled-components';

const menuList = ['홈', '탐색', '커리어 성장', '직군별 연봉', '이력서', '매치업', '프리랜서']

let id = 0
const newMenuList = menuList.map((list) => {
    let obj = {}
    obj.id = id++;
    obj.text = list;
    return obj
})

const NavbarMenu = ({ setIsHovering, setClickedProfile, setClickedNotice }) => {
    const [active, setActive] = useState(null);

    const handleClick = (id) => {
        setActive(id);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
        setClickedProfile(false);
        setClickedNotice(false);
    };

    return (
        <>
            {newMenuList.map(({id, text}) => (
                <MenuList
                    key={id}
                    className={active === id && 'selectedNav'}
                    onClick={() => handleClick(id)}
                    onMouseEnter={id === 1 ? handleMouseEnter : null}
                    isMoreVisible={id <= 2}
                >
                {text}
                </MenuList>
            ))}
        </>
    );
};

const MenuList = styled.li`
  display: inline-block;
  padding: 15px;
  line-height: 20px;
  color: #333;
  cursor: pointer;  
}
  &.selectedNav {
    box-shadow: inset 0 -2px #258bf7;
  }
  
  &:hover {
    @media screen and (min-width: 911px) {
      box-shadow: inset 0 -2px #eee; 
    }
  }
  
  
  &:first-child {
    display: none;
  }
  
  @media screen and (max-width: 911px) {
    padding: 15px 0;
  }
  
  @media screen and (max-width: 767px) {
    display: ${({ isMoreVisible }) => (!isMoreVisible && 'none')};
    padding: 14px 13px 19px;
     
    &:first-child {
      display: inline-block;
      padding: 14px 13px 19px 20px;
    }
  }
`;

export default NavbarMenu;