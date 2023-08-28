interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Organization User'],
  customerRoles: [],
  tenantRoles: ['Franchise User', 'Organization User'],
  tenantName: 'Client',
  applicationName: 'complyMed v5',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
