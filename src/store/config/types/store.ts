import { IAppSchema } from '@/store/app/types/app'

export interface IStateSchema {
    app: IAppSchema
}

export interface ThunkConfig<T> {
    rejectValue: T
    state: IStateSchema
}
