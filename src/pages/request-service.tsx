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
import Header from "../components/Header";

const RequestServicePage: React.FC = () => {
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
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Box sx={{ width: "100%", margin: 0, padding: 0 }}>
        <Header />
      </Box>

      <Container maxWidth="sm" sx={{ mt: 15 }}>
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
            gap: 1, // controls vertical spacing between fields
          }}
        >
          <TextField
            fullWidth
            margin="dense"
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{
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
                transform: "translate(14px, 12px) scale(1)", // Initial position of label
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#1976d2",
                fontWeight: "bold",
                transform: "translate(14px, -9px) scale(0.75)", // Move label up when focused
              },
              "& .MuiInputLabel-shrink": {
                transform: "translate(14px, -9px) scale(0.75)", // Move label up when value is filled
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
            }}
          />

          {/* Phone Input */}
          <TextField
            fullWidth
            margin="dense"
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            sx={{
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
            SelectProps={{
              native: true,
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "40px",
                padding: "0",
                "& select": {
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
            }}
          >
            <option value=""></option>
            <option value="repair">Repair</option>
            <option value="installation">Installation</option>
            <option value="maintenance">Maintenance</option>
          </TextField>

          
          {/* Service Selection */}
          <TextField
            select
            fullWidth
            margin="dense"
            label="Select Service Category"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            SelectProps={{
              native: true,
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                height: "40px",
                padding: "0",
                "& select": {
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
            }}
          >
            <option value=""></option>
            <option value="repair">Home Specialist</option>
            <option value="installation">Electronics Repair</option>
            <option value="maintenance">Closing Repair</option>
            <option value="maintenance">Auto Repair</option>
          </TextField>

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
                      padding: "0 8px", // horizontal padding only
                      alignItems: "center", // center content vertically
                    },
                    "& input": {
                      padding: "0 !important", // remove default padding
                      height: "100%",
                      textAlign: "center",
                      fontSize: "1rem",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "1rem",
                      top: "-4px", // optional: adjust label positioning
                    },
                    "& .MuiInputAdornment-root": {
                      margin: "0",
                      position: "absolute",
                      right: "1em",
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>

          {/* Service Details */}
          <TextField
            fullWidth
            margin="dense"
            label="Service Details"
            name="details"
            multiline
            rows={3}
            value={formData.details}
            onChange={handleChange}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                padding: "4px",
                height: "90px",
              },
              "& .MuiInputLabel-root": { fontSize: "1rem" },
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "linear-gradient(to bottom, #00c6ff, #0072ff)",
              color: "white",
              padding: "10px 60px",
              borderRadius: "2em",
              textTransform: "none",
              marginTop: "0.5em",
              fontWeight: "bold",
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
