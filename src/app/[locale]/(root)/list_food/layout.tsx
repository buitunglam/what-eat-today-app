"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GlobalStyles from "@mui/material/GlobalStyles";

import { AuthGuard } from "@/components/auth/auth-guard";
import { MainNav } from "@/components/dashboard/layout/main-nav";
import { SideNav } from "@/components/dashboard/layout/side-nav";
import { MainNavClient } from "@/components/dashboard/layout/main-nav-client";
import Footer from "@/components/client/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AuthGuard>
      <main className="overflow-hidden">
        <Container maxWidth="xl">{children}</Container>
      </main>
    </AuthGuard>
  );
}
