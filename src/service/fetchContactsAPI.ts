import { axiosPB } from './axiosInstances';
import { IContact, INewContact } from '../Interfaces/interface'

//  arr[num, name, id]
export const getContacts = async () => {
  try {
    const response = await axiosPB.get<IContact[]>('/contacts');
    return response;
  } catch (error) {
    throw error;
  }
};

export const addContact = async (contactObj : INewContact) => {
  try {
    const response = await axiosPB.post<IContact>('/contacts', contactObj);
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
    const response = await axiosPB.patch<IContact>(`/contacts/${ObjId}`, changedObj);
    return response.data;
  } catch (error) {
    throw error;
  }
};
