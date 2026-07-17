import React, { useContext } from 'react'
import { useCallback } from 'react';
import useTheme from '../Contexts/Theme';

export default function ThemeBtn() {
    
const { themeMode , darkTheme , lightTheme } = useTheme()   // useTheme => Jo ik method hai jo return krda global context ( darktheme , lightheme etc) . Ohnu return kr reha is file vich - Themebtn.jsx || 

const onChangebtn = (e) => {

const darkModeStatus = e.currentTarget.checked    // Is vich hai ki checkbox = checked hai and theme dark hai ...

if(darkModeStatus) {
    darkTheme()           // darkTheme f(x) call ho jana 
} else {
     lightTheme()        // je darkmodeStatus jo checked hai teh checked da matlab dark hai . Teh je oh dark pr hoya hi nhi . Teh lightTheme() f(x) call ho jana ...
}

}

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangebtn}          // check box nu jado change krna method call hona ik
                checked={themeMode === 'dark'}  // checked da matlab hai ki theme mode = dark hai 
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}