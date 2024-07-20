import TopBar from "../ui/dashboard/top-bar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TopBar />
      <main className="mt-5">
        <div className="container mx-auto">{children}</div>
      </main>
    </div>
  );
}
