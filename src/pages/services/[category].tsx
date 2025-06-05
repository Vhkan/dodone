// pages/services/[category].tsx

import { useRouter } from 'next/router';
import { Box, Typography, List, ListItem, CircularProgress } from '@mui/material';
import { categories } from '@/components/Categories'; // Import the categories data
import Header from '@/components/Header';

const CategoryDetail = () => {
  const router = useRouter();
  const { category } = router.query;  // Get the category from the URL

  // Show a loading spinner if the category is still undefined (initial render)
  if (!category) {
    return (
      <>
        <Header />
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <CircularProgress />
        </Box>
      </>
    );
  };

  // Handle case where category might be an array
  const categorySlug = Array.isArray(category) ? category[0] : category;
  
  // Debug each category comparison
  categories.forEach(cat => {
    const formatted = cat.name.toLowerCase().replace(/\s+/g, '-');
  });

  // Find the category data with more flexible matching
  const categoryData = categories.find(cat => {
    const catNameFormatted = cat.name.toLowerCase().replace(/\s+/g, '-');
    const exactMatch = catNameFormatted === categorySlug;
    return exactMatch;
  });

  console.log("Found category data:", categoryData);

  // If no category data is found, show a not found message
  if (!categoryData) {
    return (
      <>
        <Header />
        <Box sx={{ padding: '20px' }}>
          <Typography variant="h4" color="error">
            Category not found!
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px' }}>
            The category "{categorySlug}" could not be found.
          </Typography>
        </Box>
      </>
    );
  };

  return (
    <>
  <Header />
  <Box
    sx={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '30px',
      paddingTop: '100px', // added top padding
      backgroundColor: '#f9f9f9',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    }}
  >
    <Typography variant="h4" sx={{ marginBottom: '16px', fontWeight: 600 }}>
      {categoryData.name}
    </Typography>

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px',
      }}
    >
      {categoryData.icon && categoryData.icon}
    </Box>

    <Typography variant="h6" sx={{ marginBottom: '12px', color: 'primary.main' }}>
      Available Services:
    </Typography>

    <List sx={{ paddingLeft: '16px' }}>
      {categoryData.services.map((service, index) => (
        <ListItem
          key={index}
          sx={{
            paddingY: '8px',
            paddingX: '0',
            borderBottom: '1px solid #e0e0e0',
            fontSize: '1.1rem',
            '&:last-child': {
              borderBottom: 'none',
            },
          }}
        >
          {service}
        </ListItem>
      ))}
    </List>
  </Box>
</>

  
  );
};

export default CategoryDetail;