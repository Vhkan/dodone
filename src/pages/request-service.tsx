import React, { useState, FormEvent } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";
import Header from "../components/Header";

const RequestServicePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Box sx={{ width: "100%", margin: 0, padding: 0 }}>
        <Header /> {/* Header placed at the top of the page */}
      </Box>

      <Container maxWidth="sm" sx={{ mt: 15 }}>
        <Typography variant="h4" gutterBottom>
          Request a Service
        </Typography>

        {submitted && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Your request has been submitted!
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          {/* Name Input */}
          <TextField
            fullWidth
            margin="normal"
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px", // Rounded corners for input
              },
              "& .MuiInputLabel-root": {
                fontSize: "1rem", // Adjust label size
              },
              "& .MuiInputBase-root": {
                padding: "3px", // Add padding inside the input field
              },
            }}
          />

          {/* Email Input */}
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
              },
              "& .MuiInputLabel-root": {
                fontSize: "1rem",
              },
              "& .MuiInputBase-root": {
                padding: "3px",
              },
            }}
          />

          {/* Phone Input */}
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            name="phone"
            type="phone"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
              },
              "& .MuiInputLabel-root": {
                fontSize: "1rem",
              },
              "& .MuiInputBase-root": {
                padding: "3px",
              },
            }}
          />

          {/* Service Details Input */}
          <TextField
            fullWidth
            margin="normal"
            label="Service Details"
            name="details"
            multiline
            rows={4}
            value={formData.details}
            onChange={handleChange}
            required
            sx={{
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
              },
              "& .MuiInputLabel-root": {
                fontSize: "1rem",
              },
              "& .MuiInputBase-root": {
                padding: "10px",
              },
            }}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to bottom, #00c6ff, #0072ff)", // Top to bottom gradient
              color: "white",
              padding: "10px 19px",
              borderRadius: "2em",
              textTransform: "none",
              marginTop: "1em",
              fontWeight: "bold",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition:
                "background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
              "&:hover": {
                background: "linear-gradient(to bottom, #3399ff, #0072ff)", // Subtle hover gradient
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                // transform: "scale(1.02)",
              },
              "&:focus": {
                outline: "none",
                boxShadow: "0px 0px 8px rgba(0, 191, 255, 0.5)",
              },
            }}
          >
            Submit Request
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RequestServicePage;
