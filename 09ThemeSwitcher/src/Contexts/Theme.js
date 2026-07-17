// Jehra kaam 2 files ch hona c oh apa iko vich kr dita . Also we created our coustom hook in the end 


import { createContext , useContext } from 'react'

// 1.] created context : has 1 variable , 2 Methods
export const ThemeContext = createContext ({  // We created the context here and also this context has global values : 1 variable , 2 methods 

    themeMode : 'light',
    darkTheme : () => {} ,
    lightTheme : () => {} , 

})


// 2.] Provided Context 
// In themeprovider we stored the theme context that provides the feature of context 
export const ThemeProvider = ThemeContext.Provider 


// 3.] Own hook that has access of Context Created in 1st step 
// Coustom hook 

export default function useTheme () {
    return useContext(ThemeContext)
}


