import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "./index";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
  const BreadcrumbList = [
    { pageTitle: "House", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const { container } = render(
    <Router>
      <Breadcrumb data={BreadcrumbList} />
    </Router>
  );

  const breadcrumb = container.querySelector(`.breadcrumb`);

  return {
    breadcrumb,
  };
};

test("should have <ol> with className .breadcrumb and have text House & House Details", () => {
  const { breadcrumb } = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("House");
  expect(breadcrumb).toHaveTextContent("House Details");
});
