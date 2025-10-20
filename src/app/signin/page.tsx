"use client";

import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Link,
} from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    height: "40px",
    padding: "0",
    "& input": {
      padding: "8px 14px",
    },
  },
  "& .MuiInputLabel-root": {
    fontSize: "1rem",
    transform: "translate(14px, 12px) scale(1)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#1976d2",
    fontWeight: "bold",
    transform: "translate(14px, -9px) scale(0.75)",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(14px, -9px) scale(0.75)",
  },
};

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signing in:", formData);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 14,
          mb: 4,
          overflow: "hidden",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h5"
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#204060" }}
          >
            Welcome back! Sign in to your account
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              required
              sx={inputSx}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              required
              sx={inputSx}
            />

            <Box sx={{ textAlign: "right", mt: 1 }}>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#0072ff", fontSize: "0.9rem" }}
              >
                Forgot password?
              </Link>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "linear-gradient(to bottom, #00c6ff, #0072ff)",
                  color: "white",
                  padding: "10px 60px",
                  borderRadius: "2em",
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(to bottom, #3399ff, #0072ff)",
                    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                Sign in
              </Button>
            </Box>
          </form>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography variant="body1" color="text.secondary">
              Not a user yet?{" "}
              <Link
                href="/register"
                underline="hover"
                sx={{ color: "#0072ff", fontWeight: 500 }}
              >
                Register here
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default SignIn;
