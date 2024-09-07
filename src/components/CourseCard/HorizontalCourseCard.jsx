import React from "react";
import { Card, CardContent, Typography, Button, Box, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const HorizontalCourseCard = ({ course }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                borderRadius: 3,
                boxShadow: 3,
                width: '100%',
                transition: 'transform 0.3s, box-shadow 0.3s', // Thêm hiệu ứng chuyển đổi
                '&:hover': {
                    transform: 'scale(1.02)', // Phóng to nhẹ khi hover
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Thay đổi shadow khi hover
                },
            }}
        >
            {/* Left Section with Image and Category */}
            <Box sx={{ position: 'relative', width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                <img
                    src={course.thumbnail} // Use the thumbnail URL from course data
                    alt={course.title}
                    style={{ width: '100%', borderRadius: '12px' }}
                />
                <Chip
                    label={course.category}
                    color="black"
                    sx={{ position: 'absolute', top: 15, left: 15, fontWeight: 'bold' }}
                />
            </Box>

            {/* Right Section with Course Info */}
            <CardContent sx={{ width: '60%' }}>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    by {course.author}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {course.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: '10px', marginBottom: '50px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AccessTimeIcon sx={{ fontSize: 16, color: 'orange' }} />
                        <Typography variant="body2">{course.duration}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <GroupIcon sx={{ fontSize: 16, color: 'orange' }} />
                        <Typography variant="body2">{course.students} Students</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <EqualizerIcon sx={{ fontSize: 16, color: 'orange' }} />
                        <Typography variant="body2">{course.level}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <MenuBookIcon sx={{ fontSize: 16, color: 'orange' }} />
                        <Typography variant="body2">{course.lessons} Lessons</Typography>
                    </Box>
                </Box>
                <hr style={{ opacity: '0.3' }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Typography variant="body2" color="textSecondary">
                        ${course.price.toFixed(2)} <Typography component="span" color={course.isFree ? 'green' : 'inherit'}>{course.isFree ? 'Free' : ''}</Typography>
                    </Typography>
                    <Button variant="outlined" size="small">
                        View More
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default HorizontalCourseCard;
