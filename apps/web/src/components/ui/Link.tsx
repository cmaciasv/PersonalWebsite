import NextLink from 'next/link';
import React from 'react';

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ href, children, className, ...props }) => {
  return (
    <NextLink href={href} className={`link-hover-light ${className || ''}`} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;