import { useState } from 'react';
import { createContext } from 'react';

const SettingContext = createContext();

function SettingProvider({ children }) {
    const [modal, setModal] = useState(false);
    return <SettingContext.Provider value={[modal, setModal]}>{children}</SettingContext.Provider>;
}

export default SettingProvider;
export { SettingContext };
