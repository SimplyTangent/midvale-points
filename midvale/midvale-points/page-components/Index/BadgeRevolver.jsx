import styles from './BadgeRevolver.module.css';
import Ticker from 'react-ticker';
import { Container } from '@/components/Layout';
export const BadgeRevolver = ({}) => {


    const badges = ['daily1', 'earth', 'smile', 'penny', 'pacman', 'ten', 'flower', 'daily2', 'pi'];
    const badge1 = require(`@/assets/badges/badge_penny_1.png`).default.src;



    return (
        <div className={styles.root}>

      

            

        </div>
    )




}

export default BadgeRevolver;