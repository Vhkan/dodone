"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  TextField,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));

  // Mobile drawer state
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleDrawer = (open: boolean) => {
    setMobileDrawerOpen(open);
  };

  const toggleCategory = (categoryName: string) => {
    if (openCategories.includes(categoryName)) {
      setOpenCategories(openCategories.filter((name) => name !== categoryName));
    } else {
      setOpenCategories([...openCategories, categoryName]);
    }
  };

  // Desktop menu states
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

  // Language Menu
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

  // Mobile drawer content
  const mobileDrawerContent = (
    <Box sx={{ width: 280, paddingTop: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2 }}>
        <IconButton onClick={() => toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {categories.map((category) => (
          <Box key={category.name}>
            <ListItem
              component="button"
              onClick={() => toggleCategory(category.name)}
              sx={{ textAlign: "left" }}
            >
              <ListItemText primary={category.name} />
              {openCategories.includes(category.name) ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
            </ListItem>

            <Collapse
              in={openCategories.includes(category.name)}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {category.subcategories?.map((subcategory) => (
                  <Box key={subcategory.name}>
                    <ListItem
                      component="button"
                      sx={{ pl: 4, textAlign: "left" }}
                    >
                      <ListItemText primary={subcategory.name} />
                    </ListItem>
                  </Box>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>

      {/* Serch field */}
      <Box sx={{ px: 2, mt: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Find a specialist..."
          InputProps={{
            endAdornment: (
              <IconButton size="small">
                <SearchIcon />
              </IconButton>
            ),
          }}
          sx={{ mb: 2 }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            background: "linear-gradient(to bottom, #00c6ff, #0072ff)",
            color: "white",
            borderRadius: "2em",
            textTransform: "none",
            mb: 2,
          }}
        >
          Request a Service
        </Button>

        <Button
          fullWidth
          variant="contained"
          sx={{
            background: "linear-gradient(to bottom, #00c6ff, #0072ff)",
            color: "white",
            borderRadius: "2em",
            textTransform: "none",
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background:"#ffffff", 
        boxShadow: "none",
      }}
      
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 1, sm: 2 },
          gap: { xs: 1, sm: 2 },
        }}
      >
        {/* Logo with home page link */}
        <Box
          sx={{
            height: { xs: 170, sm: 170, md: 170 },
            position: "relative",
            left: "-40px", // shift left; adjust as needed
            flexShrink: 0,
          }}
        >
          <Link href="/" passHref style={{ display: "block", height: "100%" }}>
            <img
              src="/DodoneLogo4.png"
              alt="doDone Logo"
              style={{ height: "100%", width: "auto", cursor: "pointer" }}
            />
          </Link>
        </Box>

        {/* Mobile menu icon */}
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            sx={{ ml: "auto" }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Desktop navigation */}
        {!isMobile && (
          <>
            {/* Categories Dropdown */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { md: 1, lg: 2 },
                flexGrow: 0,
                ml: { md: 1, lg: 2 },
              }}
            >
              <Button
                aria-controls="category-menu"
                aria-haspopup="true"
                onClick={handleMainMenuOpen}
                sx={{
                  background: "linear-gradient(45deg, #f5f5f5, #e0e0e0)",
                  color: "black",
                  padding: { md: "8px 16px", lg: "10px 25px" },
                  borderRadius: "2em",
                  fontWeight: "bold",
                  textTransform: "none",
                  gap: "8px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  whiteSpace: "nowrap",
                  ml: -2,
                  mr: 14,
                  "&:hover": {
                    background: "linear-gradient(45deg, #e0e0e0, #d6d6d6)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                  },
                }}
                startIcon={<MenuIcon />}
              >
                Service Categories
              </Button>

              {!isTablet && (
                <Link href="/request-service" passHref>
                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(to bottom, #00c6ff, #0072ff)",
                      color: "white",
                      padding: { md: "8px 16px", lg: "10px 28px" },
                      borderRadius: "2em",
                      textTransform: "none",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        background:
                          "linear-gradient(to bottom, #3399ff, #0072ff)",
                        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    Request a Service
                  </Button>
                </Link>
              )}
            </Box>

            {/* Search Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "1.5em",
                padding: "4px 8px",
                flexGrow: 1,
                mx: { md: 2, lg: 4 },
                maxWidth: { md: 100, lg: 230 },
              }}
            >
              <TextField
                variant="standard"
                placeholder="Find a specialist..."
                sx={{
                  flexGrow: 1,
                  padding: "5px",
                  "& .MuiInputBase-root": { borderBottom: "none" },
                }}
                InputProps={{ disableUnderline: true }}
              />
              <IconButton size="small">
                <SearchIcon />
              </IconButton>
            </Box>

            {!isTablet && (
              <Link href="/become-specialist" passHref>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(to top, #00c6ff, #0072ff)", // Changed to top
                    color: "white",
                    padding: { md: "8px 16px", lg: "10px 19px" },
                    borderRadius: "2em",
                    textTransform: "none",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      background: "linear-gradient(to top, #3399ff, #0072ff)", // Changed to top
                      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  Become a Specialist
                </Button>
              </Link>
            )}

            {/* Language Selection */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: { md: 1, lg: 2 },
              }}
            >
              <Button
                aria-controls="language-menu"
                aria-haspopup="true"
                onClick={handleLanguageMenuOpen}
                sx={{
                  background: "linear-gradient(45deg, #f5f5f5, #e0e0e0)",
                  color: "black",
                  padding: { md: "5px 12px", lg: "7px 19px" },
                  borderRadius: "2em",
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": {
                    background: "linear-gradient(45deg, #e0e0e0, #d6d6d6)",
                  },
                }}
                startIcon={<LanguageIcon />}
              >
                {selectedLanguage}
              </Button>
            </Box>

            {/* Register Button */}
            <Box>
              <Link href="/register" passHref>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(to bottom, #00c6ff, #0072ff)",
                    color: "white",
                    padding: { md: "8px 16px", lg: "10px 19px" },
                    borderRadius: "2em",
                    textTransform: "none",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      background:
                        "linear-gradient(to bottom, #3399ff, #0072ff)",
                      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  Register
                </Button>
              </Link>
            </Box>
          </>
        )}

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
          {selectedCategory?.subcategories?.map((subcategory) => (
            <MenuItem
              key={subcategory.name}
              onClick={() => handleSubcategorySelect(subcategory)}
            >
              {subcategory.name}
            </MenuItem>
          ))}
        </Menu>

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

        {/* Mobile navigation drawer */}
        <Drawer
          anchor="right"
          open={mobileDrawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          {mobileDrawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
