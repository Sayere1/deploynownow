export default function Section({title, children, ...props}) {
    return <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
}



/* 
wrapper component is a build a component structure that allws us to use it across all components
if you have the same html structure across all components, you can build as many wrap component as you want

//we can destructure it further to reflect the ids classname etc or all other props and manually set attributes

export default function Section({title, children, className, id}) {
    return <section id={id} className={className}>
        <h2>{title}</h2>
        {children}
    </section>
} this type of destructuring will require you to always manually set attributes, it snot scallable and convinient


//to automatically foward the props using forwarded props or proxy props for example

export default function Section({title, children, ...props}) {
    return <section {...props}>// use "...props" to ensureall that all extra props will be forwarded to the built in element
        <h2>{title}</h2>
        {children}
    </section>
}

//this "...props" rest property basically tell javascript to collect other props and merge them into a javaScript object
//this "...props" syntax group all remaining properties into a new object named props in this case

*/