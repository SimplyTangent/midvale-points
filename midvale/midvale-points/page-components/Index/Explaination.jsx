import { Container, Spacer, Wrapper } from '@/components/Layout';
import styles from './Explaination.module.css';
import { useState, useEffect } from 'react';
import video_thumbnail from '@/assets/video_thumbnail.png';
import video_thumbnail_2 from '@/assets/video_thumbnail_2.png';
import { Button, Modal, Box, Input } from '@mui/material';
import 'aos/dist/aos.css'; // You can also use <link> for styles


// ..

const Explanation = () => {


  const [index, setIndex] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  const VideoModal = () => {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
    
            
          <iframe
              className={styles.video}
              id="video"
              src={'https://www.youtube.com/embed/vlwmjElwzYI/'}
              frameBorder="0"
              allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              autop
            />
         
        </Box>
      </Modal>
    );
  };


  return (

  
      <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.text}>
          <h1>What is Bookwheel?</h1>
          <p>
            Bookwheel is an interactive platform where students can test their
            knowledge on books they read, earn rewards, and engage in friendly
            competition among their classmates. Watch our video to learn more!
          </p>
        </div>
      </div>
      <div className={styles.right}>
      
            <img src={video_thumbnail.src}
            className={styles.thumbnail}
            onClick={handleOpen} />  
     

            <VideoModal />

      </div>
    </div>

   
  );
};

export default Explanation;
