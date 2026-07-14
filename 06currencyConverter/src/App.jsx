import { useState } from 'react'
import {InputBox} from './Components'  //   it will automaticaaly import the index.js file as the folder starts from the index file ( in every case )
import useCurrencyInfo from './CoustomHooks/useCurrencyInfo'


function App() {

  // Hooks : Hooks are nothing but just a function - that is returning some value .
  // like : 1.] useState : const [ count , setCount ] = useState(0)
  //        In this ; useState is a f(x) that is returning [count and setCount] in an ARRAY .  Where count => variable and setCount is a function - that is just updating the value [ and Note : hooks are not higher order f(x) . As they don't truly takes a f(x) as input and nor purely returns a function { As , use state returns a data (In Array) and NOt a f(x) } ].
  
  //       SO , ULTIMATELY WE CAN CREATE OUR OWN HOOKS [ i.e. own function ]
  // Hooks are not HOF . Because they return some data and not another f(x) {React strictly discourages creating "Higher-Order Hooks" (hooks that dynamically return other hooks). According to the official React Rules of Hooks, Hooks must always be called statically at the top level of your component so React can track their call order consistently across re-renders. }
  

const [amount , setAmount] = useState( 0 || '' )    // tracking and updating the amount . State of amount is most used in inbox - component . Defualt value is  empty strung ( This will first say it like enter amount  )
const [from , setFrom ] = useState('usd')   // tracking and updating the from label input and updates it everywhere . This State tells from which is the currency is going to convert . 
const [ to , setTo ] = useState('inr') 
const [convertedAmount , setConvertedAmount ] = useState(0)

const currencyInfo = useCurrencyInfo(from) // In our coustom hook we are passing the value that is from input field [like - usd ]

const options = Object.keys(currencyInfo)  //[json vicho usd - di sari keys(currencies a janiyan )] From the json data we are getting from the api . We are only taking the keys(that are inr , usd , eur , pond etc all options )


// it will give the swap feature between the currencies 
const swap = () => {

  setFrom(to)                    // from nu to krta ( usd -> inr)
  setTo(from)                    // to nu from krta ( inr -> usd)
  setConvertedAmount(amount)     // upar ale di amount thale likhti
  setAmount(convertedAmount)     // thale ale di converted amount upar likhti 
}


 const convert = () => { 
    setConvertedAmount((amount * currencyInfo[to]).toFixed(3)  ) //{2nd input box vich jo value auni convertedAmount => amount (upar ale input box di value) * selected crrency Info ( 80. 48645)} calculating the final amount byy multiplying it with the currencyInfo( 1 usd = 80 inr ) .  ' .toFixed(3) ' on;y gives the deciaml value upto 3 digits
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault(); // tah ki form server-side pr na chalje
                        convert()           // called the convert method that is calling the api and calculating the fianl value { ehne hi deni final value convert krke ki kihne paise bande }
                       
                    }}
                >
                    <div className="w-full mb-1">

                      {/* Eh oh component ga jehra apa resuse kita hun is vich bs apa apni input values de rehe jo component ale InputBox vich jawe and ithe used hoke display howe  */}
                        <InputBox
                            label="From"               // from ala input box 
                            amount={amount}            // Amount diti 
                            currencyOptions={options}  // sariyan options currency aliyan fetch hoke aniyan 
                            onCurrencyChange={(currency) => setFrom(currency)}  // update the source currency state
                            selectCurrency={from}      // currency select krni 
                            onAmountChange={(value) => setAmount(value)}     
                        />
                    </div>


                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>


                    <div className="w-full mt-1 mb-4">


                        <InputBox                  // 2nd Input box nu values de rehe alg-alg pehla ale naal toh tah ki oh InputBox component ch jake eh values bhare and return karke show kr dawee
                            label="To"             
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable  // tah ki niche ale input ch value na likh sake koi bhii
                        />


                    </div>


                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}  : {convertedAmount} 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
