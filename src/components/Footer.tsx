import { AppBar, Box, Toolbar, Typography, Stack, Link } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#FFFFFF",
        boxShadow: "0px 8px 12px rgba(0,0,0,0.08)",
        paddingY: 2,
        marginTop: "auto",
        position: "relative",
        bottom: 0,
        width: "100%",
        fontFamily: "inherit",
        fontSize: "16px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: 0,
          margin: 0,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Logo - fully left */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: { xs: 80, sm: 90, md: 100 },
            margin: 0,
            padding: 0,
          }}
        >
          <Link
            href="/"
            underline="none"
            sx={{
              display: "block",
              height: "100%",
              textDecoration: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <img
              src="/logo9.png"
              alt="doDone Logo"
              style={{
                height: "100%",
                width: "auto",
                cursor: "pointer",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Link>
        </Box>

        {/* Text - moved left */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 4, md: 6 }}
          sx={{
            alignItems: { xs: "center", md: "flex-start" },
            ml: { xs: 0, md: 0}, // set left margin to 0 to move closer to logo
            mr: { xs: 0, md: 0 },
          }}
        >
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                mb: 1,
                color: "#204060",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              Who we are
            </Typography>
            <Stack spacing={0.5} sx={{ alignItems: { xs: "center", md: "flex-start" } }}>
              <Link href="#" underline="hover" sx={{ color: "#2a5a80", "&:hover": { color: "#204060" } }}>
                About DoDone
              </Link>
              <Link href="#" underline="hover" sx={{ color: "#2a5a80", "&:hover": { color: "#204060" } }}>
                Contact us
              </Link>
            </Stack>
          </Box>

          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                mb: 1,
                color: "#204060",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              Help
            </Typography>
            <Stack spacing={0.5} sx={{ alignItems: { xs: "center", md: "flex-start" } }}>
              <Link href="#" underline="hover" sx={{ color: "#2a5a80", "&:hover": { color: "#204060" } }}>
                Questions & answers
              </Link>
              <Link href="#" underline="hover" sx={{ color: "#2a5a80", "&:hover": { color: "#204060" } }}>
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
