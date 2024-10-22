import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { Element } from "react-scroll";
import NavBar from "./NavBar";
import emailjs from '@emailjs/browser';

const projects = [
  {
    imgSrc: "src/schoolsite.png",
    title: "Education Website for Sylvester High School",
    description:
      "This website serves as the central hub for students, parents, and faculty at Sylvester High School. Access important school information, curriculum details, announcements, and online learning resources all in one place.",
    link: "https://sylvesterhighschool.com",
    buttonText: "View Project",
  },
  {
    imgSrc: "src/schoolsite.png",
    title: "Education Website for Sylvester High School",
    description:
      "This website serves as the central hub for students, parents, and faculty at Sylvester High School. Access important school information, curriculum details, announcements, and online learning resources all in one place.",
    link: "https://sylvesterhighschool.com",
    buttonText: "View Project",
  },
  {
    imgSrc: "src/schoolsite.png",
    title: "Education Website for Sylvester High School",
    description:
      "This website serves as the central hub for students, parents, and faculty at Sylvester High School. Access important school information, curriculum details, announcements, and online learning resources all in one place.",
    link: "https://sylvesterhighschool.com",
    buttonText: "View Project",
  },
  {
    imgSrc: "src/schoolsite.png",
    title: "Another Project for Sylvester High School",
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

  return (
    <Box overflowX="auto" textAlign="center" lineHeight="1.6" fontSize="lg">
      <NavBar />

      <Element name="home">
        <Flex
          alignItems="center"
          direction={['column', 'column', 'row']}
          mb={10}
          paddingInline="50px"
          justify="center"
        >
          <Box flex="1" bg="purple.500" color="white" p={6} borderRadius="md">
            <Heading fontSize="4xl">Onogwu Emmanuel</Heading>
            <Text mt={4} mb={6} textAlign="justify" fontWeight="bold">
              I'm a passionate frontend developer with a sharp eye for design and user experience. 
              Specializing in building responsive, dynamic and engaging interfaces. 
              I combine creativity with the latest web technologies to deliver seamless user experiences. 
              Whether working on complex web apps or sleek single-page applications, 
              I'm committed to bringing ideas to life through clean, efficient code and intuitive UI design.
            </Text>
            <Button colorScheme="whiteAlpha" size="lg">Hire Me</Button>
          </Box>

          <Box mt={[6, 6, 0]} ml={6}>
            <Image borderRadius="full" boxSize="400px" src="src/myonCar.jpeg" alt="Profile Image" />
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
          <Box flex="1" bg="purple.500" color="white" p={6} borderRadius="md">
            <Heading fontSize="4xl">About Me</Heading>
            <Text mt={4} mb={6} textAlign="justify" fontWeight="bold">
              I'm a passionate frontend developer with a sharp eye for design and user experience. 
              Specializing in building responsive, dynamic and engaging interfaces. 
              I combine creativity with the latest web technologies to deliver seamless user experiences. 
              Whether working on complex web apps or sleek single-page applications, 
              I'm committed to bringing ideas to life through clean, efficient code and intuitive UI design.
            </Text>
            <Button colorScheme="whiteAlpha" size="lg">Download CV</Button>
          </Box>

          <Box mt={[6, 6, 0]} ml={6}>
            <Image borderRadius="full" boxSize="400px" src="src/myonblue.jpeg" alt="Profile Image" />
          </Box>
        </Flex>
      </Element>

      <Element name="my-works">
        <Box
          bg="#ffff"
          color="white"
          mt={30}
          borderRadius="md"
          mb={10}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          overflowX="hidden" // Prevent horizontal scroll
        >
          <Heading fontSize={['2xl', '2xl', '3xl']} my={5} color="black">
            My Work Gallery
          </Heading>

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
                mx="auto"
                bg="purple.500"
                borderRadius="10px"
                color="white"
                p={5}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                {/* Project Image */}
                <Box
                  width="100%"
                  height="200px"
                  overflow="hidden"
                  borderRadius="10px"
                  mb={4}
                >
                  <img
                    src={project.imgSrc}
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
                  <Heading fontSize={['md', 'lg', 'xl']} mb={2}>
                    {project.title}
                  </Heading>
                  <Text mb={4} fontWeight="bold" fontSize={['sm', 'md', 'lg']}>
                    {project.description}
                  </Text>
                  <Button
                    colorScheme="whiteAlpha"
                    mt={2}
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    {project.buttonText}
                  </Button>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Element>

      <Element name="contact">
          <Heading fontSize={['2xl', '2xl', '3xl']} color="#00000">
            Contact Me
          </Heading>
        <Box bg="purple.500" display="flex" justifyContent="center" alignItems="center" h="70vh">

          <form onSubmit={sendEmail} >
            <FormControl  >
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

            <Button type="submit" mt={4} colorScheme="whiteAlpha" size="lg">
              Send Message
            </Button>
          </form>
        </Box>
      </Element>
    </Box>
  );
}

export default LandingPage;


