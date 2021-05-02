import React, { ReactElement } from "react";
/**
 * External Imports
 */
import { MemoryRouter } from "react-router-dom";

/**
 * Imports testing utils
 */
import { render, RenderOptions } from "@testing-library/react";

/**
 * Imports providers
 */

import { ThemeProvider, LanguageProvider } from "../../hooks";
import Providers from "../../components/Providers";

/**
 * Defines the Wrapper component
 */
const Wrapper: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Providers>
          <MemoryRouter>{children}</MemoryRouter>
        </Providers>
      </LanguageProvider>
    </ThemeProvider>
  );
};

/**
 * Defines the custom render
 */
const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper, ...options });

/**
 * Re-exports everything from the testing library
 */
export * from "@testing-library/react";

export * from "./changeViewport";
export * from "./mocks";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
