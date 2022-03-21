import React, { useReducer, createContext } from "react";

export const GlobalContext = createContext();

const initialState = {
    searchState: "home",
    searchResult: [],
    relatedVideos: [],
    menuOpen: false,
    snackbarMsh: false,
    currentVideoSnipet: {},
    themeSelectValue: "Default"
};

const reducer = (state, action) => {
    switch (action.type) {
        case "setCurrentVideoSnippet":
            return {
                ...state,
                currentVideoSnipet: action.snippet
            }
    }
}

export const GlobalState = props => {
    const globalState = useReducer(reducer, initialState);
    return (
        <GlobalContext.Provider value={globalState}>
            {props.children}
        </GlobalContext.Provider>
    )
}