import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Box, Button, Flex, Link, IconButton, VStack, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w="100%"
      h="10vh"
      mb={10}
      bgColor="black" // The body background remains black
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        h="100%"
        w="100%"
        bgColor="black" // This will allow the black to extend fully across the screen
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          w={['90%', '85%', '94%']} // Set a limited width for the grey header
          paddingInline={['20px', '30px', '50px']}
          h="100%"
          bgColor="grey" // Header (links and button) background is grey and contained within limited width
          borderRadius="md" // Optional: Add a slight border radius for aesthetics
        >
          {/* Links Section */}
          <Flex display={['none', 'none', 'flex']} gap={2} color="#000000">
            {['home', 'about', 'my-works', 'contact'].map((section) => (
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
                  mx={2}
                  as="span"
                  fontWeight="bold"
                  size="lg"
                  cursor="pointer"
                  _hover={{ color: "#ffff" }}
                  _activeLink={{ color: 'purple.500' }} // Active state color
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
                </Box>
              </ScrollLink>
            ))}
          </Flex>

          {/* Hamburger Icon for small screens */}
          <IconButton
            bgColor="grey"
            aria-label="Open Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={['flex', 'flex', 'none']}
            onClick={isOpen ? onClose : onOpen}
          />

          {/* Social Links Section */}
          <Flex gap={2} justify="center" alignItems="center">
            <Button
              _hover={{ color: "#ffff" }}
              variant="solid"
              color="#000000"
              bgColor="blue"
              fontWeight="bold"
              size="md"
              onClick={() => window.open('/path-to-your-cv-file.pdf', '_blank')}
            >
              Download CV
            </Button>
            {[
              { icon: <FaGithub />, link: "https://github.com/EmmyTech50" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/emmanuel-onogwu-650092239/" },
              { icon: <FaFacebook />, link: "https://web.facebook.com/profile.php?id=61562327864984" },
              { icon: <FaTwitter />, link: "https://x.com/EmmyTech50" }
            ].map(({ icon, link }, index) => (
              <Link href={link} isExternal key={index}>
                {React.cloneElement(icon, { size: '15px', color: 'black' })}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <VStack
          fontWeight="bold"
          pos="absolute"
          top="15vh"
          left="0"
          w="50%"
          color="#ffff"
          bg="black"  // Mobile menu background can remain black
          zIndex={10}
          spacing={6}
          p={4}
          display={['flex', 'flex', 'none']}
        >
          {['home', 'about', 'my-works', 'contact'].map((section) => (
            <ScrollLink
              key={section}
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
