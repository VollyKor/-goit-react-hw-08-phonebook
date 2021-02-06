
export interface IState {
    auth: IAuth;
    notes: INotes;
    phonebook: IPhonebook;

}

export interface IPhonebook {
    entities: IContact[]
    filterQuery: string;
} 

export interface IContact {
    id: string;
    name: string;
    number: string;
}

export interface INewContact {
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
    descMessage?: string;
}

export interface IUser {
    name: string | null;
    email: string | null;
}

export interface ICredentials {
    token: string;
    user: IUser;
}

export interface ILogIn {
    email: string;
    password: string;
}

export interface ISignUp {
    email: string; 
    name: string;
    password: string;
}