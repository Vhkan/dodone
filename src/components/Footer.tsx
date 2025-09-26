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
        fontFamily: 'inherit',
        fontSize: '16px',
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between", // This creates space between left and right
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          px: { xs: 2, sm: 4, md: 8 },
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
          gap: { xs: 2, md: 0 },
        }}
      >
        {/* Logo - Left Side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: { xs: 80, sm: 90, md: 100 },
            marginLeft: { xs: 0, md: -28 } // Adjust margin for larger screens
          }}
        >
          <Link
            href="/"
            underline="none"
            sx={{ 
              display: "block", 
              height: "100%",
              textDecoration: "none",
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
              }}
            />
          </Link>
        </Box>

        {/* Text - Right Side */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 4, md: 6 }}
          sx={{ 
            alignItems: { xs: "center", md: "center" },
            marginRight: { xs: 0, md: -20 }
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
              <Link 
                href="#" 
                underline="hover" 
                sx={{ 
                  color: "#2a5a80",
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                  "&:hover": {
                    color: "#204060",
                  }
                }}
              >
                About DoDone
              </Link>
              <Link 
                href="#" 
                underline="hover" 
                sx={{ 
                  color: "#2a5a80",
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                  "&:hover": {
                    color: "#204060",
                  }
                }}
              >
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
              <Link 
                href="#" 
                underline="hover" 
                sx={{ 
                  color: "#2a5a80",
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                  "&:hover": {
                    color: "#204060",
                  }
                }}
              >
                Questions & answers
              </Link>
              <Link 
                href="#" 
                underline="hover" 
                sx={{ 
                  color: "#2a5a80",
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                  "&:hover": {
                    color: "#204060",
                  }
                }}
              >
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