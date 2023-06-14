import { type NextPage } from "next";
import { DraftController } from "~/components/DraftController";
import { formationOptions } from "~/components/formation-picker/FormationPickWidget";
import { Pitch } from "~/components/pitch/Pitch";
import { DraftContextProvider } from "~/draft-context/DraftContext";

const Home: NextPage = () => {
  return (
    <DraftContextProvider>
      <DraftController />
    </DraftContextProvider>
  );
};

export default Home;
