"use client";

import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HandymanIcon from "@mui/icons-material/Handyman";


const Register = () => {
  const [formData, setFormData] = useState({
    role:"customer",
    name: "",
    email: "",
    password: "",
  });

  const handleRoleSelect = (role: "customer" | "contractor") => {
    setFormData({... formData, role});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Registered User:", formData);
  };

  return (
    <Container maxWidth="sm">
          <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Register
        </Typography>

       
          
        <Box sx={{ display: "flex", justifyContent: "center", gap: 6, mb: 3 }}>
  {/* Customer section */}
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
    <img src="/profile.png" alt="Customer" width={100} height={100} />
    <Button
      variant={formData.role === "customer" ? "contained" : "outlined"}
      onClick={() => handleRoleSelect("customer")}
      color="primary"
      sx={{ width: 120 }}
    >
      Customer
    </Button>
  </Box>

  {/* Contractor section */}
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
    <img src="/mechanic.png" alt="Contractor" width={100} height={100} />
    <Button
      variant={formData.role === "contractor" ? "contained" : "outlined"}
      onClick={() => handleRoleSelect("contractor")}
      color="primary"
      sx={{ width: 120 }}
    >
      Contractor
    </Button>
  </Box>
</Box>


        
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
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
      </Box>
   
     
      
    </Container>
  );
};

export default Register;
