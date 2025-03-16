import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'
import { AppDispatch, AppStore, RootState } from '@/store/config/store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore
