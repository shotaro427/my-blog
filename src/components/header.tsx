import { navigate } from 'gatsby';
import * as React from 'react';
import { Button } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';

type Props = {
  siteTitle: string;
};

const Header: React.FC<Props> = () => {
  const onClick = (): void => {
    navigate('/');
  };
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Button size="large" onClick={onClick} rounded bordered>
          TOP
        </Button>
      </div>
    </header>
  );
};

export default Header;
