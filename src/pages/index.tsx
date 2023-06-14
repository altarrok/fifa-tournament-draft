import { type NextPage } from "next";
import { DraftController } from "~/components/DraftController";
import { DraftContextProvider } from "~/draft-context/DraftContext";

const Home: NextPage = () => {
  return (
    <DraftContextProvider>
      <DraftController />
    </DraftContextProvider>
  );
};

export default Home;
