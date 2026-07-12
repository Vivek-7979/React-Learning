# React-Learning
A repository which covers the all react concepts with theory ( To create a react - vite prjoect folder . Run => npm create vite@latest )


### React's name is react because it reacts when the variables changes And it updates the UI by itself .
- React reacts on the updation  of variables ( and also this is the main thing that react solves)
- learn react fibre from github acdlite account ( who wrote a great article )
- Virtual dom concept is a dom created in the browser memory and it is created by fibre algorithm that compares the previuos and current dom and changes only that in real dom . 
Recocillation is the algo/process in which the virtual dom is compared and it is done by diffi algorithm ..
- Reload - when we refresh or reload the page it completely creates the dom from zero adn fresh . When we want the updated response from the server we use reload as it gets the (bundle of - html , css and js again ) from the server that is latest and it creates the Fresh DOM tree of the new data fro server .



### Hooks In React
- Hooks : Hooks are nothing but just a function - that is returning some value .
- like : 1. useState : const [ count , setCount ] = useState(0)
  
  -  In this ; useState is a f(x) that is returning [count and setCount] in an ARRAY .  Where count => variable and setCount is a function - that is just updating the value [ and Note : hooks are not higher order f(x) . As they don't truly takes a f(x) as input and nor purely returns a function { As , use state returns a data (In Array) and NOt a f(x) } ].
  
  -     SO , ULTIMATELY WE CAN CREATE OUR OWN HOOKS [ i.e. own function ]
  
  - Hooks are not HOF . Because they return some data and not another f(x) {React strictly discourages creating "Higher-Order Hooks" (hooks that dynamically return other hooks). According to the official React Rules of Hooks, Hooks must always be called statically at the top level of your component so React can track their call order consistently across re-renders. }
  