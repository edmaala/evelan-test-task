import React, { ReactNode } from 'react';
import Head from 'next/head';
import classes from './MainLayout.module.css';

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>User List | Evelan GmbH</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
        />
        <meta
          name='description'
          content='Author: E. Maala; Page created as required by Evelan GmbH'
        />
        <meta property='og:title' content='User List Social Media Preview'/>
        <meta name='twitter:card' content='summary' />
        <meta property='og:image' content='/email-pattern.png' />
      </Head>
      <main className={classes.mainLayout}>{children}</main>
    </>
  );
};

type Props = {
  children: ReactNode;
};

export default MainLayout;
