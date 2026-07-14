//  This is a reusable component . Which we can reuse in our application without writing the code again and again . [ This is the React's biggest Feature ]

import React, { useId } from 'react'

function InputBox({     // this is the input given in the paranthsesis of the function in {} object / block 

    label,                         // To display the from or to in the top left of input box                       
    amount,                        // Amount : that will be entered in the input box - Main Values to be calculated { both - first : From vich amount pani ; Second : To vich amount pauni [ Actual value : jo calculate karni  ]}
    onAmountChange,                // Method : in useState that will calculate the amount again from the new data in input { i.e. When the  amount will be changed  it agains calculate the final data-amount }
    onCurrencyChange,              // Method : call hona jado apa - Side toh currency change karni options vicho [ Right side of the input box - Drop Down ]
    currencyOptions = [],          // Array : That will store all the currency option in the right side of input box [ jis vich saari values auni - usd , inr , eur , pond etc ...]
    selectCurrency = 'usd',        // To Select : A specific currency from the the all currency List [ i.e. The Array of Currencies ] . And default is = usd

    // This is for optimize purposes . As , this is used in production grade applications [ for large application - to make is scalabale and handle expectional inputs ]
    amountDisable = false,
    currencyDisable = false,

    className = '', // je koi specific className deni howe matlab - je specific css deni howe talwind css vicho { because end ch talwind css chadi teh className pr ohi hai ..}

  }) {

    const amountInputId = useId()  // For optimization giving unique id to label and amount . [ It generates a random number id - for label and input field ]

    return (

        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>  {/* From the className to apply talwind css from their own  */}


         <div className="w-1/2">

           <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">  {/* This the From(kehri currency vicho convert krna ) on the top left of input box */}
            
             {label}                           {/* 1st - from , 2nd - To  */}
         
         </label>


                {/* The Atual input in which we will enter the amount that will be converted */}
                <input
                    id={amountInputId}        // For optimization giving unique id to  label(curency) and amount [ currently that is displaying on the webpage ] .

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Enter Amount"

                    disabled={amountDisable}   // Je true hoya amountDisable teh amount ni rakh honi . But , by default eh false eh 

                    value={amount}             // [ Eh auni app.jsx ale used inputbox component vicho ]Input de box de andar jo value auni oh amount vicho auni [ matlab jo amount apa deni oh input field ch show honi ]

                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}  /> {/* [onAmountChange call ho jana ] Jado event happen hona => Amount change krni input ch . Taah onAmountChange method call ho jana jihne fir toh run krna and amount calculate karni and amount jani (e.target.value) vicho amount di  */}


            </div>


            {/* 2 Div hai ik vich label and input field hai teh dooje ch currency kehri select krni oh hai . This is 2nd  */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">

                <p className="text-black/40 mb-2 w-full">Currency Type</p> {/* Eh jo top right pr text display ho reha na input box vich . Options- select ho rehiyan jo usde  upar  */}
                
                
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"

                    value={selectCurrency}    // the current value of the selected currency from the dropdown 

                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // jado selected currency changed honi tah onCurrency method fir toh run krna fetched data and will calculate it 

                    disabled={currencyDisable} // je kisi neh currency nu select karna disable krna hoya taah ( by default false hai ; je true hoya teh select ni hona { btw - khaas use nhi hai })
                >

                  /{/* Inside the select feature jis vich options hundiyan . loop laga deni map method naal */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}> 

                            {currency}                             {/* Options ch sariyan currency mil janiyan sariyan  */}

                        </option> 
                    ))}


                </select> 

                </div>   {/* 2nd div closed  */}


{/* It has both divs inside it . This is the ultimate final div */} </div>  
                                                               
    )
}

export default InputBox


