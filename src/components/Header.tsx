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
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LanguageIcon from "@mui/icons-material/Language";

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
      { name: "Carpenter" },
    ],
  },
  {
    name: "Electronics Repair",
    subcategories: [
      { name: "Laptops" },
      { name: "Phones" },
      { name: "Tablets" },
      { name: "Home Appliances" },
    ],
  },
  {
    name: "Clothing Repair",
    subcategories: [{ name: "Men" }, { name: "Women" }, { name: "Kids" }],
  },
  {
    name: "Auto Repair",
    subcategories: [
      {
        name: "Car",
        subcategories: [
          { name: "Oil Change" },
          { name: "Diagnostics" },
          { name: "Tire Change" },
        ],
      },
      {
        name: "Bike",
        subcategories: [
          { name: "Wheel Alignment" },
          { name: "Brake Service" },
          { name: "Chain Replacement" },
        ],
      },
      {
        name: "Motorcycle",
        subcategories: [
          { name: "Oil Change" },
          { name: "Tire Change" },
          { name: "Chain Replacement" },
        ],
      },
      {
        name: "Boat",
        subcategories: [
          { name: "Engine Repair" },
          { name: "Hull Repair" },
          { name: "Electrical Repair" },
        ],
      },
    ],
  },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [subAnchorEl, setSubAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<Subcategory | null>(
    null
  );
  const [selectedMainCategory, setSelectedMainCategory] =
    useState<Subcategory | null>(null);

  const handleMainMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setSubAnchorEl(null);
    setSelectedCategory(null);
    setSelectedMainCategory(null);
  };

  const handleMainCategorySelect = (category: Subcategory) => {
    setSelectedMainCategory(category);
    setSelectedCategory(null);

    // If the category has nested subcategories, keep the menu open
    if (category.subcategories && category.subcategories.length > 0) {
      // Anchor the submenu to the same element
      setSubAnchorEl(anchorEl);
    } else {
      // If no nested subcategories, close the menu
      setAnchorEl(null);
      setSubAnchorEl(null);
    }
  };

  const handleCategorySelect = (category: Subcategory) => {
    setSelectedCategory(category);

    // If the category has subcategories, keep the submenu open
    if (category.subcategories && category.subcategories.length > 0) {
      // Anchor the submenu to the same element
      setSubAnchorEl(anchorEl);
    } else {
      // If no subcategories, close both menus
      setAnchorEl(null);
      setSubAnchorEl(null);
    }
  };

  const handleSubcategorySelect = (subcategory: Subcategory) => {
    // Handle subcategory selection logic here
    console.log("Selected Subcategory:", subcategory.name);

    // Close both menus after selection
    setAnchorEl(null);
    setSubAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubAnchorEl(null);
    setSelectedCategory(null);
    setSelectedMainCategory(null);
  };

  //Language Menu
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [selectedLanguage, setSelectedLanguage] = useState("ENG"); // Default language

  const handleLanguageMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setLanguageAnchorEl(null);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background:
          "linear-gradient(to right, #FFFFFF 0%, #f9f9f9 20%, #f0f0f0 80%, #f0f0f0 100%)",
        boxShadow: 2,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        {/* Logo with home page link */}
        <Box sx={{ height: 85, marginLeft: "-1.5em" }}>
          <Link href="/" passHref style={{ display: "block", height: "100%" }}>
            <img
              src="/doDoneLogo2.png"
              alt="doDone Logo"
              style={{ height: "100%", width: "auto", cursor: "pointer" }}
            />
          </Link>
        </Box>
        {/* Categories Dropdown */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "auto",
            gap: "1rem",
          }}
        >
          <Button
            aria-controls="category-menu"
            aria-haspopup="true"
            onClick={handleMainMenuOpen}
            sx={{
              background: "linear-gradient(45deg, #f5f5f5, #e0e0e0)",
              color: "black",
              padding: "10px 25px",
              marginLeft: "10em",
              borderRadius: "2em",
              fontWeight: "bold",
              textTransform: "none",
              gap: "8px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition:
                "background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
              "&:hover": {
                background: "linear-gradient(45deg, #e0e0e0, #d6d6d6)",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
              },
              "&:focus": {
                outline: "none",
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
            startIcon={<MenuIcon />}
          >
            Categories
          </Button>

          <Link href="/request-service" passHref>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(to bottom, #00c6ff, #0072ff)", // Top to bottom gradient
                color: "white",
                padding: "10px 19px",
                borderRadius: "2em",
                textTransform: "none",
                marginLeft: "5em",
                fontWeight: "bold",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition:
                  "background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(to bottom, #3399ff, #0072ff)", // Subtle hover gradient
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                  // transform: "scale(1.01)",
                },
                "&:focus": {
                  outline: "none",
                  boxShadow: "0px 0px 8px rgba(0, 191, 255, 0.5)",
                },
              }}
            >
              Request a Service
            </Button>
          </Link>

          {/* Main Categories Menu */}
          <Menu
            id="category-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {categories.map((category) => (
              <MenuItem
                key={category.name}
                onClick={() => handleMainCategorySelect(category)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {category.name}
                {category.subcategories &&
                  category.subcategories.length > 0 && (
                    <ArrowRightIcon fontSize="small" />
                  )}
              </MenuItem>
            ))}
          </Menu>

          {/* Subcategories Menu */}
          <Menu
            id="subcategory-menu"
            anchorEl={subAnchorEl}
            open={
              Boolean(subAnchorEl) &&
              (selectedMainCategory?.subcategories || []).length > 0
            }
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {/* First level subcategories */}
            {selectedMainCategory?.subcategories?.map((subcategory) => (
              <MenuItem
                key={subcategory.name}
                onClick={() => handleCategorySelect(subcategory)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {subcategory.name}
                {subcategory.subcategories &&
                  subcategory.subcategories.length > 0 && (
                    <ArrowRightIcon fontSize="small" />
                  )}
              </MenuItem>
            ))}
          </Menu>

          {/* Third level Subcategories Menu */}
          <Menu
            id="third-level-subcategory-menu"
            anchorEl={subAnchorEl}
            open={
              Boolean(subAnchorEl) &&
              (selectedCategory?.subcategories || []).length > 0
            }
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {/* Third level subcategories */}
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
        {/* Search Bar and Register Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "1.5em",
            padding: "4px 8px",
            marginRight: "10em",
            minWidth: "200px",
            maxWidth: "300px",
            width: "100%", // Ensures it stretches properly
            transition: "box-shadow 0.3s ease, background 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(45deg, #e0e0e0, #d6d6d6)";
            e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <TextField
            variant="standard"
            placeholder="Find a specialist..."
            sx={{
              flexGrow: 1, // Ensures it takes up available space
              padding: "5px",
              "& .MuiInputBase-root": { borderBottom: "none" },
            }}
            InputProps={{ disableUnderline: true }}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>

        {/* Language Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            width: "5em",
          }}
        >
          <Button
            aria-controls="language-menu"
            aria-haspopup="true"
            onClick={handleLanguageMenuOpen}
            sx={{
              background: "linear-gradient(45deg, #f5f5f5, #e0e0e0)",
              color: "black",
              padding: "7px 19px",
              borderRadius: "2em",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(45deg, #e0e0e0, #d6d6d6)",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
              },
              "&:focus": {
                outline: "none",
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
            startIcon={<LanguageIcon />}
          >
            {selectedLanguage}
          </Button>

          {/* Language Menu */}
          <Menu
            id="language-menu"
            anchorEl={languageAnchorEl}
            open={Boolean(languageAnchorEl)}
            onClose={handleLanguageMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={() => handleLanguageSelect("ENG")}>
              English (ENG)
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("UKR")}>
              Українська (UKR)
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("DK")}>
              Dansk (DK)
            </MenuItem>
          </Menu>
        </div>

        {/* Register Button */}
        <Link href="/register" passHref>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to bottom, #00c6ff, #0072ff)", // Top to bottom gradient
              color: "white",
              padding: "10px 19px",
              borderRadius: "2em",
              textTransform: "none",
              marginLeft: "5em",
              fontWeight: "bold",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition:
                "background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
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
            Register
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
