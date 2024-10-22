import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Box, Button, Flex, Link, IconButton, VStack, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100%" h="15vh" mb={10} position="relative" >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        paddingInline={['20px', '30px', '50px']}
        h="100%"
        w="100%"
      >
        {/* Links Section */}
        <Flex display={['none', 'none', 'flex']} gap={2} color="#000000">
          {['home', 'About', 'My-works', 'contact'].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
              className="nav-link"
            >
              <Box
                as="span"
                fontWeight="bold"
                size="lg"
                cursor="pointer"
                _hover={{ color: 'purple.500' }}
                _activeLink={{ color: 'purple.500' }} // Active state color
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
              </Box>
            </ScrollLink>
          ))}
        </Flex>

        {/* Hamburger Icon for small screens */}
        <IconButton
          bgColor='#ffff'
          aria-label="Open Menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={['flex', 'flex', 'none']}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Social Links Section */}
        <Flex gap={2} justify="center" alignItems="center">
          <Button variant="solid" colorScheme="purple" fontWeight="bold" size="md">
            Download CV
          </Button>
          {[ 
            { icon: <FaGithub />, link: "https://github.com/EmmyTech50" }, 
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/emmanuel-onogwu-650092239/" }, 
            { icon: <FaFacebook />, link: "https://web.facebook.com/profile.php?id=61562327864984" }, 
            { icon: <FaTwitter />, link: "https://x.com/EmmyTech50" } 
          ].map(({ icon, link }, index) => (
            <Link href={link} isExternal key={index}>
              {React.cloneElement(icon, { size: '15px', color: 'purple' })}
            </Link>
          ))}
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <VStack
          fontWeight="bold"
          pos="absolute"
          top="15vh"
          left="0"
          w="100%"
          bg="white"
          zIndex={10}
          spacing={6}
          p={4}
          display={['flex', 'flex', 'none']}
        >
          {['home', 'aboutme', 'myworks', 'contact'].map((section) => (
            <ScrollLink
              key={section}
              fontWeight="bold"
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
              className="nav-link"
              onClick={onClose}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
            </ScrollLink>
          ))}
        </VStack>
      )}
    </Box>
  );
}

export default NavBar;