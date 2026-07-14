// In maajority of the cases Hooks returns the pre js . So , it is good to write .js rather than .jsx . As , eventually it is returning the javascript only 
// Now we are going to create coustom Hooks
// We can use the React's built-in hooks . like - useState , useEffect etc in our own hooks { and this is called => Higher-Order-Hooks }

import { useEffect , useState } from "react";


// Now , this is a coustom hook = useCurrencyInfo . And we write "use" in front of that because all other react built-in hooks have "use" in-front of them [ So , it is a good practice ] . As , we will know when "use" is used in f(x) it is a hook .
function useCurrencyInfo(currency){ 

    const [ data , setData ] = useState({}) // It will store the value os response in real time as a const variable will store it but not update it useState will update it 

useEffect(() => {                        // using another React's built-in HOOk . { useEffect - automatically calls the f(x) inside it when the dependecies naal cher-char hundi }

fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)     // This is the latest api I got from the git-hub from some user(fawazahmed) for TOTALLY FREE !!! . [ Instead of the hardcoded value . like : 1usd = 85 , 1 eur = 100 etc .  It gives the real time value of the exchange rate from any currency to any currency [ like - Inr ->   usd , eur , dinar , pond .... any many more or usd -> inr , pond , eur .....  ( in Real  time ) ] ]
//                                                                                  ${currency} is accessing the cureency variable in the api .  As inr in place of ${currency} will give conversion of inr to all other currency , usd will give usd conversion rates .  And like this ||  

.then((res) => res.json())
.then((res) => setData(res[currency]))

.catch( 'Data not found or API not working ')


}, [currency] ) // dependency : is currency as if the Currency variable is changed or manipulated in the UI the function will run again . It depends on that ..
console.log(data);
return data 
}



export default useCurrencyInfo ; 


