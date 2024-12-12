import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data.js";


export default function CoreConcepts() {
    return(
        <section id="core-concepts">
        <h2>Time to get started!</h2>
          <ul>
            {/* we can render this component dynamically using the map() method that transform an array of object to an array of jsx element */}

            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem} />))}
            </ul>
        </section>
    );
}