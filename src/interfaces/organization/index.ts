import { DashboardInterface } from 'interfaces/dashboard';
import { FranchiseInterface } from 'interfaces/franchise';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  name: string;
  address?: string;
  client_id: string;
  created_at?: any;
  updated_at?: any;
  dashboard?: DashboardInterface[];
  franchise?: FranchiseInterface[];
  client?: ClientInterface;
  _count?: {
    dashboard?: number;
    franchise?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  client_id?: string;
}
