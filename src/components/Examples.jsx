import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();


    function handleSelect(selectedButton) {
        //selectedButton => 'componets', 'jsx', 'prop', 'state';
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);

    }


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

    return (
        //the Section and title is used based on the costum component in Section.jsx
        <Section title="Examples" id="examples">
            <h2>Examples</h2>
            <Tabs buttons={

                <>

                    {/*you can style these button dynamically after intenarirly defining it in the tabButton file as prop */}
                    <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')} >
                        Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onClick={function () { handleSelect('jsx') }} >
                        Jsx</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')} >
                        Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')} >
                        State</TabButton>


                </>}> {tabContent}</Tabs>
            <menu>

            </menu>
        </Section>
    );
}