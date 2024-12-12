export default function Tabs({children, buttons }) {
    return <>
    <menu>
        {buttons}
    </menu>
    {children}

    </>
}

// another warpper component, this for Examples.jsx tab and every other component that will have same structure
// see Section.jsx for explanation