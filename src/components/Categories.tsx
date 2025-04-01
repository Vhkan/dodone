"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import BuildIcon from "@mui/icons-material/Build";
import HandymanIcon from "@mui/icons-material/Handyman";
import ConstructionIcon from "@mui/icons-material/Construction";
import WeekendIcon from "@mui/icons-material/Weekend";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SpaIcon from "@mui/icons-material/Spa";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

const categories = [
  {
    name: "Home Specialist",
    icon: <HomeRepairServiceIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
    services: ["Plumber", "Electrician", "Carpenter", "Man for an Hour"],
  },
  {
    name: "Appliance Technician",
    icon: <LaptopMacIcon sx={{ fontSize: 60, color: "#3f51b5" }} />,
    services: [
      "Major Appliance Repair",
      "Small Appliance Repair",
      "Computer Help",
      "Digital Appliance Repair",
      "Mobile Phone Repair",
    ],
  },
  {
    name: "Finishing Work",
    icon: <BuildIcon sx={{ fontSize: 60, color: "#8bc34a" }} />,
    services: [
      "Home Renovation",
      "Tile Laying",
      "Plastering Work",
      "Insulation of Premises",
      "Heating Installation",
    ],
  },
  {
    name: "Construction Work",
    icon: <ConstructionIcon sx={{ fontSize: 60, color: "#f44336" }} />,
    services: [
      "Handyman",
      "Welding Work",
      "Turning Work",
      "Carpenter",
      "Bricklaying",
    ],
  },
  {
    name: "Furniture Services",
    icon: <WeekendIcon sx={{ fontSize: 60, color: "#795548" }} />,
    services: [
      "Furniture Manufacturing",
      "Furniture Repair",
      "Furniture Assembly",
      "Furniture Restoration",
      "Furniture Reupholstering",
    ],
  },
  {
    name: "Cleaning Services",
    icon: <CleaningServicesIcon sx={{ fontSize: 60, color: "#009688" }} />,
    services: [
      "Home Cleaning",
      "General Cleaning",
      "Renovation Cleaning",
      "Dry Cleaning",
    ],
  },
  {
    name: "Auto Repair",
    icon: <DirectionsCarIcon sx={{ fontSize: 60, color: "#2196f3" }} />,
    services: [
      "Roadside Assistance",
      "Maintenance & Diagnostics",
      "Auto Electrics",
      "Bodywork",
      "Engine",
    ],
  },
  {
    name: "Transport & Warehousing",
    icon: <LocalShippingIcon sx={{ fontSize: 60, color: "#607d8b" }} />,
    services: [
      "Freight Transportation",
      "Loader Services",
      "Construction Waste Removal",
      "Furniture & Equipment Transportation",
      "Home or Office Moving",
    ],
  },
  {
    name: "Beauty & Health Services",
    icon: <SpaIcon sx={{ fontSize: 60, color: "#e91e63" }} />,
    services: [
      "Massage",
      "Nail Care",
      "Cosmetology",
      "Eyelash Care",
      "Eyebrow Care",
    ],
  },
];

const CategoriesList = () => {
  return (
    <Box sx={{ width: "100%", py: 5, textAlign: "center" }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          mb: 5,
          textAlign: "center",
          color: "#333",
          backgroundColor: "#f5f5f5",
          padding: "12px 24px",
          boxShadow: "0 0 8px rgba(173, 216, 230, 0.3)", // Lighter blue shadow
          textTransform: "uppercase",
          position: "relative",
          top: "-30px",
          borderRadius: "50px",
        }}
      >
        Service Categories
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {categories.map((category, index) => (
          <Card
            key={index}
            sx={{
              flex: "1 1 calc(25% - 20px)", // Ensures 4 equal columns
              minWidth: "250px",
              maxWidth: "300px",
              height: "270px", // Increased height for better spacing
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: 3,
              boxShadow: 4,
              borderRadius: 3,
              transition: "0.3s",
              "&:hover": {
                boxShadow: 7,
                transform: "scale(1.05)",
              },
            }}
          >
            {category.icon}
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  fontSize: category.name.length > 20 ? "1rem" : "1.25rem",
                }}
              >
                {category.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ wordWrap: "break-word" }}
              >
                {category.services.join(", ")}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CategoriesList;
