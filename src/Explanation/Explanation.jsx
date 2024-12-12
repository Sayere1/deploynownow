{/*
  functions that output contents dynamically to the word "fundamenta"
  */}

  const reactDescription = ["Fundamentals", "Crucial", "Core"];
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  
  
  function Header() {
     const description = reactDescription[genRandomInt(2)];
  
    return (
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
  
        {/*
        outputing a dynamic value, we want to out put dynamic values for the word "fundamental"
        so it can randomly chnages between "fundametal" "crucial" and "core" we will create a 
        function for it above 
  
        Fundamental React concepts you will need for almost any app you are going to build!
  
        curlybraces {} are used to output dynamic values
        */}
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }


  function CoreConcepts (props) {
    {/*how to create reusable components using props first create a function the render the function as much as you want
      after creating the components structure out put the input data with curly braces as shown below while on the app.jsx fill out the input */}
    return (
      <li>
        <img src={props.img} alt="..."/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    )

    {/*
      alternatively we can simply use object destructuring, it will help us write shorter code
      and we can directly point at the properties of data.js when outputing them
    
      function CoreConcepts ({image, title, description}) {
  return (
    <li>
      <img src={image} alt="..."/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
      
      */}
  }

  function App() {
    return (
      <div>
        <main>
          <section id="core-concepts">
          <h2>Time to get started!</h2>
      

              <ul>
            {/* we can render this component dynamically using the map() method that transform an array of object to an array of jsx element */}

            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcepts key={conceptItem.title} {...conceptItem} />))}
            </ul>

              {/*

              alternatively render the componenets like this as much as you want 
              
              <ul>
              <CoreConcepts title="components" description="I like REact" img={componentsImg} />
              <CoreConcepts />
              <CoreConcepts />
              <CoreConcepts />
            </ul>

    alternatively you can create a data.js file and import the images then export the components inside an array as an objects
    the render it like this 

            <section id="core-concepts">
        <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} img={CORE_CONCEPTS[0].image} />
            <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} img={CORE_CONCEPTS[1].image} />
            <CoreConcepts title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} img={CORE_CONCEPTS[2].image} />
            <CoreConcepts title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} img={CORE_CONCEPTS[3].image} />
          </ul>
        </section>

    alternatively we can also use the spread operator "..." to pull out the imputs of the componets from the "data.js"

            <section id="core-concepts">
        <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
            </ul>
        </section>
    */}
          </section>
        </main>
      </div>
    );
  }

  {/*
    children refers to any thing or element between componenets 
    for example
    <TabButton>Components</TabButton>----componnents is the children

    <TabButton>
    <div></div>----the div is the children
    </TabButton>

    to output the children you have to use {props.children} or simply destructure by passing it as an argument ({children
    })
    */}

    export default function TabButton(props) {
      return(
          <li>
              <button>{props.children}</button>
          </li>
      )

      {/*
        or
        export default function TabButton({children}) {
    return(
        <li>
            <button>{children}</button>
        </li>
    )
}

    in the function App (){} it can be renderde like this
  <TabButton>Components</TabButton>
  //or
  <TabButton label="Components" />

  */}
  }

  {/*
    TO LISTEN TO AN EVENT --> MAKING BUTTONS CLICKABLE IN REACT

    first you have to defined the function inside the componet, them pass the function as props in the component element*/}

    export default function TabButton(props) {

      function handleClick() {// the function
          console.log('hello world');
      }
  
      return(
          <li>
              <button onClick={handleClick}/*passing it as props*/ >{props.children}</button>
          </li>
      )
  }

  // now pass costum arguments to the event functions, this will control the diffferent content of the dynamic buttons
  function App() {

    function handleSelect(selectedButton) {
      //selectedButton => 'componets', 'jsx', 'prop', 'state';
      console.log(selectedButton);
  }
return (
  <section id="examples">
  <h2>Examples</h2>
  <menu>
    <TabButton onSelect={() => handleSelect('components')} /*you can use the arrow function pass the componet strings identifier*/>Components</TabButton> 
    <TabButton onSelect={function(){handleSelect('jsx')}} /*or simply use function pass the componet strings identifier*/ >Jsx</TabButton>
    <TabButton onSelect={() => handleSelect('props')} >Props</TabButton>
    <TabButton onSelect={() => handleSelect('state')} >State</TabButton>
  </menu>
  Dynamic Component
</section>
)
  }



    {/*the advantage of defining these event handler function inside the component function is that they can have access
    to the components props and state 
    */}


    {/*
      we use "state" to updated the ui components, state is all about registering varaibbles that are handled by react and are
      updated with the help of a function provided by react that will also tell react that data change and caused it to update the ui
      
      */}

    // rendering content conditionally

    function App() {
      const [selectedTopic, setSelectedTopic] = useState();
    
    
      function handleSelect(selectedButton) {
        //selectedButton => 'componets', 'jsx', 'prop', 'state';
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    
    }
    
    console.log('APP COMPONENTS EXECUTING');
    
    retrun (
    <div>
    <main>
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton onSelect={() => handleSelect('components')} >Components</TabButton>
        <TabButton onSelect={function(){handleSelect('jsx')}} >Jsx</TabButton>
        <TabButton onSelect={() => handleSelect('props')} >Props</TabButton>
        <TabButton onSelect={() => handleSelect('state')} >State</TabButton>
      </menu>
      {!selectedTopic ? <p>Please select a topic</p> : null}
      {selectedTopic ? (
        <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
      ) : null}
    </section>
  </main>
</div>
);
}


// alternatively you can render it like this 

function App() {
  const [selectedTopic, setSelectedTopic] = useState(); //destructure the array


  function handleSelect(selectedButton) {
    //selectedButton => 'componets', 'jsx', 'prop', 'state';
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);

}

console.log('APP COMPONENTS EXECUTING');
// run the ui componenet to outbut arrays from data.js
let tabContent = <p>Please select a topic</p>;
if (selectedTopic) {
  tabContent = (
    <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
  </div>
  );
}

retrun (
<div>
<main>
<section id="examples">
  <h2>Examples</h2>
  <menu>
    <TabButton onSelect={() => handleSelect('components')} >Components</TabButton>
    <TabButton onSelect={function(){handleSelect('jsx')}} >Jsx</TabButton>
    <TabButton onSelect={() => handleSelect('props')} >Props</TabButton>
    <TabButton onSelect={() => handleSelect('state')} >State</TabButton>
  </menu>
  {tabContent} {/*output the content from the app function */}
</section>
</main>
</div>
);
}

// dont forget to export default App

