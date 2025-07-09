import { AppBar, Box, Toolbar, Typography, Stack, Link } from "@mui/material";
const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(to bottom, #f0faff 0%, #c2e4ff 20%, #66b2ff 45%, #1a75ff 75%, #003d73 100%)",
        color: "#002f5f",
        mt: 4,
        paddingY: 3,
        boxShadow: "0px -3px 12px rgba(0, 0, 150, 0.07)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          px: { xs: 2, md: 8 },
        }}
      >
        {/* Logo / Title */}
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", mb: { xs: 2, md: 0 }, paddingTop: "0.5em" }}
        >
          <Link href="#" underline="none" color="inherit">
            DoDone
          </Link>
        </Typography>
        {/* Logo with home page link
                <Box sx={{ height: 85, marginLeft: "-1.5em" }}>
                <Link href="#" underline="none" color="inherit">
            <img
              src="/doDoneLogo2.png"
              alt="doDone Logo"
              style={{ height: "100%", width: "auto", cursor: "pointer" }}
            />
          </Link>
        </Box> */}
        {/* Footer Categories */}
        <Stack
          direction="row"
          spacing={6}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 1, color: "#336699" }}
            >
              Who we are
            </Typography>
            <Stack spacing={0.5}>
              <Link href="#" underline="hover" sx={{ color: "#cce6ff" }}>
                About DoDone
              </Link>
              <Link href="#" underline="hover" sx={{ color: "#cce6ff" }}>
                Contact us
              </Link>
            </Stack>
          </Box>

          {/* How it works */}
          {/* <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 1, color: "#336699" }}
            >
              How it works
            </Typography>
            <Stack spacing={0.5}>
              <Link href="#" underline="hover" sx={{ color: "#cce6ff" }}>
                How DoDone works
              </Link>
              <Link href="#" underline="hover" sx={{ color: "#cce6ff" }}>
                Top of the best providers
              </Link>
            </Stack>
          </Box> */}

          {/* Help */}
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 1, color: "#336699" }}
            >
              Help
            </Typography>
            <Stack spacing={0.5}>
              <Link href="#" underline="hover" sx={{ color: "#cce6ff" }}>
                Questions & answers
              </Link>
              <Link href="#" underline="hover" sx={{ color: "#cce6ff" }}>
                Confidentiality rules
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
