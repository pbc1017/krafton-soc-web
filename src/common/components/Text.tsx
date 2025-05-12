import styled from "@emotion/styled";
import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  color?: string;
  fs?: string;
  fw?: string | number;
  lh?: string;
  ff?: string;
  whiteSpace?: string;
}

interface StyledTextProps {
  color?: string;
  fs?: string;
  fw?: string | number;
  lh?: string;
  ff?: string;
  whiteSpace?: string;
}

const StyledText = styled.div<StyledTextProps>`
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ fs }) => fs || "inherit"};
  font-weight: ${({ fw }) => fw || "inherit"};
  line-height: ${({ lh }) => lh || "inherit"};
  font-family: ${({ ff }) => ff || "inherit"};
  white-space: ${({ whiteSpace }) => whiteSpace || "pre-wrap"};
`;

const processNewlines = (text: string): React.ReactNode => {
  if (!text.includes("\\n")) return text;

  return text.split("\\n").map((line, index, array) => (
    <React.Fragment key={index}>
      {line}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));
};

const Text = ({
  children,
  color,
  fs,
  fw,
  lh,
  ff,
  whiteSpace,
  ...props
}: TextProps) => {
  const styledProps: StyledTextProps = { color, fs, fw, lh, ff, whiteSpace };

  const processedChildren =
    typeof children === "string" ? processNewlines(children) : children;

  return (
    <StyledText {...styledProps} {...props}>
      {processedChildren}
    </StyledText>
  );
};

export default Text;
