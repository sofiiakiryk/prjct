import React from "react";
import styled from "styled-components";

export const ColorBlock = styled.div`
  margin: 5px;
  padding: 15px;

  background-color: ${(props) => props.$col};

  border-radius: 3px;
`;
