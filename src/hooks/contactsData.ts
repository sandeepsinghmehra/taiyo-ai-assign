import axios from 'axios';
import { useQuery } from 'react-query';

export function useContacts() {
  return useQuery('contacts', fetchContacts);
}

async function fetchContacts() {
  const results = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/contacts`);
  return results?.data?.response;
}
export function useContact(contactId:any) {
    return useQuery('contact', () => fetchContact(contactId));
}
  
async function fetchContact(contactId:any) {
    const results = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/contact/${contactId}`);
    return results?.data?.response;
}