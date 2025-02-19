import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Header from '../components/layout/header';
import { StyledEngineProvider } from '@mui/material/styles';
import { theme } from '../theme';
import { ThemeProvider } from '@mui/material';
import Footer from '@/components/layout/footer';

export const Route = createRootRoute({
  component: () => (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
      <TanStackRouterDevtools />
    </>
  )
});
