import { navigate } from 'gatsby';
import * as React from 'react';
import { Button } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';

type Props = {
  siteTitle: string;
};

const Header: React.FC<Props> = () => {
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
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* eslint-disable-next-line */}
        <Button size="large" onClick={() => navigate('/')} rounded bordered>
          TOP
        </Button>
        <div>
          {/* eslint-disable-next-line */}
          <Button size="large" onClick={() => navigate('/blog')} rounded bordered>
            Blog
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
