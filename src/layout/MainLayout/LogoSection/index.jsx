import { Link } from 'react-router-dom';

// project imports
import { HOME_PATH } from '@/config';
import Logo from '@/components/ui-components/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <Link to={HOME_PATH} aria-label="theme logo">
        <Logo />
    </Link>
);

export default LogoSection;
