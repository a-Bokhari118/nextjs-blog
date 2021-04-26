import {
  Box,
  Heading,
  Image,
  Flex,
  Text,
  VStack,
  Container,
} from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box bg='#221e23'>
      <Container maxW='4xl'>
        <VStack direction='column' textAlign={'center'}>
          <Image
            mt='10'
            src='/images/site/max.png'
            alt='Max image'
            rounded='full'
            width={{ base: '250px', md: '300px' }}
            height={{ base: '250px', md: '300px' }}
            bg='#7d7982'
          />

          <Heading
            as='h1'
            fontSize={{ base: '3xl', md: '5xl' }}
            pt='8'
            color='#7d7982'
          >
            HI, I AM MAX
          </Heading>
          <Text
            fontSize={{ base: '2xl', md: '3xl' }}
            pt='6'
            color='#7d7982'
            pb='6'
          >
            I blog about web development - MERN Stack
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
