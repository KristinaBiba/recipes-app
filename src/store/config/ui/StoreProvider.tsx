// 'use client'

// import { ReactNode, useRef } from 'react'
// import { Provider } from 'react-redux'
// import { AppStore, createReduxStore } from '@/store/config/store'

// interface StoreProviderProps {
//     children: ReactNode
// }

// const StoreProvider = (props: StoreProviderProps) => {
//     const { children } = props

//     const storeRef = useRef<AppStore>()
//     if (!storeRef.current) {
//         storeRef.current = createReduxStore()
//     }

//     return <Provider store={storeRef.current}>{children}</Provider>
// }

// export default StoreProvider
