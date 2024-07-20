import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col items-center justify-center md:overflow-y-auto p-6 md:p-12 ">
      <div>{children}</div>
    </div>
  );
}
