import React, { useState } from "react";
import { css } from "@emotion/react";
import BasePadding from "../../components/BasePadding/BasePadding";
import { BreadcrumbWrapper, CourseListWrapper, HeaderWrapper } from "./styled";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Rating,
  Pagination,
  Breadcrumbs,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HorizontalCourseCard from "../../components/CourseCard/HorizontalCourseCard";

function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedReview, setSelectedReview] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);  // Thêm trạng thái cho trang hiện tại
  const coursesPerPage = 10;  // Số khóa học trên mỗi trang

  const breadcrumbs = [
    <Link underline="none" key="1" color="inherit" href="/">
      Homepage
    </Link>,
    <Typography key="2" sx={{ color: 'text.primary' }}>
      Breadcrumb
    </Typography>,
  ];

  const courses = [
    {
      id: 1,
      title: "Create An LMS Website With LearnPress",
      category: "Photography",
      author: "Determined-Poitras",
      duration: "2 Weeks",
      students: 156,
      level: "All Levels",
      lessons: 20,
      price: 29.0,
      isFree: true,
      thumbnail: "/path/to/learnpress-thumbnail.jpg",
    },
    {
      id: 2,
      title: "Mastering WordPress with ThimPress",
      category: "Web Development",
      author: "Determined-Poitras",
      duration: "3 Weeks",
      students: 200,
      level: "Intermediate",
      lessons: 25,
      price: 39.0,
      isFree: false,
      thumbnail: "/path/to/thimpress-thumbnail.jpg",
    },
    {
      id: 3,
      title: "Photography for Beginners",
      category: "Photography",
      author: "Jane Doe",
      duration: "1 Week",
      students: 100,
      level: "Beginner",
      lessons: 10,
      price: 19.0,
      isFree: false,
      thumbnail: "/path/to/photography-thumbnail.jpg",
    },
  ];

  const categories = [
    { name: "Commercial", count: 15 },
    { name: "Office", count: 15 },
    { name: "Shop", count: 15 },
    { name: "Educate", count: 15 },
    { name: "Academy", count: 15 },
    { name: "Single family home", count: 15 },
    { name: "Studio", count: 15 },
    { name: "University", count: 15 },
  ];

  const reviews = [
    { stars: 5, count: 1025 },
    { stars: 4, count: 1025 },
    { stars: 3, count: 1025 },
    { stars: 2, count: 1025 },
    { stars: 1, count: 1025 },
  ];

  const levels = [
    { name: "All levels", count: 15 },
    { name: "Beginner", count: 15 },
    { name: "Intermediate", count: 15 },
    { name: "Expert", count: 15 },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.name;
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (event) => {
    const price = event.target.value;
    setSelectedPrice((prev) =>
      prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]
    );
  };

  const handleReviewChange = (stars) => {
    setSelectedReview((prev) =>
      prev.includes(stars) ? prev.filter((r) => r !== stars) : [...prev, stars]
    );
  };

  const handleLevelChange = (event) => {
    const level = event.target.name;
    setSelectedLevel((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  // Xác định khóa học trên trang hiện tại
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (event, value) => {
    setCurrentPage(value); // Cập nhật trang hiện tại
  };

  return (
    <div
      css={css`
        background-color: white;
        padding-top: 50px;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        gap: 30px;
      `}
    >
      <BreadcrumbWrapper>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </BreadcrumbWrapper>
      <BasePadding paddingLeftRightPercent={20}>
        <HeaderWrapper>
          <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }}>
            All Courses
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            {/* Search Box */}
            <TextField
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{ minWidth: 300 }}
              slotProps={{
                input: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            {/* Sort Dropdown */}
            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
              <InputLabel id="sort-label">Sort By</InputLabel>
              <Select
                labelId="sort-label"
                value={sortOrder}
                onChange={handleSortChange}
                label="Sort By"
              >
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="price">Price</MenuItem>
                <MenuItem value="duration">Duration</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </HeaderWrapper>

        <Box sx={{ display: "flex", gap: 4, marginTop: "20px"}}>
          {/* Filter Component */}
          <Box sx={{ flex: 1, width: "25%" }}>
            <Typography
              variant="h6"
              sx={{ marginBottom: 2, color: "black", fontWeight: 600 }}
            >
              Filter
            </Typography>

            {/* Category Filter */}
            <Typography
              variant="subtitle1"
              sx={{ color: "black", fontWeight: 600 }}
            >
              Course Category
            </Typography>
            <FormGroup>
              {categories.map((category) => (
                <FormControlLabel
                  key={category.name}
                  control={
                    <Checkbox
                      checked={selectedCategory.includes(category.name)}
                      onChange={handleCategoryChange}
                      name={category.name}
                    />
                  }
                  label={
                    <Typography sx={{ color: "#555555" }}>
                      {`${category.name} (${category.count})`}
                    </Typography>
                  }
                />
              ))}
            </FormGroup>

            {/* Price Filter */}
            <Typography
              variant="subtitle1"
              sx={{ marginTop: 2, color: "black", fontWeight: 600 }}
            >
              Price
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPrice.includes("All")}
                    onChange={handlePriceChange}
                    value="All"
                  />
                }
                label={<Typography sx={{ color: "#555555" }}>All</Typography>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPrice.includes("Free")}
                    onChange={handlePriceChange}
                    value="Free"
                  />
                }
                label={<Typography sx={{ color: "#555555" }}>Free</Typography>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPrice.includes("Paid")}
                    onChange={handlePriceChange}
                    value="Paid"
                  />
                }
                label={<Typography sx={{ color: "#555555" }}>Paid</Typography>}
              />
            </FormGroup>

            {/* Review Filter */}
            <Typography
              variant="subtitle1"
              sx={{ marginTop: 2, color: "black", fontWeight: 600 }}
            >
              Review
            </Typography>
            <FormGroup>
              {reviews.map((review) => (
                <FormControlLabel
                  key={review.stars}
                  control={
                    <Checkbox
                      checked={selectedReview.includes(review.stars)}
                      onChange={() => handleReviewChange(review.stars)}
                    />
                  }
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Rating
                        name="read-only"
                        value={review.stars}
                        readOnly
                        sx={{ marginRight: 1 }}
                      />
                      <Typography sx={{ color: "#555555" }}>
                        ({review.count})
                      </Typography>
                    </Box>
                  }
                />
              ))}
            </FormGroup>

            {/* Level Filter */}
            <Typography
              variant="subtitle1"
              sx={{ marginTop: 2, color: "black", fontWeight: 600 }}
            >
              Level
            </Typography>
            <FormGroup>
              {levels.map((level) => (
                <FormControlLabel
                  key={level.name}
                  control={
                    <Checkbox
                      checked={selectedLevel.includes(level.name)}
                      onChange={handleLevelChange}
                      name={level.name}
                    />
                  }
                  label={
                    <Typography sx={{ color: "#555555" }}>
                      {`${level.name} (${level.count})`}
                    </Typography>
                  }
                />
              ))}
            </FormGroup>
          </Box>

          {/* Course List */}
          <CourseListWrapper>
            {currentCourses.map((course) => (
              <HorizontalCourseCard key={course.id} course={course} />
            ))}

            {/* Pagination */}
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
              <Pagination
                count={Math.ceil(courses.length / coursesPerPage)} // Tính số lượng trang
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                color="primary"
              />
            </Box>
          </CourseListWrapper>
        </Box>
      </BasePadding>
    </div>
  );
}

export default CoursesPage;
