import React, { Component } from 'react';
import './App.css';
import Preview from './components/Preview';
import Textarea from './components/Textarea';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userInput: placeholder,
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
      const { userInput } = this.state;
    return (
      <div className="App">
        <Textarea onChange={this.handleChange} userInput={userInput}/>
        <Preview 
          userInput={userInput}
          />
      </div>
    );

  }
}

export default App;


const placeholder = `
# Markdown Editor

## FreeCodeCamp Project

*italic with asterisks*
_italic with underscores_

## Lists

\`\`\`md
1. This is an
2. ordered list
\`\`\`

* This is an unordered list
- We can mix and match the symbols
+ it won't affect the look of the list

## Links

[An inline link](https://github.com/adam-p/markdown-here)

[An inline link with a title](https://github.com/adam-p/markdown-here "markdown repo")

[A reference style link][arbitrary reference text]

[reference text itself]

[arbitrary reference text]: https://dev.to/about
[reference text itself]: https://dev.to/faq

## Images

![Markdown Logo](https://markdown-here.com/img/logo-2015/austin.png)

## Code Blocks

\`\`\`
This is some
code block
that can span
multiple lines
\`\`\`

\`\`\`js
const hello = 'Hello World.';
console.log(hello);
\`\`\`

## Tables

\`\`\`md
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3
\`\`\`

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3

## Blockquotes

> Blockquotes are very handy
> and can easily span multiple lines.
`