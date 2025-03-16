"use client";

import { useState } from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

// Define types for the categories
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
    name: "Electronics",
    subcategories: ["Laptops", "Phones", "Cameras"],
  },
  {
    name: "Clothing Repair",
    subcategories: ["Men", "Women", "Kids"],
  },
  {
    name: "Mechanics",
    subcategories: [
      {
        name: "Car",
        subcategories: ["Oil Change", "Diagnostics", "Tire Change"],
      },
      {
        name: "Bike",
        subcategories: ["Wheel Alignment", "Brake Service", "Chain Replacement"],
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
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const open = Boolean(anchorEl);
  const subOpen = Boolean(subAnchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuOpen = (event: React.MouseEvent<HTMLElement>, category: string) => {
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
    <AppBar position="static" sx={{ bgcolor: "white", boxShadow: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
          <Link href="/" style={{ textDecoration: "none", color: "green" }}>DoDone</Link>
        </Typography>

        {/* Categories Dropdown */}
        <div>
          <Button
            aria-controls="category-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            sx={{ color: "black" }}
            startIcon={<MenuIcon />}
          >
            Categories
          </Button>
          <Menu id="category-menu" anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
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
          <Menu id="subcategory-menu" anchorEl={subAnchorEl} open={subOpen} onClose={handleMenuClose}>
            {selectedSubcategories.map((sub) => (
              <MenuItem key={sub} onClick={handleMenuClose}>
                {sub}
              </MenuItem>
            ))}
          </Menu>
        )}

        {/* Search Bar */}
        <div style={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "1.35em", padding: "4px 8px" }}>
          <TextField
            variant="standard"
            placeholder="Search..."
            sx={{ width: "160px", "& .MuiInputBase-root": { borderBottom: "none" } }}
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
              borderRadius: "1.35em",
              bgcolor: "green",
              color: "white",
              "&:hover": { bgcolor: "darkgreen" },
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
