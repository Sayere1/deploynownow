export default function TabButton({children, isSelected, ...props}) {

    return(
        <li>
            {/* you can dynamically style a button or an element frommthe inside using classname and passing the values as props
            passed the values "isSelected as props then use teneray operator after that go to the app.jsx and render it" */}
            <button className={isSelected ? 'active' : undefined} {...props} >{children}</button>
        </li>
    )
}

/*

export default function TabButton({children, onSelect, isSelected}) {

    return(
        <li>
            {/* you can dynamically style a button or an element frommthe inside using classname and passing the values as props
            passed the values "isSelected as props then use teneray operator after that go to the app.jsx and render it" }
            <button className={isSelected ? 'active' : undefined} onClick={onSelect} >{children}</button>
        </li>
    )
}

//we can use "...props" rest property basically tell javascript to collect other props and merge them into a javaScript object
it will save us from manually setting attributes for example
then in the Example.jsx we can replace all onSelect with onclick

export default function TabButton({children, isSelected, ...props}) {

    return(
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect} >{children}</button>
        </li>
    )
}

*/