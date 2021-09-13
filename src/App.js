import { MediaCard, AppProvider } from "@shopify/polaris";
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
        <MediaCard
          title="Getting Started"
          primaryAction={{
            content: "Learn about getting started",
            onAction: () => {},
          }}
          description="Discover how Shopify can power up your entrepreneurial journey."
          popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
          size="small"
        >
          <img
            alt=""
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
          />
        </MediaCard>
      </AppProvider>
    </div>
  );
}

export default App;
