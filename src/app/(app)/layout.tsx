import { ApplicationLayout } from "./application-laylout";

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return <ApplicationLayout >{children}</ApplicationLayout>
}
