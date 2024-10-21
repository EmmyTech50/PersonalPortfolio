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
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { Element } from "react-scroll";
import NavBar from "./NavBar";
import emailjs from '@emailjs/browser';
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

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

      <Element name="aboutme">
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

      <Element name="myworks">
  <Box
    bg="#ffff"
    color="white"
    p={[4, 6, 8]}
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

    <Flex justifyContent="center" alignItems="center" position="relative">
      {/* Previous Slide Button */}
      <IconButton
        bg="#ffff"
        fontSize={['20px', '30px']}
        color="purple"
        aria-label="Previous"
        icon={<ArrowBackIcon />}
        onClick={prevSlide}
        position="absolute"
        left={['10px', '20px', '30px']}
        zIndex="1"
        _hover={{ bg: "purple.100" }}
      />

      {/* Carousel Container */}
      <Flex
        width="100%"
        position="relative"
        height={['auto', 'auto', '70vh']} // Adjusting height for small screens
        overflow="hidden"
      >
        <Flex
          transform={`translateX(-${currentIndex * 100}%)`}
          transition="transform 0.5s ease-in-out"
          width={`${projects.length * 100}%`}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              minW={['90%', '90%', '100%']}  // Reduced width on small screens
              mx={['auto', 'auto', '0']}    // Centered the box on small screens
              display="flex"
              alignItems="center"
              bg="purple.500"
              borderRadius="10px"
              color="white"
            >
              <Flex
                direction={['column', 'column', 'row']}
                alignItems="center"
                w="100%"
                h="100%"
              >
                {/* Project Image */}
                <Box
                  flex="1"
                  height={['auto', 'auto', '100%']}  // Adjust image height on smaller screens
                  width="100%"
                  overflow="hidden"
                  borderRadius="10px"
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
                <Box
                  flex="1"
                  p={[4, 6]}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  textAlign={['center', 'left']}
                  height="100%"
                >
                  <Heading fontSize={['md', 'lg', '2xl']} mb={4}>
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
              </Flex>
            </Box>
          ))}
        </Flex>
      </Flex>

      {/* Next Slide Button */}
      <IconButton
        bg="#ffff"
        fontSize={['20px', '30px']}
        color="purple"
        aria-label="Next"
        icon={<ArrowForwardIcon />}
        onClick={nextSlide}
        position="absolute"
        right={['10px', '20px', '30px']}
        zIndex="1"
        _hover={{ bg: "purple.100" }}
      />
    </Flex>
  </Box>
</Element>


      <Element name="contactme">
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
