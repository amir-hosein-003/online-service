import _ from 'lodash';

const dashboardPath = {
  admin: "داشبورد",
  users: "کاربرها",
  services: "خدمات",
  settings: "تنظیمات",
};

export const t = (key: string): string => {
  return _.get(dashboardPath, key, "داشبورد");
};
