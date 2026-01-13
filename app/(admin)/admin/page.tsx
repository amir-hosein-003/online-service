import CommentsList from "@/components/admin/CommentsList";
import IncomeInformation from "@/components/admin/IncomeInformation";

const AdminDashboard = () => {
  return (
    <section className="">
      <IncomeInformation />
      <div className="w-full min-h-89 grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-6 bg-red-200 rounded-lg flex items-center justify-center text-2xl font-bold">
          چارت درامد
        </div>
        <div className="col-span-6 bg-cyan-200 rounded-lg flex items-center justify-center text-2xl font-bold">
          لیست آخرین سفارشات
        </div>
      </div>
      <div className="w-full rounded-lg mt-6">
        <CommentsList />
      </div>
    </section>
  );
};

export default AdminDashboard;
