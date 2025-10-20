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
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RequestService: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
    selectedDate: null as Date | null,
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

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({
      ...prev,
      selectedDate: date,
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
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden", // prevent horizontal scroll
        overflowY: "auto",   // allow vertical scroll if content is taller
      }}
    >
      <Header />

      <Container
        maxWidth="sm"
        sx={{
          mt: 14, // reduce large top margin to avoid overflow
          mb: 4,
          flex: 1,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Create a Service Request
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
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* Name Input */}
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "40px",
                "& input": { padding: "8px 14px" },
              },
            }}
          />

          {/* Email Input */}
          <TextField
            fullWidth
            margin="dense"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "40px",
                "& input": { padding: "8px 14px" },
              },
            }}
          />

          {/* Phone Input */}
          <TextField
            fullWidth
            margin="dense"
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "40px",
                "& input": { padding: "8px 14px" },
              },
            }}
          />

          {/* Service Selection */}
          <TextField
            select
            fullWidth
            margin="dense"
            label="Select Service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            SelectProps={{ native: true }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "40px",
                "& select": { padding: "8px 14px" },
              },
            }}
          >
            <option value=""></option>
            <option value="repair">Repair</option>
            <option value="installation">Installation</option>
            <option value="maintenance">Maintenance</option>
          </TextField>

          {/* Date Picker */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Select Date"
              value={formData.selectedDate}
              onChange={handleDateChange}
              slotProps={{
                textField: {
                  fullWidth: true,
                  margin: "dense",
                  required: true,
                  sx: {
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "30px",
                      height: "40px",
                      alignItems: "center",
                    },
                    "& input": { padding: 0, textAlign: "center" },
                  },
                },
              }}
            />
          </LocalizationProvider>

          {/* Details */}
          <TextField
            fullWidth
            margin="dense"
            label="Service Details"
            name="details"
            multiline
            rows={4}
            value={formData.details}
            onChange={handleChange}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                "& textarea": { padding: "12px 14px" },
              },
            }}
          />

          {/* Submit */}
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
              mt: 2,
              "&:hover": {
                background: "linear-gradient(to bottom, #3399ff, #0072ff)",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            Submit Request
          </Button>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default RequestService;
