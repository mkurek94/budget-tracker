import Logo from "@/components/Logo";
import React, { PropsWithChildren } from "react";

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
        <Logo/>
      <div className="mt-12">{children}</div>
    </div>
  );
}

export default AuthLayout;
