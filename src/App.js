import { AppProvider } from "@shopify/polaris";
import HomePage from "./pages/HomePage/index";
import "./App.scss";

function App() {
  return (
    <div className="App">
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
        <HomePage />
      </AppProvider>
    </div>
  );
}

export default App;
