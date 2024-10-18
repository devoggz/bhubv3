import Quiz from "@/components/Quiz";

const page = () => {
  return (
    <div className="container mx-auto p-6 mb-8 bg-gradient-to-r from-slate-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-tl-xl rounded-tr-xl p-6 mb-6 text-center font-bold text-2xl text-white">
        {" "}
        Complete Quiz
        <p className="text-sm text-white font-normal">
          Each question earns you +2 points{" "}
        </p>
      </div>
      <Quiz />
    </div>
  );
};

export default page;
