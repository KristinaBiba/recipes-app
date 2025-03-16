import { IStateSchema } from '@/store/config/types/store'
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { appReducer } from '@/store/app/reducer/appReducer'

export function createReduxStore() {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        app: appReducer,
    }

    return configureStore({
        reducer: rootReducers,
        devTools: process.env.NODE_ENV === 'development',
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    })
}

export type AppStore = ReturnType<typeof createReduxStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
