"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PersonalForm from "./personalForm";
import ServiceForm from "./serviceForm";
import Icon from "../ui/icon";

type Steps = {
  step: number;
  title: string;
  value: string;
};

const steps: Steps[] = [
  { step: 1, title: "اطلاعات شخصی", value: "personal" },
  { step: 2, title: "انتخاب خدمت", value: "service" },
  { step: 3, title: "پرداخت", value: "payment" },
];

const RequestTabs = () => {
  const [currentTab, setCurrentTab] = useState("personal");

  return (
    <section className="w-4xl h-fit mx-auto border-2 rounded-md shadow p-6 my-16">
      <Tabs
        defaultValue="personal"
        value={currentTab}
        onValueChange={() => {}}
        className="w-full h-full grid grid-cols-3 gap-6"
        dir="rtl"
      >
        <TabsList className="col-span-1 w-full h-full flex flex-col rounded-md bg-base-200 p-6">
          {steps.map((step: Steps, index: number) => {
            const currentIndex = steps.findIndex((s) => s.value === currentTab);
            const isCompleted = index < currentIndex;

            return (
              <TabsTrigger
                key={index}
                value={step.value}
                className="w-full flex flex-row items-center justify-start gap-4"
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full border-2
                    ${isCompleted ? "border-success" : "border-base-content"}
                    `}
                >
                  {isCompleted ? (
                    <div className="w-full h-full flex flex-row items-center justify-center rounded-full bg-success">
                      <Icon
                        icon="ph:checks"
                        className="text-white"
                        width="24"
                        height="24"
                      />
                    </div>
                  ) : (
                    step.step
                  )}
                </div>
                <div
                  className={`text-lg ${
                    isCompleted ? "text-success" : "text-base-content"
                  }`}
                >
                  {step.title}
                </div>
              </TabsTrigger>
            );
          })}
        </TabsList>
        <div className="col-span-2 w-full h-full">
          <TabsContent value="personal" className="h-full">
            <PersonalForm onNext={() => setCurrentTab("service")} />
          </TabsContent>
          <TabsContent value="service" className="h-full">
            <ServiceForm
              onNext={() => setCurrentTab("payment")}
              onBack={() => setCurrentTab("personal")}
            />
          </TabsContent>
          <TabsContent value="payment">test3</TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default RequestTabs;
