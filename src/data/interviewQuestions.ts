import { CodeSnippet } from 'model'

export const codeSnippets: CodeSnippet[] = [
  {
    text: `// What would be the output of this program after 1 second? 
// What would be the output of this program after 5 second?
(async function () {
    const intervalPromise = new Promise((resolve) =>
      setInterval(function () {
        console.log("interval 2000");
      }, 2000)
    );
    const timeoutPromise = new Promise((resolve) =>
      setTimeout(function () {
        console.log("timeout 1000");
        resolve(true);
      }, 1000)
    );
    const result = await Promise.race([intervalPromise, timeoutPromise]);
    console.log({ result });
  })();  
`,
    language: 'javascript'
  },
  {
    text: 'let a = 1;',
    language: 'rust'
  }

]
