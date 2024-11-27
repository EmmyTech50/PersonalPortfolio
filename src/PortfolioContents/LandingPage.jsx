import React from 'react';
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
  Stack
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import myonCar from '../assets/myonCar.jpeg';

const MotionBox = motion(Box);

const projects = [
  { title: 'Sylvester High School', description: 'A Hub for every single activity.' },
  { title: 'MSN Church', description: 'A site for Mission outreach.' },
  { title: 'Neco Portal', description: 'Result-Checking and other services.' },
  { title: 'BlockWare', description: 'An Organization that renders job opportunities.' },
];

const swingInVariants = {
  hidden: { rotate: -90, opacity: 0, x: -50 },
  visible: (i) => ({
    rotate: 0,
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: i * 0.2, stiffness: 200 },
  }),
};

const LandingPage = () => {
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
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading fontSize={['3xl', '4xl', '5xl']}>Hello, I'm Onogwu Emmanuel</Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Text fontSize={['sm', 'md', 'lg']} fontWeight="light">
              I'm a passionate frontend developer creating intuitive, modern, and responsive designs. 
              I specialize in combining creativity with code to craft delightful user experiences.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button
              as={Link}
              href="/CV/ONOGWU EMMANUEL (2).docx" // Path to your CV file
              download="ONOGWU EMMANUEL (2).docx"
              colorScheme="teal"
              variant="solid"
              size="lg"
              _hover={{ transform: 'scale(1.05)', bg: 'teal.400' }}
            >
              Download CV
            </Button>
          </MotionBox>

          {/* Social Media Icons with Swing-In Animation */}
          <Flex gap={4} mt={4}>
            {[
              { icon: FaGithub, link: 'https://github.com' },
              { icon: FaLinkedin, link: 'https://linkedin.com' },
              { icon: FaTwitter, link: 'https://twitter.com' },
            ].map((item, index) => (
              <MotionBox
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={swingInVariants}
              >
                <Link href={item.link} target="_blank">
                  <Icon
                    as={item.icon}
                    boxSize={6}
                    _hover={{ color: 'gray.300' }}
                  />
                </Link>
              </MotionBox>
            ))}
          </Flex>
        </VStack>

        {/* Right Section - Image */}
        <MotionBox
          flex="1"
          textAlign="center"
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 2, scale: 1 }}
          transition={{ duration: 5, ease: 'easeOut' }}
        >
          <Image
            src={myonCar} // Replace with your professional image
            alt="Profile Image"
            borderRadius="full"
            boxSize={['400px', '450px', '500px']}
          />
        </MotionBox>
      </Flex>

      {/* Projects Section */}
      <Heading mb={4} textAlign="center">
        Projects
      </Heading>
      {/* Cards Container */}
      <Flex
        wrap="nowrap"
        gap={6}
        overflowX={['auto', 'auto', 'unset']} // Enables horizontal scroll on small screens
        justify={['flex-start', 'flex-start', 'center']} // Centers content on larger screens
        px={[4, 6, 0]} // Adds padding on smaller screens, removes on larger screens
      >
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            p={4}
            minW={['250px', '300px', '300px']} // Minimum width for smaller screens
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            flexShrink={0} // Prevents card shrinking on smaller screens
          >
            {/* Card Content */}
            <Card>
              <CardBody>
                <Stack spacing={4}>
                  <Heading size="md">{project.title}</Heading>
                  <Text>{project.description}</Text>
                  <Button
                    colorScheme="teal"
                    variant="solid"
                    size="sm"
                    width="full"
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
      <Box mt={16} p={6} bg="teal.600" borderRadius="md">
        <Heading mb={4} textAlign="center">Contact Me</Heading>
        <Flex
          direction={['column', 'row']}
          gap={8}
          justify="space-between"
          maxW="800px"
          mx="auto"
          color="white"
        >
          {/* Contact Info */}
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

          {/* Contact Form */}
          <VStack spacing={4} flex="1">
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" bg="white" color="black" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your Email" bg="white" color="black" />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" bg="white" color="black" />
            </FormControl>
            <Button colorScheme="blue" width="full" _hover={{ bg: 'blue.400' }}>
              Submit
            </Button>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default LandingPage;
