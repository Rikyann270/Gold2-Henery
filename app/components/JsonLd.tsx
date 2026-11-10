/**
 * Renders sanitized JSON-LD structured data for Search Engines (Google, Bing),
 * Answer Engines (AEO), and Generative AI Engines (GEO / Perplexity / ChatGPT / Gemini).
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

