import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Review from "./Reviews/Review";
import Art from "./components/Art";
import Gallery from "./components/Gallery";
import Request from "./components/Request";
import Footer from "./components/Footer";

const App = () => (
 <Router>
     <div>
     <Nav />
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />    
    <Route exact path="/review" component={Review} />
    <Route exact path="/art" component={Art} />
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/request" component={Request} />
    <Footer />
    </div>
</Router>
);

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";

// const App = () => (
//   <Router>
//     <div>
//       <NavTabs />
//       <Route exact path="/" component={Home} />
//       <Route exact path="/about" component={About} />
//       <Route exact path="/blog" component={Blog} />
//       <Route path="/contact" component={Contact} />
//     </div>
//   </Router>
// );

// export default App;

