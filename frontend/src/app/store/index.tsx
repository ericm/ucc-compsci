import { RootState, rootReducer } from "app/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Store, applyMiddleware, createStore } from "redux";
import { logger } from "app/middleware";

export function configureStore(intialState?: RootState): Store<RootState> {
    let middleware = applyMiddleware(logger);

    if (process.env.NODE_ENV !== 'production') {
        middleware = composeWithDevTools(middleware);
    }

    const store = createStore(rootReducer as any, intialState as any, middleware as any) as Store<RootState>;

    if (module.hot) {
        module.hot.accept('app/reducers', () => {
            const nextReducer = require('app/reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;

}
