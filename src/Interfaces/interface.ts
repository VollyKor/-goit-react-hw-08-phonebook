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
    name: string
    phone: string;
}

export interface INewContact {
    name: string;
    phone: string;
}

export interface INotes {
    entities: INoteEntitiy[]
}

export interface INoteSubmit {
    title: string;
    text: string;
  }

export interface INotesResponse {
    code: number,
    data: INoteEntitiy[];
    status: string,
}
export interface IoneNoteResponse {
    code: number,
    data: INoteEntitiy;
    status: string,
}

export interface INoteEntitiy {
    title: string;
    text: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    date?: string;
}

export interface IAuth {
    user: IUser;
    isLoggedIn: boolean;
    isLoading: boolean;
    isFetching: boolean;
    error: IError | null;
    isRegistered: boolean;
}

export interface IError {
    status: number;
    message: string;
    descMessage?: string;
}

export interface IUser {
    name: string | null;
    email: string | null;
    token: string
}

export interface ICredentials {
    token: string;
    data: IUser;
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