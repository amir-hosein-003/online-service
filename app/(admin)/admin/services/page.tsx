import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getServicesList } from "@/lib/actions/services/getServicesList";
import TableContent from "@/components/admin/services/TableContent";

const DServicesPage = async () => {
  const { message, data } = await getServicesList();

  return (
    <Table className="h-auto w-full overflow-auto">
      <TableHeader>
        <TableRow className="bg-sidebar">
          <TableHead className="max-w-[25px]"></TableHead>
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
              <TableContent key={index} service={JSON.parse(JSON.stringify(service))} index={index} />
            ))
          : null}
      </TableBody>
    </Table>
  );
};

export default DServicesPage;
