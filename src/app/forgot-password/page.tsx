"use client";

import React, { useState, FormEvent } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!email) {
      setError("Please enter your email");
      return;
    }
    console.log("Forgot Password Request for:", email);
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <Container
        maxWidth="sm"
        sx={{
          mt: 14,
          mb: 4,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Forgot Password
        </Typography>

        {submitted && (
          <Alert severity="success" sx={{ mb: 2 }}>
            If this email exists in our system, a password reset link has been
            sent.
          </Alert>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "40px",
                "& input": { padding: "8px 14px" },
              },
            }}
          />

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 0 }}>
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
                "&:focus": {
                  outline: "none",
                  boxShadow: "0px 0px 8px rgba(0, 191, 255, 0.5)",
                },
              }}
            >
              Send Reset Link
            </Button>
          </Box>

          <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
            Remember your password?{" "}
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
              Sign In
            </Button>
          </Typography>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default ForgotPassword;
