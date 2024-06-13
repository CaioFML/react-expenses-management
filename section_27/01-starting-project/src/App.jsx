import Accordion from "./components/accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className="accordion">
          <Accordion.Item id='experience' className="accordion-item" title="We got 20 years of experience">
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>We are in the business</p>
            </article>
          </Accordion.Item>
          <Accordion.Item id='local-guides' className="accordion-item" title="We are here">
            <article>
              <p>We are good</p>
              <p>We are in the business</p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  )
}

export default App;
