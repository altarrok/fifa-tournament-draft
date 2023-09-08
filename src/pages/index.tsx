import { type NextPage } from "next";
import { DraftController } from "~/components/DraftController";
import { formationOptions } from "~/components/formation-picker/FormationPickWidget";
import { Pitch } from "~/components/pitch/Pitch";
import { DraftContextProvider } from "~/draft-context/DraftContext";

const Home: NextPage = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold w-full text-center my-2 py-2 border-b border-solid border-black">FIFA Offline Draft</h1>
      <DraftContextProvider>
        <DraftController />
      </DraftContextProvider>
    </main>
  );
};

export default Home;
