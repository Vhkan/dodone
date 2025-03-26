"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  TextField,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

//Types for categories
interface Subcategory {
  name: string;
  subcategories?: string[];
}

interface Category {
  name: string;
  subcategories: Subcategory[] | string[];
}

const categories = [
  {
    name: "Home Specialist",
    subcategories: ["Electrician", "Plumber", "Carpenter"],
  },
  {
    name: "Electronics Repair",
    subcategories: ["Laptops", "Phones", "Tablets", "Home Appliances"],
  },
  {
    name: "Clothing Repair",
    subcategories: ["Men", "Women", "Kids"],
  },
  {
    name: "Auto Repair",
    subcategories: [
      {
        name: "Car",
        subcategories: ["Oil Change", "Diagnostics", "Tire Change"],
      },
      {
        name: "Bike",
        subcategories: [
          "Wheel Alignment",
          "Brake Service",
          "Chain Replacement",
        ],
      },
      {
        name: "Motorcycle",
        subcategories: ["Oil Change", "Tire Change", "Chain Replacement"],
      },
      {
        name: "Boat",
        subcategories: ["Engine Repair", "Hull Repair", "Electrical Repair"],
      },
    ],
  },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [subAnchorEl, setSubAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const open = Boolean(anchorEl);
  const subOpen = Boolean(subAnchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    category: string
  ) => {
    setAnchorEl(null); // Close the main menu

    // Type assertion here to specify the structure of categoryData
    const categoryData = categories.find((cat) => cat.name === category) as {
      name: string;
      subcategories: string[];
    };

    if (categoryData) {
      setSelectedSubcategories(categoryData.subcategories);
      setSelectedCategory(category);
      setSubAnchorEl(event.currentTarget); // Open sub-menu
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(to bottom, #B0B0B0, #FFFFFF)",
        boxShadow: 2,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        {/* Logo and Title */}
        <img
          src="/doDone1.jpg"
          alt="doDone Logo"
          style={{ height: 65, width: "auto", marginLeft: "-1.5em" }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
          {/* <Link href="/" style={{ textDecoration: "none", color: "green" }}>DoDone</Link> */}
        </Typography>

        {/* Categories Dropdown */}
        <div>
          <Button
            aria-controls="category-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            sx={{
              background: "linear-gradient(45deg, #f5f5f5, #e0e0e0)", // Light gradient effect
              color: "black",
              padding: "7px 19px",
              borderRadius: "2em",
              fontWeight: "bold",
              textTransform: "none",
              gap: "8px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
              transition:
                "background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
              "&:hover": {
                background: "linear-gradient(45deg, #e0e0e0, #d6d6d6)", // Slightly darker on hover
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                // transform: "scale(1.05)", // Slight pop effect
              },
              "&:focus": {
                outline: "none",
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)", // Glow effect on focus
              },
            }}
            startIcon={<MenuIcon />}
          >
            Categories
          </Button>

          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(45deg, #00c6ff, #0072ff)", // Blue to purple gradient
              color: "white",
              padding: "7px 19px",
              borderRadius: "2em",
              textTransform: "none",
              marginLeft: "9em",
              fontWeight: "bold",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition:
                "background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease", // Only transition these properties
              "&:hover": {
                background: "linear-gradient(45deg, #0072ff, #00c6ff)",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                transform: "scale(1.05)",
              },
              "&:focus": {
                outline: "none",
                boxShadow: "0px 0px 8px rgba(0, 191, 255, 0.5)", // Blue glow on focus
              },
            }}
          >
            Request a Service
          </Button>

          <Menu
            id="category-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
          >
            {categories.map((category) => (
              <MenuItem
                key={category.name}
                onClick={(event) => handleSubMenuOpen(event, category.name)}
              >
                {category.name}
              </MenuItem>
            ))}
          </Menu>
        </div>

        {/* Subcategories Menu */}
        {selectedCategory && (
          <Menu
            id="subcategory-menu"
            anchorEl={subAnchorEl}
            open={subOpen}
            onClose={handleMenuClose}
          >
            {selectedSubcategories.map((sub) => (
              <MenuItem key={sub} onClick={handleMenuClose}>
                {sub}
              </MenuItem>
            ))}
          </Menu>
        )}

        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "1.5em",
            padding: "2px 4px",
          }}
        >
          <TextField
            variant="standard"
            placeholder="Search..."
            sx={{
              width: "160px",
              "& .MuiInputBase-root": { borderBottom: "none" },
            }}
            InputProps={{ disableUnderline: true }}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>

        {/* Register Button */}
        <Link href="/register" passHref>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(45deg, #00c6ff, #0072ff)", // Blue to purple gradient
              color: "white",
              padding: "7px 19px",
              borderRadius: "2em",
              textTransform: "none",
              marginLeft: "9em",
              fontWeight: "bold",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(45deg, #0072ff, #00c6ff)", // Reversed gradient on hover
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                transform: "scale(1.05)",
              },
              "&:focus": {
                outline: "none",
                boxShadow: "0px 0px 8px rgba(0, 191, 255, 0.5)", // Blue glow on focus
              },
            }}
          >
            Register
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
