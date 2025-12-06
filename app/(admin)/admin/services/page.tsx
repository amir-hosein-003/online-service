import React from "react";
import { PlusIcon } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getServicesList } from "@/lib/actions/services/getServicesList";
import AddFormFieldModal from "@/components/admin/services/AddFormFieldModal";
import AddSelectBoxFields from "@/components/admin/services/AddSelectBoxFields";
import ServiceActivatorBtn from "@/components/admin/services/ServiceActivatorBtn";

const DServicesPage = async () => {
  const { message, data } = await getServicesList();

  return (
    <div className="">
      <Table className="h-auto w-full overflow-auto">
        <TableHeader>
          <TableRow className="bg-sidebar">
            <TableHead className="w-[25px]">#</TableHead>
            <TableHead className="text-right">نام</TableHead>
            <TableHead className="text-right w-32">توضیحات</TableHead>
            <TableHead className="text-center">قیمت</TableHead>
            <TableHead className="text-center">وضعیت</TableHead>
            <TableHead className="text-center">فیلدها</TableHead>
            <TableHead className="text-center">سلکت باکس</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {message === "SUCCESS" && data.length > 0
            ? data.map((service, index) => (
                <TableRow key={index} className="h-12">
                  <TableCell className="w-[25px] font-medium">
                    {index + 1}
                  </TableCell>
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
                      <TooltipContent className="max-w-xs">
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
                    <div className="text-center">
                      <AddFormFieldModal serviceId={String(service._id)}>
                        <PlusIcon size="20" className="mx-auto" />
                      </AddFormFieldModal>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <AddSelectBoxFields serviceId={String(service._id)}>
                        <PlusIcon size="20" className="mx-auto" />
                      </AddSelectBoxFields>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </div>
  );
};

export default DServicesPage;
