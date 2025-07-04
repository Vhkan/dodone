import { AppBar, Box, Toolbar, Typography, Stack, Link } from "@mui/material";
const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(to bottom, #b3d9ff, #80bfff)",
        color: "#003366",
        mt: 4,
        boxShadow: "0px -2px 8px rgba(0, 0, 0, 0.05)",
        paddingY: 4,
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
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", mb: { xs: 2, md: 0 } }}
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
          {/* About Us */}
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 1, color: "#336699" }}
            >
              About Us
            </Typography>
            <Stack spacing={0.5}>
              <Link href="#" underline="hover" color="#cce6ff">
                About Project DoDane
              </Link>
              <Link href="#" underline="hover" color="#cce6ff">
                Contacts
              </Link>
              <Link href="#" underline="hover" color="#cce6ff">
                Where you can find us
              </Link>
            </Stack>
          </Box>
          {/* How does it work */}
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 1, color: "#336699" }}
            >
              How does it work
            </Typography>
            <Stack spacing={0.5}>
              <Link href="#" underline="hover" color="#cce6ff">
                How to order the service
              </Link>
              <Link href="#" underline="hover" color="#cce6ff">
                Top of the best providers
              </Link>
            </Stack>
          </Box>
          {/* Help */}
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 1, color: "#336699" }}
            >
              Help
            </Typography>
            <Stack spacing={0.5}>
              <Link href="#" underline="hover" color="#cce6ff">
                Questions and answers
              </Link>
              <Link href="#" underline="hover" color="#cce6ff">
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
