import React from "react";
import BasePadding from "../../components/BasePadding/BasePadding";
import { AppProvider, SignInPage } from "@toolpad/core";
import { createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./brandingTheme";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { BreadcrumbWrapper } from "./styled";

function SignIn() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Homepage
    </Link>,
    <Typography key="2" sx={{ color: "text.primary" }}>
      Login
    </Typography>,
  ];

  const providers = [
    { id: "facebook", name: "Facebook" },
    { id: "google", name: "Google" },
    { id: "credentials", name: "Email and Password" },
  ];

  const signIn = async (provider) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Sign in with ${provider.id}`);
        resolve();
      }, 500);
    });
    return promise;
  };
  const brandingDesignTokens = getDesignTokens("light");
  // preview-start
  const THEME = createTheme({
    ...brandingDesignTokens,
    palette: {
      ...brandingDesignTokens.palette,
      mode: "light",
    },
  });

  return (
    <Box>
      <BreadcrumbWrapper>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </BreadcrumbWrapper>
      <BasePadding paddingLeftRightPercent={20}>
        <Box
          sx={{
            borderRadius: "16px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <AppProvider theme={THEME}>
            <SignInPage signIn={signIn} providers={providers} />
          </AppProvider>
        </Box>
      </BasePadding>
    </Box>
  );
}

export default SignIn;
