import { CodeSnippet as Model } from 'model'
import { CodeBlock } from 'react-code-blocks'

export function InterviewQuestions ({ codeSnippets }: { codeSnippets: Model[] }): JSX.Element {
  return (
    <section>
      {codeSnippets.map((snippet, idx) => (
        <div key={idx}>
          <CodeBlock
            id={idx}
            text={snippet.text}
            language={snippet.language}
            showLineNumbers={true}
            theme={'dracula'}
            wrapLines={true}
          />
          <br />
        </div>
      ))}
    </section>
  )
}
