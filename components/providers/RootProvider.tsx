"use client";

import { ThemeProvider } from "next-themes";

const RootProvider = ({ children }: React.ComponentProps<typeof ThemeProvider>) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default RootProvider;
