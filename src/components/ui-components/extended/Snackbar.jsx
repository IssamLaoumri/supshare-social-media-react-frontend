// material-ui
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import MuiSnackbar from '@mui/material/Snackbar';

// project import
import { dispatch, useSelector } from '@/store';
import { closeSnackbar } from '@/store/slices/snackbar';

// assets
import CloseIcon from '@mui/icons-material/Close';

// animation function
const createSlideTransition = (direction) => (props) => (
    <Slide direction={direction} {...props}>{props.children}</Slide>
);

const animation = {
    SlideLeft: createSlideTransition('left'),
    SlideUp: createSlideTransition('up'),
    SlideRight: createSlideTransition('right'),
    SlideDown: createSlideTransition('down'),
    Grow: (props) => <Grow {...props}>{props.children}</Grow>,
    Fade: (props) => <Fade {...props}>{props.children}</Fade>
};


// ==============================|| SNACKBAR ||============================== //

const Snackbar = () => {
    const snackbar = useSelector((state) => state.snackbar);
    const { actionButton, anchorOrigin, alert, close, message, open, transition, variant } = snackbar;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(closeSnackbar());
    };

    return (
        <>
            {/* default snackbar */}
            {variant === 'default' && (
                <MuiSnackbar
                    anchorOrigin={anchorOrigin}
                    open={open}
                    autoHideDuration={1500}
                    onClose={handleClose}
                    message={message}
                    TransitionComponent={animation[transition]}
                    action={
                        <>
                            <Button color="secondary" size="small" onClick={handleClose}>
                                UNDO
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} sx={{ mt: 0.25 }}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </>
                    }
                />
            )}

            {/* alert snackbar */}
            {variant === 'alert' && (
                <MuiSnackbar
                    TransitionComponent={animation[transition]}
                    anchorOrigin={anchorOrigin}
                    open={open}
                    autoHideDuration={1500}
                    onClose={handleClose}
                >
                    <Alert
                        variant={alert.variant}
                        color={alert.color}
                        action={
                            <>
                                {actionButton !== false && (
                                    <Button size="small" onClick={handleClose} sx={{ color: 'background.paper' }}>
                                        UNDO
                                    </Button>
                                )}
                                {close !== false && (
                                    <IconButton sx={{ color: 'background.paper' }} size="small" aria-label="close" onClick={handleClose}>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                )}
                            </>
                        }
                        sx={{
                            ...(alert.variant === 'outlined' && {
                                bgcolor: 'background.paper'
                            })
                        }}
                    >
                        {message}
                    </Alert>
                </MuiSnackbar>
            )}
        </>
    );
};

export default Snackbar;
