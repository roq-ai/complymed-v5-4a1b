import { DashboardInterface } from 'interfaces/dashboard';
import { TaskInterface } from 'interfaces/task';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface FranchiseInterface {
  id?: string;
  name: string;
  location?: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  dashboard?: DashboardInterface[];
  task?: TaskInterface[];
  organization?: OrganizationInterface;
  _count?: {
    dashboard?: number;
    task?: number;
  };
}

export interface FranchiseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  organization_id?: string;
}
