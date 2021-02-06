import { axiosPB } from './axiosInstances';
import { IContact, INewContact } from '../redux/store.interface'

//  arr[num, name, id]
export const getContacts = async () => {
  try {
    const response = await axiosPB.get<IContact[]>('/contacts');
    return response;
  } catch (error) {
    throw error;
  }
};

type TAddContact = { 
      name: string;
    number: string;
}

export const addContact = async (contactObj : TAddContact) => {
  try {
    const response = await axiosPB.post<TAddContact>('/contacts', contactObj);
    return response;
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
    const response = await axiosPB.patch<IContact>(`/contacts/${ObjId}`, changedObj);
    return response.data;
  } catch (error) {
    throw error;
  }
};
