import axios from 'axios';
import queryString from 'query-string';
import { FranchiseInterface, FranchiseGetQueryInterface } from 'interfaces/franchise';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFranchises = async (
  query?: FranchiseGetQueryInterface,
): Promise<PaginatedInterface<FranchiseInterface>> => {
  const response = await axios.get('/api/franchises', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createFranchise = async (franchise: FranchiseInterface) => {
  const response = await axios.post('/api/franchises', franchise);
  return response.data;
};

export const updateFranchiseById = async (id: string, franchise: FranchiseInterface) => {
  const response = await axios.put(`/api/franchises/${id}`, franchise);
  return response.data;
};

export const getFranchiseById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/franchises/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFranchiseById = async (id: string) => {
  const response = await axios.delete(`/api/franchises/${id}`);
  return response.data;
};
