import { AppProvider } from "@shopify/polaris";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/index";
import Apod from "./pages/APOD/index";
import MarsPhotos from "./components/MarsPhotos/MarsPhotos";
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
        <Route exact path="/marsroverphotos" component={MarsPhotos} />
      </AppProvider>

      <Route exact path="/astronomyoftheday" component={Apod} />
    </BrowserRouter>
  );
}

export default App;
