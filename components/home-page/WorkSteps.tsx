import RadialGlow from "../RadialGlow";

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "پر کردن فرم",
    description: "ابتدا اطلاعات خود را وارد کنید",
  },
  {
    title: "انتخاب خدمت",
    description: "خدمت مورد نظر خود را انتخاب کنید",
  },
  {
    title: "پرداخت آنلاین",
    description: "هزینه خدمت+کارمزد رو پرداخت کن، کارتو انجام شده بدون",
  },
];

const WorkSteps = () => {
  return (
    <section className="w-full overflow-hidden py-16">
      <div className="container mx-auto relative ">
        <RadialGlow className="-right-64" color="#ff0000" size="16rem" />
        <RadialGlow className="left-6 top-32" color="#0000ff" size="16rem" />
        <h3 className="text-3xl font-bold">مراحل انجام کار</h3>
        <div className="grid grid-cols-2">
          <div className=""></div>
          <div className="mt-16">
            {steps.map((step: Step, index: number) => (
              <div key={index} className="flex flex-row gap-4 w-fit">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border-2 border-base-content flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="w-0.5 h-20 bg-base-content" />
                </div>
                <div
                  className={`bg-base-200 h-fit rounded-md p-4 hover:shadow hover:scale-105 duration-200 ${index === 1 && "translate-x-80"}`}
                >
                  <p className="font-bold">{step.title}</p>
                  <p className="text-base-content/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSteps;
