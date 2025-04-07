import styled from "@emotion/styled";
import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  color?: string;
  fs?: string;
  fw?: string | number;
  lh?: string;
  ff?: string;
}

interface StyledTextProps {
  color?: string;
  fs?: string;
  fw?: string | number;
  lh?: string;
  ff?: string;
}

const StyledText = styled.div<StyledTextProps>`
  white-space: pre-wrap;
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ fs }) => fs || "inherit"};
  font-weight: ${({ fw }) => fw || "inherit"};
  line-height: ${({ lh }) => lh || "inherit"};
  font-family: ${({ ff }) => ff || "inherit"};
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

const Text = ({ children, color, fs, fw, lh, ff, ...props }: TextProps) => {
  const styledProps: StyledTextProps = { color, fs, fw, lh, ff };

  const processedChildren =
    typeof children === "string" ? processNewlines(children) : children;

  return (
    <StyledText {...styledProps} {...props}>
      {processedChildren}
    </StyledText>
  );
};

export default Text;
