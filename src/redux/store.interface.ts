
export interface IState {
    auth: IAuth;
    notes: INotes;
    phonebook: IPhonebook;

}

export interface IPhonebook {
    entities: IContacts[]
    filterQuery: string;
} 

export interface IContacts {
    id: string;
    name: string;
    number: string;
}

export interface INotes {
    entities: INoteEntities[];
}

export interface INoteEntities {
    id: string;
    title: string;
    text: string;
    createTime: number;
}

export interface IAuth {
    user: IUser;
    token: string | null;
    isLoggedIn: boolean;
    isLoading: boolean;
    isFetching: boolean;
    error: IError | null;
}

export interface IError {
    status: number;
    message: string;
}

export interface IUser {
    name: string | null;
    email: string | null;
}

export interface ICredentials {
    token: string;
    user: IUser;
}