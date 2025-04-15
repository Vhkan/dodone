  // pages/services/[category].tsx

import { useRouter } from 'next/router';
import { categories } from '@/components/Categories';
import { Box, Typography, List, ListItem } from '@mui/material';

const CategoryDetail = () => {
  const router = useRouter();
  const { category } = router.query;

  const categoryData = categories.find(
    (cat) => cat.name.toLowerCase().replace(/\s+/g, '-') === category
  );

  if (!categoryData) {
    return <div>Category not found!</div>;
  }

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        {categoryData.name}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        {categoryData.icon}
      </Box>
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>
        Available Services:
      </Typography>
      <List>
        {categoryData.services.map((service, index) => (
          <ListItem key={index}>{service}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CategoryDetail;
