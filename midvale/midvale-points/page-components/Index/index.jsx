import styles from './Index.module.css';
import { Container } from '@/components/Layout';
import { useState, useEffect, useCallback } from 'react';
import Confetti from 'react-dom-confetti';
import clsx from 'clsx';
import background from '../../public/images/background.jpg';

export const Index = ({ points }) => {
  const [confetti, setConfetti] = useState(false);

  const config = {
    angle: 90,
    spread: 100,
    startVelocity: 25,
    elementCount: 200,
    dragFriction: 0.12,
    duration: 5000,
    stagger: 3,
    width: '8px',
    height: '8px',
    perspective: '400px',
    colors: ['#64B341', '#B9F49B', '#FFC500', '#F14F93', '#E40A5B'],
  };

  const [max, setMax] = useState(-9000);
  const [one, setOne] = useState(-9000);
  const [two, setTwo] = useState(-9000);
  const [three, setThree] = useState(-9000);
  const [four, setFour] = useState(-9000);
  const [five, setFive] = useState(-9000);
  const [six, setSix] = useState(-9000);

  const [period, setPeriod] = useState('...');

  useEffect(() => {
    load();
  }, []);

  const load = useCallback(() => {
    var localMax = 0;
    for (let i = 0; i < points.length; i++) {
      switch (points[i].team) {
        case 'one':
          setOne(parseInt(points[i].points));
          localMax = Math.max(localMax, parseInt(points[i].points));
          break;
        case 'two':
          setTwo(parseInt(points[i].points));
          localMax = Math.max(localMax, parseInt(points[i].points));
          break;
        case 'three':
          setThree(parseInt(points[i].points));
          localMax = Math.max(localMax, parseInt(points[i].points));
          break;
        case 'four':
          setPeriod(points[i].points);
        default:
          break;
      }
      setMax(localMax);
      setConfetti(true);
    }
  }, []);

  return (
    <Container
      className={styles.root}
      style={{
        backgroundColor: `#7cffcb`,
        backgroundImage: `linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%)`,
      }}
      column
    >
      <Container className={styles.heading} column>
        <h1>On-Time Competition</h1>

        <p>
          Winning grade will have food, fun, and friendship on May 18th!
        </p>
      </Container>

      <Container className={clsx(styles.heading, styles.mystery)} column>
        <h1>
          Mystery Period: <span className={styles.period}>{period}</span>
        </h1>
      </Container>
      <Container className={styles.main}>
        <div
          className={clsx(styles.bar, styles.first)}
          style={{
            height: `calc(20vh + ${one}px)`,
            boxShadow: `5px 10px 0px 0px`,
            transtion: 'height',
            color: 'rgba(0,0,0,0.8)',
          }}
        >
          <h1 className={styles.text}>{Math.trunc(one)}</h1>
          {period !== '...' && <h3>6th</h3>}
          {max == one && (
            <Confetti
              active={confetti}
              config={config}
              className={styles.confetti}
            />
          )}
        </div>

        <div
          className={clsx(styles.bar, styles.second)}
          style={{
            height: `calc(20vh + ${two}px)`,
            boxShadow: `5px 10px 0px 0px`,
            transtion: 'height',
            color: 'rgba(0,0,0,0.8)',
          }}
        >
          <h1 className={styles.text}>{Math.trunc(two)}</h1>
          {period !== '...' && <h3>7th</h3>}
          {max == two && (
            <Confetti
              active={confetti}
              config={config}
              className={styles.confetti}
            />
          )}
        </div>

        <div
          className={clsx(styles.bar, styles.third)}
          style={{
            height: `calc(20vh + ${three}px)`,
            boxShadow: `5px 10px 0px 0px`,
            transtion: 'height',
            color: 'rgba(0,0,0,0.8)',
          }}
        >
          <h1 className={styles.text}>{Math.trunc(three)}</h1>
          {max == three && (
            <Confetti
              active={confetti}
              config={config}
              className={styles.confetti}
            />
          )}
          {period !== '...' && <h3>8th</h3>}
        </div>
      </Container>
    </Container>
  );
};
