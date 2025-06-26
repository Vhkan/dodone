import React from "react";
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

const BecomeSpecialistPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
    details: "",
    selectedDate: null as Date | null,
  });

  const [submitted, setSubmitted] = React.useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Become a Specialist
        </Typography>

        {submitted && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Your request has been submitted!
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
            sx={inputSx}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            sx={inputSx}
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            sx={inputSx}
          />
          <TextField
            fullWidth
            label="Expertise"
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            margin="normal"
            sx={inputSx}
          />
          <TextField
            fullWidth
            label="Details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
            sx={{
              ...inputSx,
              "& .MuiOutlinedInput-root": {
                ...inputSx["& .MuiOutlinedInput-root"],
                height: "auto",
                padding: 0, // reset outer padding
                "& textarea": {
                  padding: "12px 14px", // this controls the inner padding of the multiline area
                },
              },
            }}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Available Date"
              value={formData.selectedDate}
              onChange={handleDateChange}
              slotProps={{
                textField: {
                  fullWidth: true,
                  margin: "normal",
                  sx: {
                    ...inputSx,
                    "& .MuiOutlinedInput-root": {
                      ...inputSx["& .MuiOutlinedInput-root"],
                      padding: "0 8px",
                      alignItems: "center",
                    },
                    "& input": {
                      padding: "0 !important",
                      height: "100%",
                      textAlign: "center",
                      fontSize: "1rem",
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>

          {/* Submit Button */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
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
              Submit Request
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default BecomeSpecialistPage;
