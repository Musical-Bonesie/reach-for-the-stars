import { AppProvider } from "@shopify/polaris";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/index";
import Stars from "./pages/Stars/index";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <AppProvider
        i18n={{
          Polaris: {
            ResourceList: {
              sortingLabel: "Sort by",
              defaultItemSingular: "item",
              defaultItemPlural: "items",
              showing: "Showing {itemsCount} {resource}",
              Item: {
                viewItem: "View details for {itemName}",
              },
            },
            Common: {
              checkbox: "checkbox",
            },
          },
        }}
      >
        <Route exact path="/" component={HomePage} />
      </AppProvider>
      <Route exact path="/stars" component={Stars} />
    </BrowserRouter>
  );
}

export default App;
