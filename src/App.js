import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import Index from "./app/components/views/webpage/Index";
import sessionRoutes from "./app/components/views/sessions/sessionsRoutes";
import Dashboard from "./app/components/views/layouts/Dashboard";

import coolerTheme from "./app/themes/coolerTheme";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <ThemeProvider theme={coolerTheme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route exact path="/" component={Index} />
          {sessionRoutes.map((item, i) => (
            <Route path={item.path} component={item.component} />
          ))}
          <Dashboard />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
