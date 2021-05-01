import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

/**
 * Imports app providers
 */

import { ThemeProvider, LanguageProvider } from "../../hooks";
import Providers from "../../components/Providers";

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

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper, ...options });

/**
 * Re-exports everything
 */
export * from "@testing-library/react";

/**
 * Overrides the render method
 */
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
