import SautiZivume from "@/components/SautiZivume";
import SokoLaBoda from "@/components/SokoLaBoda";
import StoriZaPesa from "@/components/StoriZaPesa";
import TueleweTuinuke from "@/components/TueleweTuinuke";
import TutatueChangamoto from "@/components/TutatueChangamoto";
import VifaaNaMapambo from "@/components/VifaaNaMapambo";

const Tasks = () => {
  return (
    <div className="container-fluid mx-auto p-6 mb-16 bg-gradient-to-r from-slate-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-tl-xl rounded-tr-xl p-6 mb-6 text-center font-bold text-2xl text-white">
        {" "}
        Kamilisha Shughuli
        <p className="text-sm text-white font-normal">
          Kamilisha Shughuli kadha upate boda points zitakazo kuingiza kwa
          shindano lenye zawadi za kusisimua{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StoriZaPesa />
        <SokoLaBoda />
        <VifaaNaMapambo />
        <SautiZivume />
        <TueleweTuinuke />
        <TutatueChangamoto />
        {/* <QuizCard /> */}
        {/* <WatchAd /> */}
        {/* <TaskCategoryCard /> */}
      </div>
    </div>
  );
};

export default Tasks;
