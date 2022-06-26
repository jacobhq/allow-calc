import React from 'react';
import { Box, ChakraProvider, Container, Divider, FormControl, FormLabel, Heading, HStack, Switch, Text } from '@chakra-ui/react'
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return <ChakraProvider>
    <Container maxW="container.sm">
      <Box mt={8}>
        <Heading>{title}</Heading>
        <Text mt={2} fontSize={16}>Configure allow-calc here.</Text>
      </Box>
      <Divider my={6} />
      <Box mt={6}>
        <FormControl>
          <HStack justifyContent="space-between">
            <FormLabel>Enable extension</FormLabel>
            <Switch />
          </HStack>
        </FormControl>
      </Box>
    </Container>
  </ChakraProvider>;
};

export default Options;
