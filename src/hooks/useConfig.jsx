import { useContext } from 'react';
import { ConfigContext } from '@/contexts/ConfigContext.jsx';


const useConfig = () => useContext(ConfigContext);

export default useConfig;
