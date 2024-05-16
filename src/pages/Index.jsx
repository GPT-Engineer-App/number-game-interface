import { useState } from "react";
import { Container, Text, VStack, Button, HStack, Input, Box } from "@chakra-ui/react";
import { FaDice } from "react-icons/fa";

const Index = () => {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const checkGuess = () => {
    if (parseInt(inputValue) === number) {
      alert("Congratulations! You guessed the number.");
    } else {
      alert("Try again!");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Number Guessing Game</Text>
        <Button leftIcon={<FaDice />} colorScheme="teal" onClick={generateRandomNumber}>
          Generate Random Number
        </Button>
        <Box>
          <Text>Enter your guess:</Text>
          <HStack spacing={2}>
            <Input value={inputValue} onChange={handleInputChange} placeholder="Enter a number between 1 and 100" />
            <Button colorScheme="blue" onClick={checkGuess}>
              Guess
            </Button>
          </HStack>
        </Box>
        <Text>Generated Number: {number}</Text>
      </VStack>
    </Container>
  );
};

export default Index;
