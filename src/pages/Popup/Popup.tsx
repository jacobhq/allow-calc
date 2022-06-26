import React, { useEffect, useState } from 'react';
import { Box, Button, Center, ChakraProvider, Container, Divider, FormControl, FormLabel, Heading, HStack, Link, Select, Switch, Text, useColorMode } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface Props {
  title: string;
}

const Options: React.FC<Props> = () => {
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
      <Center mt={6} w="full">
        <Text mt={2} fontSize={16} as="b" textAlign="center" w="100%">Hegarty allow calculator</Text>
      </Center>
      <Divider my={6} />
      <Box mt={6}>
        <FormControl>
          <HStack justifyContent="space-between">
            <FormLabel fontWeight="normal">Enable extension</FormLabel>
            <Switch isChecked={enabled} onChange={(e) => onEnable(e.target.checked)} />
          </HStack>
        </FormControl>
        <FormControl mt={2}>
          <HStack justifyContent="space-between">
            <FormLabel fontWeight="normal" my="auto">Configure extension</FormLabel>
            <a href="/options.html" target="_blank">
              <Button size="sm" variant="link" rightIcon={<ExternalLinkIcon />} colorScheme="blue">Settings</Button>
            </a>
          </HStack>
        </FormControl>
      </Box>
      <Divider my={6} />
      <Text>Enabling and disabling requires reload. Support me at <Link isExternal href="https://store.jacob.omg.lol" textDecor="underline">store.jacob.omg.lol</Link>.</Text>
    </Container>
  </ChakraProvider>;
};

export default Options;
