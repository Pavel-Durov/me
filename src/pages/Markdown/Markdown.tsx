import Md from 'markdown-to-jsx';

import { useEffect, useState } from 'react';

import 'pages/Markdown/Markdown.css';

export function Markdown({ getContent }: { getContent: () => Promise<string> }): JSX.Element {
  const [content, setContent] = useState('');
  useEffect(() => {
    getContent().then((text) => setContent(text));
  });
  return <Md>{content}</Md>;
}
