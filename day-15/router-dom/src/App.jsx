function App() {
  return (
    <>
      <div className="q">
        <h1>React Router-DOM</h1>
        <hr />
        <h3>what and why</h3>
        <ol>
          <li>client side routing library.</li>
          <li>switch between pages without reloading</li>
          <li>to make single page application SPA</li>
          <li>fast navigation</li>
          <li>clean URL (uniform resourse locator)</li>
          <li>protected routes</li>
          <li>dynamic rooting</li>
          <li>nested layout</li>
        </ol>
        <h3>installation</h3>
        <code>npm i react-router-dom</code>
        <h3>Essential imports</h3>
        <ol>
          <li>BrowserRouter - main wrapper that enables routing in app</li>
          <ul>
            <li>Main Wrapper</li>
            <li>App Wrapper</li>
          </ul>
          <li>Routes</li>
          <li>link</li>
          <li>navlink</li>
          <li>useNaviagte</li>
          <li>useParams</li>
          <li>useLocation</li>
          <li>Nested Routing</li>
          <li>Outlet</li>
        </ol>
        <h3>
          <p>clickable navigation link without reloading the page</p>
        </h3>
        <h3>properties</h3>
        <link to = '/' home/>
        <h3>routes</h3>
        <p>container for all router components</p> <br />
        <p>define which component renders for certain path</p>
      </div>
    </>
  );
}

export default App;
