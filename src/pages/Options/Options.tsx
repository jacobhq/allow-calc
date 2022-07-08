import React, { useEffect, useState } from 'react';
import { Box, Button, ChakraProvider, Container, Divider, FormControl, FormLabel, Heading, HStack, Select, Switch, Text, useColorMode } from '@chakra-ui/react'
import './Options.css';

interface Props {
  title: string;
}

function Toggle() {
  let { colorMode, toggleColorMode } = useColorMode()
  let [colorSheme, setColor] = useState(colorMode)

  function onColor(color: string) {
    chrome.storage.sync.set({ colorSheme: color }, function () {
      console.log('Value colorSheme set to ' + color);
    });
    // @ts-expect-error
    setColor(color)
    if (colorMode !== color) {
      return toggleColorMode()
    }
  }

  useEffect(() => {
    chrome.storage.sync.get(['colorSheme'], function (result) {
      setColor(result.colorSheme)
    });
  })

  return <FormControl mt={2}>
    <HStack justifyContent="space-between">
      <FormLabel>Color mode</FormLabel>
      <Select w="auto" value={colorSheme} onChange={(e) => onColor(e.target.value)}>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </Select>
    </HStack>
  </FormControl>
}

const Options: React.FC<Props> = ({ title }: Props) => {
  let { colorMode, toggleColorMode } = useColorMode()
  let [enabled, setEnabled] = useState(true)

  function onEnable(checked: boolean) {
    chrome.storage.sync.set({ enabled: checked.toString() }, function () {
      console.log('Value enabled set to ' + checked);
    });
    setEnabled(checked)
  }

  useEffect(() => {
    chrome.storage.sync.get(['enabled'], function (result) {
      let isTrueSet = (result.enabled === 'true')
      setEnabled(isTrueSet)
    });
  })

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
            <Switch isChecked={enabled} onChange={(e) => onEnable(e.target.checked)} />
          </HStack>
        </FormControl>
        <Toggle />
      </Box>
    </Container>
  </ChakraProvider>;
};

export default Options;
