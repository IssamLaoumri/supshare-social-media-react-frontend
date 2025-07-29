import {Link} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// material-ui
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// project-imports
import AuthWrapper from "@/components/authentication/AuthWrapper.jsx";
import AuthCardWrapper from "@/components/authentication/AuthCardWrapper.jsx";
import Logo from '@/components/ui-components/Logo';
import AuthLogin from '@/components/authentication/auth-forms/AuthLogin';
import AuthRegister from '@/components/authentication/auth-forms/AuthRegister';
import BackgroundPattern from '@/components/ui-components/cards/BackgroundPattern';
import AuthSlider from '@/components/ui-components/cards/AuthSlider';
import useMeta from "@/hooks/useMeta.jsx";
import {useState} from "react";

// assets
const AuthBlueCard = '/assets/images/auth/auth-signup-blue-card.svg';
const AuthPurpleCard = '/assets/images/auth/auth-signup-white-card.svg';

// carousel items
const items = [
    {
        title: "The First Academic Social Network",
        description: "Connect with students, researchers, and professors in a purpose-built space for academic growth, collaboration, and discovery.",
    },
    {
        title: "Ask Smarter. Answer Better.",
        description: "Post questions with proposal budgets. Get answers from verified PhDs and educators who value your time and curiosity.",
    },
    {
        title: "Your School, Your Space",
        description: "Join or create rooms for your university, share notes, projects, and study materials with your peers in one secure place.",
    },
    {
        title: "Academic Clubs, Now Digital",
        description: "Give your student club a professional online presence. Launch a mini-site, manage events, and grow your academic impact.",
    },
    {
        title: "Monetize Expertise",
        description: "Educators and researchers can earn through quality answers, resources, and mentorship opportunities. Knowledge has value—get rewarded for it.",
    },
    {
        title: "No Noise. Just Knowledge.",
        description: "A distraction-free platform designed for intellectual exchange, built for serious learners, thinkers, and educators.",
    },
];

const animationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

const Login = () => {
    useMeta({
        title: "Supshare | The Academic Social Network for Students, PhDs & Professors",
        description: "Supshare is the first professional social platform built exclusively for academic communities. Share ideas, ask questions, collaborate in rooms, and empower your research and learning—all in one place.",
    });

    const [isLogin, setIsLogin] = useState(true);
    const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <AuthWrapper>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ minHeight: '100vh' }}>
                <Grid item container justifyContent="center" md={6} lg={7} sx={{ my: 3 }}>
                    <AuthCardWrapper>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    direction={{ xs: 'column-reverse', md: 'row' }}
                                    alignItems={{ xs: 'center', md: 'inherit' }}
                                    justifyContent={{ xs: 'center', md: 'space-between' }}
                                >
                                    <Grid item>
                                        <Stack justifyContent={{ xs: 'center', md: 'flex-start' }} textAlign={{ xs: 'center', md: 'inherit' }}>
                                            <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'}>
                                                Hey there!
                                            </Typography>
                                            <Typography color="textPrimary" gutterBottom variant="h5">
                                                Collaborate, share, and grow every day.
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item sx={{ mb: { xs: 3, sm: 0 } }}>
                                        <Link aria-label="theme-logo" to={"#"}>
                                            <Logo />
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <AnimatePresence mode="wait">
                                    {isLogin ? (
                                        <motion.div
                                            key="login"
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            variants={animationVariants}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <AuthLogin loginProp={1} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="register"
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            variants={animationVariants}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <AuthRegister />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid item container direction="column" alignItems="flex-end" xs={12}>
                                    {isLogin ? (
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ textDecoration: 'none', cursor: 'pointer' }}
                                            onClick={() => setIsLogin(false)}
                                        >
                                            Don&apos;t have an account?
                                        </Typography>
                                    ) : (
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ textDecoration: 'none', cursor: 'pointer' }}
                                            onClick={() => setIsLogin(true)}
                                        >
                                            Already have an account?
                                        </Typography>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </AuthCardWrapper>
                </Grid>
                <Grid item md={6} lg={5} sx={{ position: 'relative', alignSelf: 'stretch', display: { xs: 'none', md: 'block' } }}>
                    <BackgroundPattern>
                        <Grid item container alignItems="flex-end" justifyContent="center" spacing={3}>
                            <Grid item xs={12}>
                                <span />
                                <Box
                                    sx={{
                                        '&:after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: { xs: '50%', xl: '45%' },
                                            left: { xs: '25%', xl: '35%' },
                                            width: 260,
                                            backgroundSize: 380,
                                            height: 290,
                                            backgroundImage: `url(${AuthPurpleCard})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            animation: '15s wings ease-in-out infinite'
                                        },
                                        '&:before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: { xs: '10%', xl: '12%' },
                                            left: { xs: '15%', xl: '25%' },
                                            width: 360,
                                            height: 350,
                                            backgroundSize: 460,
                                            backgroundImage: `url(${AuthBlueCard})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            animation: '15s wings ease-in-out infinite',
                                            animationDelay: '1s'
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid item container justifyContent="center" sx={{ pb: 8 }}>
                                    <Grid item xs={10} lg={8} sx={{ '& .slick-list': { pb: 2 } }}>
                                        <AuthSlider items={items} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </BackgroundPattern>
                </Grid>
            </Grid>
        </AuthWrapper>
    );
};

export default Login;



