import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe('Greeting component', () => {
  test('Renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldText = screen.getByText('Hello World', { exact: false });
    expect(helloWorldText).toBeInTheDocument();
  });
});
