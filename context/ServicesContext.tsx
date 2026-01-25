"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ServicesContextType = {
  ids: string[];
  setIds: Dispatch<SetStateAction<string[]>>;
};

export const ServicesContext = createContext<ServicesContextType | undefined>(
  undefined
);

export const ServicesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ids, setIds] = useState<string[]>([]);
  console.log("from context: ", ids)
  return (
    <ServicesContext.Provider value={{ ids, setIds }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = (): ServicesContextType => {
  const context = useContext(ServicesContext);

  if (context === undefined) {
    throw new Error("Please wrap the component with Auth provider");
  }

  return context;
};
