import { AppBar, Box, Toolbar, Typography, Stack, Link } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(to right, #FFFFFF 0%, #f9f9f9 20%, #f0f0f0 80%, #f0f0f0 100%)",
        boxShadow: "0px 8px 12px rgba(0,0,0,0.08)",
        paddingY: 2,
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
        <Box
          sx={{
            height: { xs: 60, sm: 70, md: 85 },
            marginLeft: { xs: 0, sm: -7, md: -8 },
            flexShrink: 0,
          }}
        >
          <Link
            href="/"
            underline="none"
            sx={{ display: "block", height: "100%" }}
          >
            <img
              src="/doDoneLogo2.png"
              alt="doDone Logo"
              style={{ height: "100%", width: "auto", cursor: "pointer" }}
            />
          </Link>
        </Box>

        {/* Footer Categories */}
        <Stack
          direction="row"
          spacing={6}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 1, color: "#204060" }}
            >
              Who we are
            </Typography>
            <Stack spacing={0.5}>
              <Link href="#" underline="hover" sx={{ color: "#2a5a80" }}>
                About DoDone
              </Link>
              <Link href="#" underline="hover" sx={{ color: "#2a5a80" }}>
                Contact us
              </Link>
            </Stack>
          </Box>

          {/* How it works (commented out) */}
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

          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 1, color: "#204060" }}
            >
              Help
            </Typography>
            <Stack spacing={0.5}>
              <Link href="#" underline="hover" sx={{ color: "#2a5a80" }}>
                Questions & answers
              </Link>
              <Link href="#" underline="hover" sx={{ color: "#2a5a80" }}>
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
