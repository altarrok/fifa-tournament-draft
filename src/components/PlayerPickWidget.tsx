import { useContext, useEffect, useState } from "react";
import { EPlayerPosition, PlayerPicker } from "./PlayerPicker";
import { DraftContext } from "~/draft-context/DraftContext";
import { TPlayer } from "./dataset/DatasetUploader";
import { randomNItemSampler } from "~/util/randomItemSampler";
import Modal from 'react-modal';
import { Pitch } from "./pitch/Pitch";
import { randomNWeightedPlayerSampler } from "~/util/weightedRandomPlayerSampler";

{ process.env.NODE_ENV !== 'test' ? Modal.setAppElement("#__next") : Modal.setAppElement("body") }

export const PlayerPickWidget: React.FC = () => {
    const { database, formations, stage, setDraftContext } = useContext(DraftContext);
    const [selectedPosition, setSelectedPosition] = useState<number>();
    const [randomPlayers, setRandomPlayers] = useState<TPlayer[]>([]);

    useEffect(() => {
        if (selectedPosition !== undefined && database.length) {            
            setRandomPlayers(randomNWeightedPlayerSampler(database.filter(player => player.Position === formations[stage.user]!.playerPositions[selectedPosition]!.position).slice(0, 20), 5))
        }
    }, [selectedPosition]);

    return (
        <>
        <Pitch formation={formations[stage.user]!} onEmptyPositionClick={(i) => setSelectedPosition(i)} />


            <Modal
                isOpen={selectedPosition !== undefined}
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={false}
                contentLabel="Example Modal"
            >
                {
                    selectedPosition !== undefined &&
                    <PlayerPicker
                        position={formations[stage.user]!.playerPositions[selectedPosition]!.position}
                        players={randomPlayers}
                        onChoose={(chosenPlayer) => {
                            setDraftContext((prevCtx) => {
                                const userFormation = formations[stage.user]!;

                                userFormation.playerPositions[selectedPosition]!.player = chosenPlayer;

                                const newFormations = [...formations];
                                newFormations.splice(stage.user, 1, userFormation);

                                return {
                                    ...prevCtx,
                                    database: prevCtx.database.filter(player => player.id !== chosenPlayer.id),
                                    stage: (prevCtx.stage.user + 1 === prevCtx.userCount ? (
                                        prevCtx.formations.flat()
                                            .map(formations => formations.playerPositions)
                                            .flat()
                                            .filter(player => player.player === undefined).length ? {
                                            name: "PLAYER_PICK",
                                            user: 0,
                                        } : {
                                            name: "DISPLAY",
                                            user: 0,
                                        }
                                    ) : {
                                        name: "PLAYER_PICK",
                                        user: prevCtx.stage.user + 1,
                                    }),
                                    formations: newFormations,
                                }
                            })
                            setSelectedPosition(undefined);
                        }}
                    />
                }
            </Modal>
        </>
    );
}