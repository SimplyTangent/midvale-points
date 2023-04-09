import styles from "./Signup.module.css";
import truck from '@/assets/truck.png';
import { TextField } from "@mui/material";
import { Container } from "@/components/Layout";
import {IconButton} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import { fetcher } from "@/lib/fetch";
import toast from "react-hot-toast";

export const Signup = ({}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    const [isLoading, setIsLoading] = useState(false);


    const onNameChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const onEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }


    const onSubmit = 
        async (e) => {
          e.preventDefault();
          try {
            setIsLoading(true);
            await fetcher('/api/newsletter', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                name, email
            }),
            });
            toast.success('You have posted successfully');
          } catch (e) {
            toast.error(e.message);
          } finally {
            setIsLoading(false);
          }
        }
  


    return <div className={styles.root}>
        <div className={styles.left}>
        <img className={styles.truck} src={truck.src} />
        </div>
        <div className={styles.right}>
            <div className={styles.signupBox}>
                <h1>Wheel the gift of reading into your classrooms.</h1>
                <p>Sign up for our monthly newsletter today!</p>
                <Container className={styles.fields} justifyContent="space-between" alignItems="center">
                    <TextField
                        id="outlined-number"
                        size="small"
                        onChange={onNameChange}
                        label="Name"
                        variant="filled"
                        inputProps={{
                        style: {
                            fontFamily: 'Nunito',
                            fontWeight: 700,
                            border: 'solid 2px '

                        },
                        }}
                        InputLabelProps={{
                        style: {
                            color: 'black',
                            fontFamily: 'Nunito',
                            fontWeight: 500,
                        },
                        }}
                        className={styles.email}
                    />
                    <TextField
                        id="outlined-number"
                        size="small"
                        label="Email"
                        variant="filled"
                        inputProps={{
                        style: {
                            fontFamily: 'Nunito',
                            fontWeight: 700,
                            border: 'solid 2px '

                        },
                        }}
                        InputLabelProps={{
                        style: {
                            color: 'black',
                            fontFamily: 'Nunito',
                            fontWeight: 500,
                        },
                        }}
                        className={styles.email}
                        onChange={onEmailChange}
                    />
                    <div className={styles.buttonWrapper}>
                        <IconButton type="submit" aria-label="search" className={styles.iconbutton} onClick={onSubmit}>
                            <ArrowForwardIcon className={styles.icon} style={{ fill: 'black' }} fontSize="large" />
                        </IconButton>
                 </div>
                </Container>
                
            </div>
        </div>
        
    </div>

}


export default Signup;