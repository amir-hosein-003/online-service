import { Income, incomeList } from "@/lib/lists/incomeList";

const IncomeInformation = () => {
  return (
    <div className="grid grid-cols-5 gap-6">
      {incomeList.map((info: Income, index: number) => (
        <div
          key={index}
          className={`min-h-24 flex flex-col justify-center gap-2 relative rounded-lg overflow-hidden p-4 ${info.bgColor}`}
        >
          <div
            className={`w-1.5 h-full absolute top-0 right-0 ${info.color}`}
          />
          <p className="text-xl">{info.title}</p>
          <p className="font-bold">{info.value}</p>
        </div>
      ))}
    </div>
  );
};

export default IncomeInformation;
