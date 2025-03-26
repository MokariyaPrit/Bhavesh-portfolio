import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Dialog,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images (as per your code)
import susi1 from "../../public/assets/susi/Screen1.png";
import susi2 from "../../public/assets/susi/Screen2.png";
import susi3 from "../../public/assets/susi/Screen3.png";
import susi4 from "../../public/assets/susi/Screen4.png";
import susi5 from "../../public/assets/susi/Screen5.png";
import susi6 from "../../public/assets/susi/Screen6.png";

import expance1 from "../../public/assets/expance/Screen1.png";
import expance2 from "../../public/assets/expance/Screen2.png";
import expance3 from "../../public/assets/expance/Screen3.png";
import expance4 from "../../public/assets/expance/Screen4.png";

// Project data (as per your code)
const projects = [
  {
    title: "iOS App for SUSI.AI",
    description:
      "The main feature of the app is to provide a conversational interface to provide intelligent answers using the loklak/AskSusi infrastructure. The SUSI iOS App make use of the APIs to access information from the hosted server. The app also offers login functionalities to connect to other services and stored personal data. Additionally the application uses data provided by the user's phone to improve Susi answers. Geolocation information for example helps to offer better answers related to questions about things nearby. Another main feature of the app is to connect your iPhone/iPad with SUSI Smart Speaker.",
    images: [susi1, susi2, susi3, susi4, susi5, susi6],
    techStack: ["Swift", "UIKit", "Core Data"], // Note: "Reac" seems to be a typo, should be "React"
    liveLink: "#",
    githubLink: "https://github.com/BhuvaBhavesh/Furniture-Shop-App-UI-SwiftUI-Starting_Project",
  },
  {
    title: "Expense Tracker App",
    description:
    "A user-friendly web application designed to help individuals track their daily expenses, categorize spending, and visualize financial data through interactive charts. The app allows users to set budgets, receive notifications for overspending, and generate monthly reports to manage their finances effectively.",
    images: [expance1, expance2, expance3, expance4],
    techStack: ["Swift", "UIKit", "Core Data"], // Note: "Reac" seems to be a typo, should be "React"
    liveLink: "#",
    githubLink: "https://github.com/BhuvaBhavesh/montly_expenses_trackizer_app_swiftui-main",
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleOpen = (images:any) => {
    setSelectedImages(images);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImages([]);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // Add responsive settings for the slider
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For screens smaller than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 4, md: 6 }, // Responsive padding for top/bottom
        backgroundColor: "#f9f9f9",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: { xs: 3, md: 4 }, // Responsive margin-bottom
            fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size
          }}
        >
          My Projects
        </Typography>

        {/* Project List View */}
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  p: { xs: 1, md: 2 }, // Responsive padding
                  maxWidth: "100%", // Ensure card doesn't stretch too wide
                  mx: "auto", // Center the card
                  boxShadow: 3, // Add a subtle shadow for better visuals
                }}
              >
                <CardMedia
                  component="img"
                  image={project.images[0]}
                  alt={project.title}
                  sx={{
                    width: { xs: "100%", md: "40%" }, // Responsive width
                    height: { xs: 200, sm: 250, md: 300 }, // Responsive height
                    objectFit: "contain", // Use "contain" to maintain aspect ratio without cropping
                    borderRadius: 2,
                    backgroundColor: "#f0f0f0", // Fallback background color if image fails to load
                  }}
                  onError={() => {
                    console.error(`Failed to load image: ${project.images[0]}`);
                  }}
                />
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", // Center content vertically
                    p: { xs: 2, md: 3 }, // Responsive padding
                    textAlign: "center", // Center all text horizontally
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      fontSize: { xs: "1.25rem", md: "1.5rem" }, // Responsive font size
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      mb: 2,
                      fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      fontSize: { xs: "0.85rem", md: "0.95rem" }, // Responsive font size
                    }}
                  >
                    Tech Stack: {project.techStack.join(", ")}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center", // Center buttons horizontally
                      gap: 2,
                    }}
                  >
                    <Button
                      onClick={() => handleOpen(project.images)}
                      variant="contained"
                      sx={{
                        fontSize: { xs: "0.8rem", md: "0.9rem" }, // Responsive font size
                        px: { xs: 2, md: 3 }, // Responsive padding
                      }}
                    >
                      Demo
                    </Button>
                    <Button
                      href={project.githubLink}
                      target="_blank"
                      variant="outlined"
                      disabled={!project.githubLink} // Disable if no GitHub link
                      sx={{
                        fontSize: { xs: "0.8rem", md: "0.9rem" }, // Responsive font size
                        px: { xs: 2, md: 3 }, // Responsive padding
                      }}
                    >
                      GitHub
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Carousel Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg" // Increased maxWidth for larger screens
        fullWidth
      >
        <Box sx={{ p: { xs: 1, md: 2 } }}>
          <Slider {...sliderSettings}>
            {selectedImages.map((img, idx) => (
              <Box
                key={idx}
                component="img"
                src={img}
                alt="Project Screenshot"
                sx={{
                  width: "100%",
                  height: { xs: 300, sm: 400, md: 500 }, // Responsive height
                  objectFit: "contain", // Ensure image scales without distortion
                  borderRadius: 2,
                  backgroundColor: "#f0f0f0", // Fallback background color if image fails to load
                }}
                onError={() => {
                  console.error(`Failed to load image in carousel: ${img}`);
                }}
              />
            ))}
          </Slider>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Projects;