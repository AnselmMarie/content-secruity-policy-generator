declare const rootReducer: import("redux").Reducer<{
    cspData: import("./csp/csp.type").ICspState;
    pageData: import("./page/page.type").IPageState;
    loaderData: import("./loader/loader.type").ILoaderState;
}, import("redux").AnyAction>;
export declare type AppState = ReturnType<typeof rootReducer>;
export default function configStore(): import("redux").Store<{
    cspData: import("./csp/csp.type").ICspState;
    pageData: import("./page/page.type").IPageState;
    loaderData: import("./loader/loader.type").ILoaderState;
}, import("redux").AnyAction>;
export {};
