import { Box, Container } from '@chakra-ui/react';
import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
}
