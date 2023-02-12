import React from "react";
import { Container } from "@chakra-ui/react";

export default (WrappedComponent) => {
  const withContainer = ({ ...props }) => (
    <Container h="100%">
      <WrappedComponent {...props} />
    </Container>
  );

  return withContainer;
};
