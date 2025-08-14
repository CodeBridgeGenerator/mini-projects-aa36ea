import React from "react";
import { render, screen } from "@testing-library/react";

import TasksPage from "../TasksPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders tasks page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TasksPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("tasks-datatable")).toBeInTheDocument();
    expect(screen.getByRole("tasks-add-button")).toBeInTheDocument();
});
