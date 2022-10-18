import React from "react";
import { render } from "@testing-library/react";
import LoadingAnimation from "./LoadingAnimation";

it("renders without crashing", function () {
	render(<LoadingAnimation />);
});
