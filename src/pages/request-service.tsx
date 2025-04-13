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
          {/* Name Input */}
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
                padding: "2px",
                height: "40px", // set a fixed height for input
              },
              "& .MuiInputLabel-root": { fontSize: "1rem" },
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
                padding: "2px",
                height: "40px", // set a fixed height for input
              },
              "& .MuiInputLabel-root": { fontSize: "1rem" },
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
                padding: "2px",
                height: "40px", // set a fixed height for input
              },
              "& .MuiInputLabel-root": { fontSize: "1rem" },
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
                padding: "2px",
                height: "40px", // set a fixed height for input
              },
              "& .MuiInputLabel-root": { fontSize: "1rem" },
            }}
          >
            <option value=""></option>
            <option value="repair">Repair</option>
            <option value="installation">Installation</option>
            <option value="maintenance">Maintenance</option>
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
            padding: "2px",
            height: "40px",
          },
          "& .MuiInputLabel-root": { fontSize: "1rem" },
          "& input": {
            paddingTop: "0px",
            paddingBottom: "0px",
            height: "100%",
            textAlign: "center",
          },
          "& .MuiInputAdornment-root": {
            marginLeft: "0px",
            position: "absolute",
            right: "1em"
          }
        }
      }
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
            rows={3} // reduced from 4 to 3
            value={formData.details}
            onChange={handleChange}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                padding: "4px",
                height: "90px", // set a fixed height for multiline input
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
              padding: "6px 16px", // reduced vertical padding
              borderRadius: "2em",
              textTransform: "none",
              marginTop: "0.5em", // reduced margin
              fontWeight: "bold",
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
