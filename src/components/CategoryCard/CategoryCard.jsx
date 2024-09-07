import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const CategoryCard = ({ title, courses, icon: IconComponent }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        width: '180px',
        height: '180px',
        textAlign: 'center',
        boxShadow: 2,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 4,
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 1,
          }}
        >
          <IconComponent fontSize="large" color="primary" />
        </Box>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {courses} Courses
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;