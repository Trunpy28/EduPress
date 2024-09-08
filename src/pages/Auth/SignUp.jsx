import { Box, Breadcrumbs, Grid2, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import { BreadcrumbWrapper } from "./styled";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BasePadding from "../../components/BasePadding/BasePadding";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function SignUp() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Homepage
    </Link>,
    <Typography key="2" sx={{ color: "text.primary" }}>
      SignUp
    </Typography>,
  ];

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{backgroundColor: 'white', paddingBottom: '50px'}}>
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
            padding: "50px 300px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography variant="h3" sx={{color: "black"}}>
            Register
          </Typography>
          <form>
            <Grid2 container spacing={2} direction="column">
              <Grid2 item>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                />
              </Grid2>
              <Grid2 item>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  variant="outlined"
                />
              </Grid2>
              <Grid2 item>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid2>
              <Grid2 item>
                <TextField
                  required
                  fullWidth
                  label="Confirm Password"
                  variant="outlined"
                  type={showConfirmPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid2>
              <Grid2 item>
                <Button
                  fullWidth
                  variant="contained"
                  color="warning"
                  size="large"
                  style={{ backgroundColor: "#FF6D00" }}
                >
                  Register
                </Button>
              </Grid2>
            </Grid2>
          </form>
        </Box>
      </BasePadding>
    </Box>
  );
}

export default SignUp;
