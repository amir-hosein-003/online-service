"use client";

import React from "react";
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ServiceActivatorBtn from "./ServiceActivatorBtn";
import AddFormFieldModal from "./AddFormFieldModal";
import { EyeIcon, PlusIcon } from "lucide-react";
import ShowFormFieldModal from "./ShowFormFieldsModal";
import AddSelectBoxFields from "./AddSelectBoxFields";
import ShowSelectBoxFields from "./ShowSelectBoxFields";

interface Props {
  service: any;
  index: number;
}

const TableContent = ({ service, index }: Props) => {
  return (
    <TableRow className="h-12">
      <TableCell className="w-[25px] font-medium">
        <Input
          type="checkbox"
          className="w-4 h-4"
          // onChange={() => alert("changed")}
        />
      </TableCell>
      <TableCell className="w-[25px] font-medium">{index + 1}</TableCell>
      <TableCell>{service.name}</TableCell>
      <TableCell>
        <Tooltip>
          <TooltipTrigger asChild>
            <p>
              {service.description.length > 24
                ? service.description.slice(0, 24) + "..."
                : service.description}
            </p>
          </TooltipTrigger>
          <TooltipContent className="w-fit">
            {service.description}
          </TooltipContent>
        </Tooltip>
      </TableCell>
      <TableCell className="text-center">{service.price}</TableCell>
      <TableCell
        className={`text-center ${service.isActive ? "text-success" : "text-destructive"}`}
      >
        <ServiceActivatorBtn
          isActive={service.isActive}
          serviceId={String(service._id)}
        />
      </TableCell>
      <TableCell>
        <div className="flex flex-row items-center justify-center gap-2">
          <AddFormFieldModal serviceId={String(service._id)}>
            <PlusIcon size="20" className="mx-auto" />
          </AddFormFieldModal>
          <ShowFormFieldModal
            formFields={JSON.parse(JSON.stringify(service.formFields))}
          >
            <EyeIcon />
          </ShowFormFieldModal>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex flex-row items-center justify-center gap-2">
          <AddSelectBoxFields serviceId={String(service._id)}>
            <PlusIcon size="20" className="mx-auto" />
          </AddSelectBoxFields>
          <ShowSelectBoxFields>
            <EyeIcon />
          </ShowSelectBoxFields>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableContent;
