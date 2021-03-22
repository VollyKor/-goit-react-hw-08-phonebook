import { axiosPB } from './axiosInstances';
import { IContact, INewContact } from '../Interfaces/interface'

interface PaginatedContacts {
  limit: number,
  offset: number,
  contacts: IContact[]
}

interface IgetAllContacts {
  status: string,
  code: string,
  data: PaginatedContacts
}

interface IaddContacts {
  status: string,
  code: string,
  data: IContact
}

//  arr[num, name, id]
export const getContacts = async () => {
  try {
    const response = await axiosPB.get<IgetAllContacts>('/contacts');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addContact = async (contactObj : INewContact) => {
  try {
    const response = await axiosPB.post<IaddContacts>('/contacts', contactObj);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteContact = async (ObjId : string) => {
  try {
    await axiosPB.delete(`/contacts/${ObjId}`);
    return ObjId;
  } catch (error) {
    throw error;
  }
};

export const changeContact = async (ObjId:string, changedObj: INewContact)  => {
  try {
    const response = await axiosPB.patch<IaddContacts>(`/contacts/${ObjId}`, changedObj);
        console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
