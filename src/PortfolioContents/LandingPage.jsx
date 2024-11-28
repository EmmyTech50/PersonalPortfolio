import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  Icon,
  Link,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Card,
  CardBody,
  Stack,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import myonCar from '../assets/myonCar.jpeg';

const MotionBox = motion(Box);

const projects = [
  {
    title: 'Sylvester High School',
    description: 'A site that serves as a Hub for every single activity of the school.',
    url: 'https://sylvesterschool.vercel.app',
  },
  {
    title: 'MSN Church',
    description: 'A site that serves as a home for Missionary outreach and gospel exploration.',
    url: 'https://msn.vercel.app/',
  },
  {
    title: 'Neco Portal',
    description: 'A site that serves as a portal for checking NECO result and other services.',
    url: 'https://necoresultchecker.vercel.app/#/app/home',
  },
  {
    title: 'BlockWare',
    description: 'A site for an organization that creates and renders job opportunities.',
    url: '#',
  },
];

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the specific field
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_tea318k';
    const templateID = 'template_dnr27fv';
    const publicKey = '9m7Kbm9CSJHDtsygZ';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <Box
      bg="linear-gradient(to right, #8360c3, #2ebf91)"
      minH="100vh"
      color="white"
      p={4}
    >
      {/* Hero Section */}
      <Flex
        direction={['column', 'column', 'row']}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        p={6}
        gap={6}
      >
        {/* Left Section - Text */}
        <VStack align="start" flex="1" spacing={4}>
          <Heading fontSize={['3xl', '4xl', '5xl']}>Hello, I'm Onogwu Emmanuel</Heading>
          <Text fontSize={['sm', 'md', 'lg']} fontWeight="light">
            I'm a passionate frontend developer creating intuitive, modern, and responsive designs. 
            I specialize in combining creativity with code to craft delightful user experiences.
          </Text>
          <Button
            as={Link}
            href="/CV/ONOGWU EMMANUEL CV.docx"
            download="ONOGWU EMMANUEL CV.docx"
            colorScheme="teal"
            variant="solid"
            size="lg"
            _hover={{ transform: 'scale(1.05)', bg: 'teal.400' }}
          >
            Download CV
          </Button>
        </VStack>

        {/* Right Section - Image */}
        <MotionBox
          flex="1"
          textAlign="center"
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Image
            src={myonCar}
            alt="Profile Image"
            borderRadius="full"
            boxSize={['200px', '300px', '400px']}
          />
        </MotionBox>
      </Flex>

      {/* Projects Section */}
      <Heading mb={4} textAlign="center">
        Projects
      </Heading>
      <Flex
        wrap="nowrap"
        gap={6}
        overflowX={['auto', 'auto', 'unset']}
        justify={['flex-start', 'flex-start', 'center']}
        px={[4, 6, 0]}
      >
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            p={4}
            width="300px"
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            flexShrink={0}
          >
            <Card>
              <CardBody>
                <Stack spacing={4}>
                  <Heading size="md">{project.title}</Heading>
                  <Text>{project.description}</Text>
                  <Button
                    as={Link}
                    href={project.url}
                    colorScheme="teal"
                    variant="solid"
                    size="sm"
                    width="full"
                    isExternal
                  >
                    View
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </MotionBox>
        ))}
      </Flex>

      {/* Contact Section */}
      <Box id="contact" mt={16} p={6} bg="teal.600" borderRadius="md">
        <Heading mb={4} textAlign="center">
          Contact Me
        </Heading>
        <Flex
          direction={['column', 'row']}
          gap={8}
          justify="space-between"
          maxW="800px"
          mx="auto"
          color="white"
        >
          <VStack align="start" spacing={4} flex="1">
            <Flex align="center">
              <Icon as={FaEnvelope} mr={2} />
              <Text>Email: emmagospelnews@gmail.com</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaPhone} mr={2} />
              <Text>Phone: +234-913-685-2845</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaMapMarkerAlt} mr={2} />
              <Text>Location: Abuja, Nigeria</Text>
            </Flex>
          </VStack>

          <VStack spacing={4} flex="1">
            <form onSubmit={sendEmail}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  placeholder="Your Name"
                  bg="white"
                  color="black"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  bg="white"
                  color="black"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  bg="white"
                  color="black"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full" _hover={{ bg: 'blue.400' }} mt={5}>
                Submit
              </Button>
            </form>
          </VStack>
        </Flex>
      </Box>

      {/* Hire Me Now Button */}
      <Button
        position="fixed"
        bottom="20px"
        right="20px"
        colorScheme="orange"
        size="lg"
        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
      >
        Hire Me Now
      </Button>
    </Box>
  );
};

export default LandingPage;
