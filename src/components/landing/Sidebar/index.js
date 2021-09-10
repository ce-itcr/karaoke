import React from 'react';
import {
  SidebarContainer, 
  Icon, CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle} >Acerca de </SidebarLink>
          <SidebarLink to="discover" onClick={toggle} >Descubre</SidebarLink>
          <SidebarLink to="services" onClick={toggle} >Servicios</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Iniciar Sesión</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
