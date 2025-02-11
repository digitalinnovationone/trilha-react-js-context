import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyles";
import { Outlet, useSearchParams } from "react-router";
import { Layout, PageContent } from "./AppStyles";
import { redTheme } from "./themes/red";
import { purpleTheme } from "./themes/purple";
import { whiteTheme } from "./themes/white";

function App() {
  const [searchParams] = useSearchParams();
  const theme = searchParams.get("theme") || "red";

  const getTheme = (theme: string) => {
    switch (theme) {
      case "red":
        return redTheme;
      case "purple":
        return purpleTheme;
      case "white":
        return whiteTheme;
      default:
        return redTheme;
    }
  };

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyle />
      <Layout>
        <Navbar />
        <PageContent>
          <Outlet />
        </PageContent>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

