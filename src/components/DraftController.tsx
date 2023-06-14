import { useContext } from "react";
import { DraftContext } from "~/draft-context/DraftContext";
import { UserCountPicker } from "./UserCountPicker";
import { DatasetUploader } from "./dataset/DatasetUploader";
import { FormationPickWidget } from "./formation-picker/FormationPickWidget";
import { PlayerPickWidget } from "./PlayerPickWidget";
import { DraftViewer } from "./DraftViewer";

export const DraftController: React.FC = () => {
    const { stage } = useContext(DraftContext);

    

    return (
        <>
            <h3 className="text-3xl font-bold">Player: {stage.user + 1}</h3>
            {
                (() => {
                    switch (stage.name) {
                        case "DB_UPLOAD":
                            return <DatasetUploader />;
                        case "USER_COUNT_PICK":
                            return <UserCountPicker />;
                        case "FORMATION_PICK":
                            return <FormationPickWidget />;
                        case "PLAYER_PICK":
                            return  <PlayerPickWidget />;
                    }
                })()
            }
            <DraftViewer />
        </>
    )
}