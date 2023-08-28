import { FranchiseInterface } from 'interfaces/franchise';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  title: string;
  description?: string;
  status: string;
  franchise_id: string;
  created_at?: any;
  updated_at?: any;

  franchise?: FranchiseInterface;
  _count?: {};
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
  franchise_id?: string;
}
