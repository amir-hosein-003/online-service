import React from "react";
import AccountSettings from "@/components/admin/settings/AccountSettings";
import ChangePassword from "@/components/admin/settings/ChangePassword";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <AccountSettings />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 min-h-80 w-full bg-base-200 rounded-lg"></div>
        <div className="col-span-4 min-h-80 w-full bg-base-200 rounded-lg">
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
