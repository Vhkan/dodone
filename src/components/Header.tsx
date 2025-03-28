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
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// Types for categories
interface Subcategory {
  name: string;
  subcategories?: Subcategory[];
}

const categories: Subcategory[] = [
  {
    name: "Home Specialist",
    subcategories: [
      { name: "Electrician" },
      { name: "Plumber" },
      { name: "Carpenter" }
    ]
  },
  {
    name: "Electronics Repair",
    subcategories: [
      { name: "Laptops" },
      { name: "Phones" },
      { name: "Tablets" },
      { name: "Home Appliances" }
    ]
  },
  {
    name: "Clothing Repair",
    subcategories: [
      { name: "Men" },
      { name: "Women" },
      { name: "Kids" }
    ]
  },
  {
    name: "Auto Repair",
    subcategories: [
      {
        name: "Car",
        subcategories: [
          { name: "Oil Change" },
          { name: "Diagnostics" },
          { name: "Tire Change" }
        ]
      },
      {
        name: "Bike",
        subcategories: [
          { name: "Wheel Alignment" },
          { name: "Brake Service" },
          { name: "Chain Replacement" }
        ]
      },
      {
        name: "Motorcycle",
        subcategories: [
          { name: "Oil Change" },
          { name: "Tire Change" },
          { name: "Chain Replacement" }
        ]
      },
      {
        name: "Boat",
        subcategories: [
          { name: "Engine Repair" },
          { name: "Hull Repair" },
          { name: "Electrical Repair" }
        ]
      }
    ]
  }
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [subAnchorEl, setSubAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<Subcategory | null>(null);

  const handleMainMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setSubAnchorEl(null);
  };

  const handleCategorySelect = (category: Subcategory) => {
    setSelectedCategory(category);
    
    // If the category has subcategories, open the submenu
    if (category.subcategories && category.subcategories.length > 0) {
      // Find the button that was just clicked to anchor the submenu
      const categoryButton = document.querySelector(`[data-category="${category.name}"]`);
      
      if (categoryButton) {
        setSubAnchorEl(categoryButton as HTMLElement);
      }
    } else {
      // If no subcategories, close both menus
      setAnchorEl(null);
      setSubAnchorEl(null);
    }
  };

  const handleSubcategorySelect = (subcategory: Subcategory) => {
    // Handle subcategory selection logic here
    console.log('Selected Subcategory:', subcategory.name);
    
    // Close both menus after selection
    setAnchorEl(null);
    setSubAnchorEl(null);
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
            onClick={handleMainMenuOpen}
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

          {/* Main Categories Menu */}
          <Menu
            id="category-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            {categories.map((category) => (
              <MenuItem
                key={category.name}
                data-category={category.name}
                onClick={() => handleCategorySelect(category)}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {category.name}
                {category.subcategories && category.subcategories.length > 0 && (
                  <ArrowRightIcon fontSize="small" />
                )}
              </MenuItem>
            ))}
          </Menu>

          {/* Subcategories Menu */}
          <Menu
            id="subcategory-menu"
            anchorEl={subAnchorEl}
            open={Boolean(subAnchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            {selectedCategory?.subcategories?.map((subcategory) => (
              <MenuItem
                key={subcategory.name}
                onClick={() => handleSubcategorySelect(subcategory)}
              >
                {subcategory.name}
              </MenuItem>
            ))}
          </Menu>
        </div>

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