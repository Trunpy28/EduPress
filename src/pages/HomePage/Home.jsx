import React from "react";
import UserHeader from "../../components/HeaderNavBar/UserHeader";
import { css } from "@emotion/react";
import HeroBannerImage from "../../assets/HeroBanner.svg";
import BasePadding from "../../components/BasePadding/BasePadding";
import {
  CategoriesWrapper,
  CategoryHeaderWrapper,
  CoursesHeaderWrapper,
  CoursesWrapper,
  HeroBannerContent,
  HeroBannerWrapper,
} from "./styled";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import {
  Code as CodeIcon,
  Palette as PaletteIcon,
  Chat as ChatIcon,
  Videocam as VideocamIcon,
  CameraAlt as CameraAltIcon,
  BarChart as BarChartIcon,
  Create as CreateIcon,
  MonetizationOn as MonetizationOnIcon,
  Science as ScienceIcon,
  NetworkCheck as NetworkCheckIcon,
} from "@mui/icons-material";
import { Button, Grid2 } from "@mui/material";
import CourseCard from "../../components/CourseCard/CourseCard";

function Home() {
  const categories = [
    { title: "Art & Design", courses: 38, icon: PaletteIcon },
    { title: "Development", courses: 38, icon: CodeIcon },
    { title: "Communication", courses: 38, icon: ChatIcon },
    { title: "Videography", courses: 38, icon: VideocamIcon },
    { title: "Photography", courses: 38, icon: CameraAltIcon },
    { title: "Marketing", courses: 38, icon: BarChartIcon },
    { title: "Content Writing", courses: 38, icon: CreateIcon },
    { title: "Finance", courses: 38, icon: MonetizationOnIcon },
    { title: "Science", courses: 38, icon: ScienceIcon },
    { title: "Network", courses: 38, icon: NetworkCheckIcon },
  ];

  const courses = [
    {
      title: "Create An LMS Website With LearnPress",
      category: "Photography",
      duration: "2 Weeks",
      students: "156 Students",
      price: "$29.0",
      discountPrice: "Free",
      image: "https://your-image-source-1.com",
    },
    {
      title: "Design A Website With ThimPress",
      category: "Photography",
      duration: "2 Weeks",
      students: "156 Students",
      price: "$59.0",
      discountPrice: "$49.0",
      image: "https://your-image-source-2.com",
    },
    {
      title: "Create An LMS Website With LearnPress",
      category: "Photography",
      duration: "2 Weeks",
      students: "156 Students",
      price: "$29.0",
      discountPrice: "Free",
      image: "https://your-image-source-3.com",
    },
    {
      title: "Create An LMS Website With LearnPress",
      category: "Photography",
      duration: "2 Weeks",
      students: "156 Students",
      price: "$29.0",
      discountPrice: "Free",
      image: "https://your-image-source-4.com",
    },
    {
      title: "Create An LMS Website With LearnPress",
      category: "Photography",
      duration: "2 Weeks",
      students: "156 Students",
      price: "$29.0",
      discountPrice: "Free",
      image: "https://your-image-source-5.com",
    },
    {
      title: "Create An LMS Website With LearnPress",
      category: "Photography",
      duration: "2 Weeks",
      students: "156 Students",
      price: "$29.0",
      discountPrice: "Free",
      image: "https://your-image-source-6.com",
    },
  ];

  return (
    <div
      css={css`
        background-color: white;
        padding-bottom: 50px;
      `}
    >
      <HeroBannerWrapper>
        <img
          src={HeroBannerImage}
          css={css`
            width: 100%;
          `}
        />
        <HeroBannerContent>
          <div
            css={css`
              font-size: 40px;
              font-weight: 600;
              color: black;
              width: 100%;
            `}
          >
            Build Skills with Online Course
          </div>
          <div
            css={css`
              font-size: 18px;
              color: black;
              width: 100%;
            `}
          >
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </div>
          <button
            css={css`
              font-size: 18px;
              color: white;
              width: 100%;
              border: none;
              border-radius: 24px;
              background-color: #ff782d;
              padding: 10px 24px 10px 24px;
              width: fit-content;
              cursor: pointer;
            `}
          >
            Posts comment
          </button>
        </HeroBannerContent>
      </HeroBannerWrapper>
      <BasePadding
        paddingLeftRightPercent={20}
        backgroundColor="white"
        css={css`
          display: flex;
          flex-direction: column;
          gap: 40px;
        `}
      >
        <CategoriesWrapper>
          <CategoryHeaderWrapper>Categories</CategoryHeaderWrapper>
          <Grid2
            container
            spacing={3}
            justifyContent="space-between"
            marginTop="20px"
          >
            {categories.map((category) => (
              <Grid2
                item
                xs={6}
                sm={4}
                md={2.4}
                style={{ display: "flex", justifyContent: "center" }}
                key={category.title}
              >
                <CategoryCard
                  title={category.title}
                  courses={category.courses}
                  icon={category.icon}
                />
              </Grid2>
            ))}
          </Grid2>
        </CategoriesWrapper>

        <CoursesWrapper>
          <CoursesHeaderWrapper>
            <span
              css={css`
                font-size: 32px;
                font-weight: 600;
                color: black;
              `}
            >
              Featured courses
            </span>
            <Button
              css={css`
                color: black;
                border: 1px solid gray;
                border-radius: 16px;
                padding: 10px 24px;
                cursor: pointer;
                &:hover {
                  background-color: #ff782d;
                  color: white;
                  border: none;
                }
              `}
            >
              All courses
            </Button>
          </CoursesHeaderWrapper>
          <Grid2 container spacing={3} marginTop="20px">
            {courses.map((course, index) => (
              <Grid2 item xs={12} sm={6} md={4} key={index}>
                <CourseCard course={course} />
              </Grid2>
            ))}
          </Grid2>
        </CoursesWrapper>
      </BasePadding>
    </div>
  );
}

export default Home;
