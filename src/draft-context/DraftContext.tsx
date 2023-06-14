import { Dispatch, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from "react";
import { TDatabase, TPlayer } from "~/components/dataset/DatasetUploader";
import { TFormation } from "~/components/formation-picker/FormationPicker";

interface IDraftContext {
  database: TDatabase;
  setDraftContext: Dispatch<SetStateAction<IDraftContext>>;
  userCount: number;
  stage: TDraftStage;
  formations: TFormation[];
}

const defaultDraftContext: IDraftContext = {
  database: [],
  setDraftContext: () => { return; },
  userCount: 0,
  stage: {
    name: "DB_UPLOAD",
    user: 0,
  },
  formations: [],
}

export const DraftContext = createContext<IDraftContext>(defaultDraftContext);

export const DraftContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [draftContext, setDraftContext] = useState<IDraftContext>(defaultDraftContext);

  useEffect(() => {
    setDraftContext((oldDraftContext) => ({
      ...oldDraftContext,
      setDraftContext
    }))
  }, [setDraftContext])

  return (
    <DraftContext.Provider value={draftContext}>
      {children}
    </DraftContext.Provider>
  );
}

export type TDraftStage =  {
  user: number,
  name: "DB_UPLOAD" | "USER_COUNT_PICK" | "FORMATION_PICK" | "PLAYER_PICK" | "DISPLAY"
}
