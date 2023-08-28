import { FranchiseInterface } from 'interfaces/franchise';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface DashboardInterface {
  id?: string;
  name: string;
  franchise_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  franchise?: FranchiseInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface DashboardGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  franchise_id?: string;
  organization_id?: string;
}
