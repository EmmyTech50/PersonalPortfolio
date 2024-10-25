import { Box, Button, Flex, Heading, Image, Text, FormControl, FormLabel, Input, Textarea, Grid, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from 'react';
import { Element } from "react-scroll";
import NavBar from "./NavBar";
import emailjs from '@emailjs/browser';
import myonCar from '../assets/myonCar.jpeg';
import myonblue from '../assets/myonblue.jpeg';
import schoolsite from '../assets/schoolsite.png';


const projects = [
  {
    imgSrc: schoolsite,
    title: "Sylvester School",
    description:
      "This website serves as the central hub for students, parents, and faculty at Sylvester High School. Access important school information, curriculum details, announcements, and online learning resources all in one place.",
    link: "https://sylvesterhighschool.com",
    buttonText: "View Project",
  },
  {
    imgSrc: schoolsite,
    title: "Sylvester School",
    description:
      "This website serves as the central hub for students, parents, and faculty at Sylvester High School. Access important school information, curriculum details, announcements, and online learning resources all in one place.",
    link: "https://sylvesterhighschool.com",
    buttonText: "View Project",
  },
  {
    imgSrc: schoolsite,
    title: "Sylvester School",
    description:
      "This website serves as the central hub for students, parents, and faculty at Sylvester High School. Access important school information, curriculum details, announcements, and online learning resources all in one place.",
    link: "https://sylvesterhighschool.com",
    buttonText: "View Project",
  },
  {
    imgSrc: schoolsite,
    title: "Sylvester School",
    description:
      "This is another project focused on enhancing the online presence and learning experience for students and staff at Sylvester High School.",
    link: "https://sylvesterhighschool.com",
    buttonText: "View Project",
  },
];


function LandingPage() {

  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = "service_tea318k";
    const templateID = "template_dnr27fv";
    const publicKey = "9m7Kbm9CSJHDtsygZ";

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Failed to send message. Please try again.");
      });
  };

    // Determine if the layout is mobile based on the screen size
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box overflowX="auto" mt={19} textAlign="center" lineHeight="1.6" fontSize="lg" bgColor="black">
      <NavBar />

      <Element name="home">
        <Flex
          alignItems="center"
          direction={['column', 'column', 'row']}
          mb={10}
          paddingInline="50px"
          justify="center"
        >
          <Box flex="1" bg="grey" color="#ffff" p={6} borderRadius="md">
            <Heading fontSize={['2xl', 'lg', '4xl']}>Onogwu Emmanuel</Heading>
            <Text mt={4} mb={6} textAlign="justify" fontWeight="bold" fontSize={['sm', 'sm', 'md']}>
              I'm a passionate frontend developer with a sharp eye for design and user experience. 
              Specializing in building responsive, dynamic and engaging interfaces. 
              I combine creativity with the latest web technologies to deliver seamless user experiences. 
              Whether working on complex web apps or sleek single-page applications, 
              I'm committed to bringing ideas to life through clean, efficient code and intuitive UI design.
            </Text>
            <Button
            mt={2}
            _hover={{  color: "#ffff" }}
            variant="solid"
            color="#000000"
            bgColor="blue"
            fontWeight="bold"
            size="md">
              Hire Me
            </Button>
          </Box>

          <Box mt={[6, 6, 0]} ml={6}>
            <Image borderRadius="full" boxSize={['200px', '200px', '400px']} src={myonCar} alt="Profile Image" />
          </Box>
        </Flex>
      </Element>

      <Element name="about">
        <Flex
          alignItems="center"
          direction={['column', 'column', 'row']}
          mb={10}
          paddingInline="50px"
          justify="center"
        >
          <Box flex="1" bg="grey" color="white" p={6} borderRadius="md">
            <Heading fontSize={['2xl', 'lg', '4xl']}>About Me</Heading>
            <Text mt={4} mb={6} textAlign="justify" fontWeight="bold" fontSize={['sm', 'sm', 'md']}>
              I'm a passionate frontend developer with a sharp eye for design and user experience. 
              Specializing in building responsive, dynamic and engaging interfaces. 
              I combine creativity with the latest web technologies to deliver seamless user experiences. 
              Whether working on complex web apps or sleek single-page applications, 
              I'm committed to bringing ideas to life through clean, efficient code and intuitive UI design.
            </Text>
            <Button
            mt={2}
            _hover={{  color: "#ffff" }}
            variant="solid"
            color="#000000"
            bgColor="blue"
            fontWeight="bold"
            size="md">
              Download CV
            </Button>
          </Box>

          <Box mt={[6, 6, 0]} ml={6}>
            <Image borderRadius="full" boxSize={['200px', '200px', '400px']} src={myonblue} alt="Profile Image" />
          </Box>
        </Flex>
      </Element>

      <Element name="my-works">
        <Box
        bg="black"
        color="white"
        mt={5}
        borderRadius="md"
        mb={10}
        paddingInline="50px"
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
        overflowX="hidden" // Prevent horizontal scroll for the entire box
      >
        <Heading fontSize={['2xl', '2xl', '3xl']} my={5} color="black">
          My Work Gallery
        </Heading>

        {isMobile ? (
          // Sliding layout for mobile
          <Box
            display="flex"
            overflowX="scroll"
            scrollSnapType="x mandatory"
            width="100%"
            padding="10px" // Add some padding for better mobile experience
          >
            {projects.map((project, index) => (
              <Box
                key={index}
                minWidth="90vw" // Each card takes 90% of the viewport width
                scrollSnapAlign="start"
                p={5}
                mx={3} // Margin between slides
                bg="grey"
                borderRadius="10px"
                color="white"
                textAlign="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                {/* Project Image */}
                <Box
                  width="100%"
                  height="150px" // Smaller image for mobile
                  overflow="hidden"
                  borderRadius="10px"
                  mb={3}
                >
                  <img
                    src={schoolsite}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* Project Details */}
                <Box>
                  <Heading fontSize="md" mb={2}>
                    {project.title}
                  </Heading>
                  <Text mb={4} fontWeight="bold" fontSize="sm">
                    {project.description}
                  </Text>
                  <Button
                    mt={2}
                    variant="solid"
                    bgColor="blue"
                    color="black"
                    fontWeight="bold"
                    size="sm"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    {project.buttonText}
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          // Grid layout for larger screens
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
            gap={6}
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            {projects.map((project, index) => (
              <Box
                key={index}
                bg="grey"
                borderRadius="10px"
                color="white"
                p={5}
                textAlign="center"
                mx="auto"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                {/* Project Image */}
                <Box
                  width="100%"
                  height="200px" // Larger image for larger screens
                  overflow="hidden"
                  borderRadius="10px"
                  mb={4}
                >
                  <img
                    src={schoolsite}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* Project Details */}
                <Heading fontSize={['md', 'lg', 'xl']} mb={2}>
                  {project.title}
                </Heading>
                <Text mb={4} fontWeight="bold" fontSize={['sm', 'md', 'lg']}>
                  {project.description}
                </Text>
                <Button
                  mt={2}
                  _hover={{ color: "#ffff" }}
                  variant="solid"
                  color="#000000"
                  bgColor="blue"
                  fontWeight="bold"
                  size="md"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  {project.buttonText}
                </Button>
              </Box>
            ))}
          </Grid>
        )}
        </Box>

      </Element>

      <Element name="contact">
          <Heading fontSize={['2xl', '2xl', '3xl']} color="#ffff">
            Contact Me
          </Heading>
        <Box bg="grey" display="flex" justifyContent="center" paddingInline="50px" alignItems="center" h="70vh">

          <form onSubmit={sendEmail} >
            <FormControl>
              <FormLabel color="#ffff">Email</FormLabel>
              <Input
                minW={['300px', '300px', '700px']}
                bgColor="#ffff"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                borderColor="purple.500"
              />
            </FormControl>

            <FormControl>
              <FormLabel color="#ffff">Mobile</FormLabel>
              <Input
                bgColor="#ffff"
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                borderColor="purple.500"
              />
            </FormControl>

            <FormControl>
              <FormLabel color="#ffff">Message</FormLabel>
              <Textarea
                bgColor="#ffff"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                borderColor="purple.500"
              />
            </FormControl>

            <Button
            mt={2}
            _hover={{  color: "#ffff" }}
            variant="solid"
            color="#000000"
            bgColor="blue"
            fontWeight="bold"
            size="md">
              Send Message
            </Button>
          </form>
        </Box>
      </Element>
    </Box>
  );
}

export default LandingPage;








