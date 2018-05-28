const navBar = <nav>I am a nav bar</nav>;

//6
const myTem = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};
//
cosnt myArticle = <article></article>

//7
my-attribute-name = "my-attribute-value"

<a href="http://www.example.com">Welcome to the Web</a>;
const title = <h1 id="title">Introduction to React.js: Part I</h1>;

const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;
/1/
const p1 = <p id="large">foo</p>;
/2/
const p2 = <p id="small">bar</p>;

//8 : Nested JSX
<a href="https://www.example.com"><h1>Click me!</h1></a>
//or

<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>

const theExample = (
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
);
///
const myDiv = (
  <div>
    <h1>Hello World</h1>
  </div>
)


//9: JSX Outer Elements
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);

// but this code will not work:
cost paragraphs = (
  <p>I am a paragraph.</p>
  <p>I, too, am a paragraph.</p>
);


//10: Rendering JSX
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
