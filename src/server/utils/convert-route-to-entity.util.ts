const mapping: Record<string, string> = {
  clients: 'client',
  dashboards: 'dashboard',
  franchises: 'franchise',
  organizations: 'organization',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
