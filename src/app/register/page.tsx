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

const Register = () => {
  const [formData, setFormData] = useState({
    role: "customer",
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
  });

  const handleRoleSelect = (role: "customer" | "contractor") => {
    setFormData({ ...formData, role });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Registered User:", formData);
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
          overflow: "hidden", // Prevent bottom scroll
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h5"
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#204060" }}
          >
            Not a user yet? Register here!
          </Typography>

          {/* Role selection */}
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 6, mb: 3 }}
          >
            {/* Customer */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <img src="/man (2).png" alt="Customer" width={100} height={100} />
              <Button
                variant={
                  formData.role === "customer" ? "contained" : "outlined"
                }
                onClick={() => handleRoleSelect("customer")}
                sx={{
                  width: 120,
                  borderRadius: "2em",
                  textTransform: "none",
                  background:
                    formData.role === "customer"
                      ? "linear-gradient(to bottom, #00c6ff, #0072ff)"
                      : "none",
                  color: formData.role === "customer" ? "white" : "inherit",
                  "&:hover": {
                    background:
                      formData.role === "customer"
                        ? "linear-gradient(to bottom, #3399ff, #0072ff)"
                        : "rgba(0,0,0,0.04)",
                  },
                }}
              >
                Customer
              </Button>
            </Box>

            {/* Contractor */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <img
                src="/mechanic (1).png"
                alt="Contractor"
                width={100}
                height={100}
              />
              <Button
                variant={
                  formData.role === "contractor" ? "contained" : "outlined"
                }
                onClick={() => handleRoleSelect("contractor")}
                sx={{
                  width: 120,
                  borderRadius: "2em",
                  textTransform: "none",
                  background:
                    formData.role === "contractor"
                      ? "linear-gradient(to bottom, #00c6ff, #0072ff)"
                      : "none",
                  color: formData.role === "contractor" ? "white" : "inherit",
                  "&:hover": {
                    background:
                      formData.role === "contractor"
                        ? "linear-gradient(to bottom, #3399ff, #0072ff)"
                        : "rgba(0,0,0,0.04)",
                  },
                }}
              >
                Contractor
              </Button>
            </Box>
          </Box>

          {/* Registration form */}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              required
              sx={inputSx}
            />
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
              label="Confirm Email"
              name="confirmEmail"
              type="email"
              variant="outlined"
              margin="normal"
              value={formData.confirmEmail}
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
                Register
              </Button>
            </Box>
          </form>

          {/* Already registered link */}
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography variant="body1" color="text.secondary">
              Already registered?{" "}
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  textDecoration: "none", // no underline by default
                  "&:hover": {
                    textDecoration: "underline", // underline on hover
                  },
                }}
                href="/signin"
              >
                Sign in
              </Button>
            </Typography>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Register;
