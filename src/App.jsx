import Markdown from 'marked-react';
import {useState} from 'react';

const initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;


function App() {
    const [text, setText] = useState(initialText);
    const [lineNumber, setLineNumber] = useState(1);

    const handleChange = (e) => {
        console.log(e.target.value)
        setText(e.target.value);
        updateLineNumber();
    }

    function updateLineNumber() {
        const num = text.split('\n').length;
        setLineNumber(num);
    }

    function renderLineNumber() {
        let arr = [];
        for (let i = 1; i <= lineNumber; i++) {
            arr.push(<span key={i}>{i}</span>);
        }
        return arr;
    }

    return (
        <div className="containers">
            <div className="container">
                <div className="container__header">
                    <p className="container__title">Editor</p>
                </div>
                <div className="editor container__main">
                    <div className="editor__lines">
                        {renderLineNumber()}
                    </div>
                    <textarea id="editor" onChange={handleChange} value={text}></textarea>
                </div>
            </div>
            <div className="container">
                <div className="container__header">
                    <p className="container__title">Preview</p>
                </div>
                <div id="preview" className="preview container__main">
                    <Markdown breaks>{text}</Markdown>
                </div>
            </div>
        </div>
    );
}

export default App;
