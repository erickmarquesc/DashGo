import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface IProfileProps{
  showProfileData: boolean;
}
export function Profile({showProfileData}: IProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Erick Marques</Text>
        <Text color="gray.300" fontSize="small">erick.marquesc@hotmail.com</Text>
      </Box>
      )}
      <Avatar size="md" name="Erick Marques" src="https://avatars.githubusercontent.com/u/56804790?v=4" />
    </Flex>
  );
}