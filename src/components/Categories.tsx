"use client";

import { Box, Card, Button, CardContent, Typography } from "@mui/material";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ImagesearchRollerIcon from "@mui/icons-material/ImagesearchRoller";
import ConstructionIcon from "@mui/icons-material/Construction";
import WeekendIcon from "@mui/icons-material/Weekend";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SpaIcon from "@mui/icons-material/Spa";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HomeIcon from "@mui/icons-material/Home";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Link from "next/link";

export const categories = [
  {
    name: "Home Specialist",
    icon: <HomeRepairServiceIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
    services: [
      "Plumber",
      "Electrician",
      "Carpenter",
      "Man for an Hour",
      "Locksmith",
      "Glazier",
      "Handyman",
    ],
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
    icon: <ImagesearchRollerIcon sx={{ fontSize: 60, color: "#8bc34a" }} />,
    services: [
      "Home Renovation",
      "Tile Laying",
      "Plastering Work",
      "Insulation of Premises",
      "Heating Installation",
      "Air Conditioning Installation",
      "Floor Laying",
      "Wallpapering",
      "Painting",
      "Parquet Laying",
      "Laminate Laying",
      "Drywall Installation",
      "Ceiling Installation",
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
      "Roofing Work",
      "Facade Work",
      "Concrete Work",
      "Paving Work",
      "Landscaping",
    ],
  },
  {
    name: "Furniture Services",
    icon: <WeekendIcon sx={{ fontSize: 60, color: "#562B08" }} />,
    services: [
      "Furniture Manufacturing",
      "Furniture Repair",
      "Furniture Assembly",
      "Furniture Restoration",
      "Furniture Reupholstering",
      "Furniture Disassembly",
      "Furniture Moving",
      "Furniture Design",
      "Furniture Painting",
    ],
  },
  {
    name: "Cleaning Services",
    icon: <CleaningServicesIcon sx={{ fontSize: 60, color: "#8FD14F" }} />,
    services: [
      "Home Cleaning",
      "General Cleaning",
      "Renovation Cleaning",
      "Dry Cleaning",
      "Laundry",
      "Window Cleaning",
      "Carpet Cleaning",
      "Upholstery Cleaning",
      "Pool Cleaning",
      "Gutter Cleaning",
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
      "Transmission",
      "Brakes",
      "Suspension",
      "Exhaust",
      "Tires",
      "Wheel Alignment",
      "Auto Glass",
      "Car Wash",
      "Detailing",
    ],
  },
  {
    name: "Transport & Warehousing",
    icon: <LocalShippingIcon sx={{ fontSize: 60, color: "#0002A1" }} />,
    services: [
      "Freight Transportation",
      "Loader Services",
      "Construction Waste Removal",
      "Furniture & Equipment Transportation",
      "Home or Office Moving",
      "Packing Services",
      "Warehousing Services",
      "Courier Services",
      "Express Delivery",
    ],
  },
  {
    name: "Beauty & Health Services",
    icon: <SpaIcon sx={{ fontSize: 60, color: "#82C3EC" }} />,
    services: [
      "Massage",
      "Nail Care",
      "Cosmetology",
      "Eyelash Care",
      "Eyebrow Care",
      "Fitness Trainer",
      "Yoga Instructor",
      "Personal Trainer",
      "Dietician",
      "Psychologist",
    ],
  },
  {
    name: "Household Services",
    icon: <HomeIcon sx={{ fontSize: 60, color: "#3E54AC" }} />,
    services: [
      "Gardening",
      "Nanny",
      "Nanny Services",
      "Housekeeping Services",
      "Seamstress Services",
      "Meal Preparation",
      "Pet Care",
      "Dog Walking",
      "Dog Training",
    ],
  },
  {
    name: "Photo and Video Services",
    icon: <CameraAltIcon sx={{ fontSize: 60, color: "#295F98" }} />,
    services: [
      "Photo and Video Services",
      "Photographer",
      "Videographer",
      "Photo Editing",
      "Video Editing",
      "Photo Printing",
      "Video Production",
      "Photo/Video Restoration",
    ],
  },
  {
    name: "Party Organization",
    icon: <CelebrationIcon sx={{ fontSize: 60, color: "#F45905" }} />,
    services: [
      "Host Services",
      "Musical Accompaniment",
      "Animator Services",
      "Catering",
      "Baking and Desserts",
      "Florist Services",
      "Event Decoration",
      "Event Planning",
      "Event Management",
      "Wedding Planning",
      "Birthday Planning",
      "Corporate Event Planning",
    ],
  },
];

const CategoriesList = () => {
  return (
    <Box sx={{ width: "100%", py: 5, textAlign: "center", marginTop: "7em" }}>
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
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: 3,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle default shadow
              borderRadius: 3,
              transition: "0.3s",
              position: "relative",
              backgroundColor: "white", // Default background
              overflow: "hidden", // Important for containing the overlay
              "&:hover": {
                transform: "scale(1.0)",
                boxShadow: "0px 0px 15px rgba(33, 150, 243, 0.6)", // Strong blue glow around the tab
              },
              // Apply overlay gradient for cards with many items
              "&::after":
                category.services.length > 5
                  ? {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "40%", // Increased height for more blur coverage
                      background:
                        "linear-gradient(transparent, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0.98) 70%)",
                      pointerEvents: "none", // Ensures clicks pass through
                      zIndex: 1, // Ensures the gradient appears above content but below the button
                    }
                  : {},
            }}
          >
            {category.icon}
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  fontSize: "1.25rem", // Consistent font size for all category names
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2, // Limits text to 2 lines
                  WebkitBoxOrient: "vertical",
                  lineHeight: "1.2em",
                  height: "2.4em", // Allows for 2 lines of text at 1.2em line height
                }}
              >
                {category.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  wordWrap: "break-word",
                  mb: 2,
                  maxHeight: "120px", // Limit height to ensure some content is cut off
                  overflow: "hidden",
                }}
              >
                {category.services.join(", ")}
              </Typography>
              <Link
                href={`/services/${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                passHref
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    position: "absolute",
                    bottom: "15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#F5F5F5", // Very light blue background
                    color: "#73777B", // Dark blue text for contrast
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    borderRadius: "20px",
                    padding: "4px 9px",
                    transition: "0.3s",
                    zIndex: 2, // Ensure button appears above gradient

                    "&:hover": {
                      backgroundColor: "#F1F6F9", // Slightly darker light blue on hover
                      boxShadow: "0px 3px 10px rgba(33, 150, 243, 0.3)", // Very subtle glow
                    },

                    "&:active": {
                      backgroundColor: "#90CAF9", // More saturated light blue on click
                      boxShadow: "0px 2px 5px rgba(33, 150, 243, 0.3)", // Reduced glow on press
                    },
                  }}
                >
                  View More
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CategoriesList;
