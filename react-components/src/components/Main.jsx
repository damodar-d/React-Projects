import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import TabButton from "./TabButton";
import { useState } from "react";
import Section from "./Section";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";
export default function Main() {
  let tabContents = ["components", "jsx", "props", "state"];
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton) {
    console.log("Selected!!!" + selectedButton);
    setSelectedTopic(selectedButton);
  }

  return (
    <main>
      <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((core_concept) => (
            <CoreConcept
              title={core_concept.title}
              description={core_concept.description}
              image={core_concept.image}
            />
          ))}
        </ul>
      </section>
      <Section title="Examples" id="examples">
        <Tabs
        buttonsContainer="menu"
          buttons={
            <>
              {tabContents.map((content) => (
                <TabButton
                  isSelected={selectedTopic === content}
                  onClick={() => handleSelect(content)}
                >
                  {content}
                </TabButton>
              ))}
            </>
          }
        ></Tabs>

        {!selectedTopic ? (
          <p>Please Select A Topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Section>
    </main>
  );
}
