import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';
import { useState, useEffect } from 'react';
import kid_readin1 from '@/assets/kid_readin1.png';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const Hero = () => {
  const Router = useRouter();

  const goToSignUp = (e) => {
    e.preventDefault();
    Router.push({
      pathname: '/students/sign-up',
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <Container className={styles.hero} column>
          <h1>
            <span className={styles.books}>Upgrade</span> reading in your{' '}
            <span className={styles.emph}>classrooms</span>
          </h1>
          <p>
            Ignite the next generation of readers through Bookwheel to motivate
            students and make reading fun. So, what are you waiting for? Get
            started today! Free for teachers, forever.
          </p>

          <Button onClick={goToSignUp} className={styles.login}>
            Get Started
          </Button>
        </Container>
      </div>
      <div className={styles.right}>
          <img className={styles.picture} src={kid_readin1.src} />
      
      </div>
    </div>
  );
};

export default Hero;
