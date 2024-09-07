/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

const CourseCard = ({ course }) => {
  return (
    <Card
      css={css`
        width: 322px;
        overflow: hidden;
        border-radius: 10px;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        &:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
      `}
    >
      <Box
        css={css`
          overflow: hidden;
        `}
      >
        <CardMedia
          component="img"
          height="140"
          image={course.image}
          alt={course.title}
          css={css`
            transition: transform 0.3s ease-in-out;
          `}
        />
      </Box>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          css={css`
            cursor: pointer;
            transition: color 0.3s ease-in-out;
            &:hover {
              color: #ff7f50; /* Coral color (close to orange) */
            }
          `}
        >
          {course.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {course.category}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {course.duration} • {course.students} Students
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          css={css`
            text-decoration: line-through;
          `}
        >
          {course.price}
        </Typography>
        <Typography variant="h6" color="primary">
          {course.discountPrice}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          css={css`
            color: white;
          `}
        >
          View More
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
