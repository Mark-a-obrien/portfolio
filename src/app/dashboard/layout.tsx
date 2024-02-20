export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log(children);
  return <section>{children}</section>
}

