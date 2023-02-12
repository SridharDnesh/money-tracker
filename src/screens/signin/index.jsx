import React, { useState } from "react";
import {
  Text,
  Input,
  Button,
  Stack,
  InputGroup,
  InputLeftElement,
  Flex,
  Link,
} from "@chakra-ui/react";
import { WithContainer } from "../../HOC";
import { HiUser, HiLockClosed } from "react-icons/hi";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Flex direction={"column"} justify={"center"} h="100%">
      <Text fontSize={"2xl"} mb={10} align="center">
        Log in
      </Text>

      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<HiUser color="gray" />}
          />
          <Input placeholder="Username" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<HiLockClosed color="gray" />}
          />
          <Input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
        </InputGroup>
      </Stack>

      <Text fontSize={"sm"} align={"right"} mt={4}>
        Forgot password?
      </Text>

      <Button colorScheme={"linkedin"} mt={12}>
        Log in
      </Button>

      <Text fontSize={"sm"} align={"center"} mt={10}>
        <Link href="/signup">
          New user?
        </Link>
      </Text>
    </Flex>
  );
}

export default WithContainer(Login);
