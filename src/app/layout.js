"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { AppWrapper } from "@/context";

export default function RootLayout({children, session}) {
    return (
        <SessionProvider session={session}>
            <html lang="en">
              <body className="pintoe">
                <AppWrapper>
                  {children}
                </AppWrapper>
              </body>
            </html>
        </SessionProvider>
    );
}
