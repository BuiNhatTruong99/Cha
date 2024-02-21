import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

export default function RootLayout({ children }) {
  return (
    <MainLayout>
      <AuthLayout>{children}</AuthLayout>
    </MainLayout>
  );
}
