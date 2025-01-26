import React from "react";
import styled from "styled-components";

export const ColorText = styled.h3`
  display: inline;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.$col};
`;
