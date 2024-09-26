"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { Bell as BellIcon } from "@phosphor-icons/react/dist/ssr/Bell";
import { List as ListIcon } from "@phosphor-icons/react/dist/ssr/List";
import { MagnifyingGlass as MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { Users as UsersIcon } from "@phosphor-icons/react/dist/ssr/Users";

import { usePopover } from "@/hooks/use-popover";

import { MobileNav } from "./mobile-nav";
import { UserPopover } from "./user-popover";
import {
  AppBar,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
const pages = ["Danh Sách Món Ăn", "Liên Hệ", "Tin Tức"];

export function MainNavClient() {
  const [openNav, setOpenNav] = React.useState<boolean>(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        {/* <Box
          component="header"
          sx={{
            borderBottom: "1px solid var(--mui-palette-divider)",
            backgroundColor: "var(--mui-palette-background-paper)",
            position: "sticky",
            top: 0,
            zIndex: "var(--mui-zIndex-appBar)",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center", minHeight: "64px", px: 2 }}
          >
            <Toolbar disableGutters>
              <img src="/assets/logo.png" className="w-[100px] h-[100px]" />

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none", gap: "20px" },
                }}
              >
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={handleCloseNavMenu}
                      className="mr-[10px]"
                    >
                      <Typography sx={{ textAlign: "center", color: "black" }}>
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box
                sx={{ flexGrow: 1, ml: 5, display: { xs: "none", md: "flex" } }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "#454649",
                      display: "block",
                      "&:hover": {
                        color: "#f97970",
                      },
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Stack>
        </Box> */}

        <Box
          position="static"
          className="bg-white !important"
          sx={{ borderBottom: "1px solid var(--mui-palette-divider)" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <img
                src="/assets/logo.png"
                className="w-[100px] h-[100px] md:flex hidden"
              />

              <Box
                sx={{
                  flex: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: { xs: "flex", md: "none" },
                }}
              >
                <Box />
                <img
                  src="/assets/logo.png"
                  className="w-[100px] h-[100px]  md:hidden flex self-center"
                />
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  {/* <MenuIcon /> */}
                  <img src="/assets/menu.png" className="w-[40px] h-[40px]" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: "#454649",
                          "&:hover": {
                            color: "#f97970",
                          },
                        }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "#454649",
                      display: "block",
                      "&:hover": {
                        color: "#f97970",
                      },
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </Box>
      </Container>
    </React.Fragment>
  );
}
