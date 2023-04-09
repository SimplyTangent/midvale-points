import styles from './Snippets.module.css';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import AOS from 'aos';
import quiz_ex from '@/assets/quiz_ex.png';
import main_ex from '@/assets/main_ex.png';
import log_ex from '@/assets/log_ex.png';
import clsx from 'clsx';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Snippets = () => {
//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();
//   }, []);

  return (
    <>
        <div className={clsx(styles.root, styles.ro1)}>

<div className={clsx(styles.right, styles.ri1)}>
    <div className={styles.text}>
        <h1 className={styles.mainText}>Incentivize students with points</h1>
        <p className={styles.paragraphText}>Incentivize students to read with a classwide leaderboard, level system, and unlockables that encourage friendly competition.</p>
        <ul className={styles.list}>
            <li>Students can earn points by reading books and logging their progress</li>
            <li>Students can show off thier flare with displayable badges</li>
            <li>Students at the top of the leaderboard will recieve prizes</li>
           
        </ul>
    </div>


</div>
<div className={clsx(styles.left, styles.l1)}>
    <img className={styles.phone} src={main_ex.src} />
</div>

</div>
    <div className={clsx(styles.root, styles.ro2)}>
        <div className={clsx(styles.left, styles.l2)}>
            <img className={styles.phone} src={quiz_ex.src} />
        </div>
        <div className={clsx(styles.right, styles.ri2)}>
        <div className={styles.text}>
            <h1 className={styles.mainText}>Power up and reward reading</h1>
            <p className={styles.paragraphText}>After checking for student comprehension with our many book quizzes, students will earn points that will be used to shop. 
                </p>
            <ul className={styles.list}>
                <li>Access more than 250 book quizzes, with more added everyday.</li>
                <li>Students can buy or earn hand-drawn badges with coins.</li>
                <li>arents easily join your class using any device</li>
            </ul>
        </div>
        </div>
    </div>
    <div className={clsx(styles.root, styles.ro3)}>
        <div className={clsx(styles.right, styles.ri3)}>
        <div className={styles.text}>
            <h1 className={styles.mainText}>Give students a voice with digital portfolios</h1>
            <p className={styles.paragraphText}>Students can showcase their learning by adding photos and videos to their own digital portfolios. 
                Available on Chromebooks, iPads, and any computer.</p>
            <ul className={styles.list}>
                <li>Parents easily join your class using any device</li>
                <li>arents easily join your class using any device</li>
                <li>arents easily join your class using any device</li>
            </ul>
            </div>
        </div>
        <div className={clsx(styles.left, styles.l3)}>
            <img className={styles.phone} src={log_ex.src} />
        </div>

</div>
    </>
  );
};

export default Snippets;
