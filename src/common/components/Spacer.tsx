import styled from "@emotion/styled";

import { theme } from "@krafton-soc/common/styles/theme";

interface SpacerProps {
  width?: number | string;
  height?: number | string;
}

const Spacer = styled.div<SpacerProps>`
  flex-shrink: 0;
  width: ${({ width }) =>
    typeof width === "number" ? `${width}px` : width || "0px"};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height || "0px"};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 0px !important;
    height: 0px !important;
  }
`;

export default Spacer;
