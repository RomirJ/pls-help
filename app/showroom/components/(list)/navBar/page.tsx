'use client'

import { MrbAvatar, MrbCol, MrbNavbar, MrbTypography } from '@/designSystem'

export default function NavbarShow() {
  const pathname = window.location.pathname
  const urlLogo = 'https://i.imgur.com/xP6Wver.png'

  return (
    <>
      <MrbTypography variant="h2">Top Navbar</MrbTypography>

      <MrbNavbar>
        <MrbNavbar.Logo to="/showroom/components" urlLogo={urlLogo}>
          Ridley
        </MrbNavbar.Logo>
        <MrbNavbar.Link to="/showroom/components/avatar">Avatar</MrbNavbar.Link>
        <MrbNavbar.Link to="/showroom/components/button">Button</MrbNavbar.Link>
        <MrbNavbar.Dropdown
          content={
            <MrbNavbar.Link to="/showroom/components">
              Components
            </MrbNavbar.Link>
          }
        >
          <MrbNavbar.Link to="/showroom/components/navbar">
            Navbar
          </MrbNavbar.Link>
          <MrbNavbar.Link to="/showroom/components/card">
            Card Documentation
          </MrbNavbar.Link>
        </MrbNavbar.Dropdown>
        <MrbNavbar.Avatar to="/showroom/components/Form">
          <MrbAvatar>Form</MrbAvatar>
        </MrbNavbar.Avatar>
      </MrbNavbar>

      <MrbTypography variant="h2">Left Navbar</MrbTypography>

      <MrbCol xs="3">
        <MrbNavbar direction="vertical">
          <MrbNavbar.Logo to="/showroom/components" urlLogo={urlLogo}>
            Ridley
          </MrbNavbar.Logo>
          <MrbNavbar.Link to="__page.path__">Home</MrbNavbar.Link>
          <MrbNavbar.Link to={pathname}>Notifications</MrbNavbar.Link>
          <MrbNavbar.Link to="/profile">Profile</MrbNavbar.Link>
        </MrbNavbar>
      </MrbCol>
    </>
  )
}
