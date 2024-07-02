import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function Main() {
  return (
    <main>
      <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
            {CORE_CONCEPTS.map( core_concept => (<CoreConcept
            title={core_concept.title}
            description={core_concept.description}
            image={core_concept.image}
          />) )}
          
        </ul>
      </section>
    </main>
  );
}
