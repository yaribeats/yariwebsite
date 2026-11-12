/** Visible FAQ. Uses <details> so every answer is in the HTML for search engines and AI crawlers. */
export function FaqList({ items }: { items: readonly { question: string; answer: string }[] }) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details key={item.question} open={i === 0}>
          <summary>
            <h3>{item.question}</h3>
            <span aria-hidden="true" className="faq-plus" />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
