import { useContext, useEffect, useState } from "react";
import { EPlayerPosition, PlayerPicker, TPlayerPosition } from "./PlayerPicker";
import { DraftContext } from "~/draft-context/DraftContext";
import { TPlayer } from "./dataset/DatasetUploader";
import { randomNItemSampler } from "~/util/randomItemSampler";
import Modal from 'react-modal';

{ process.env.NODE_ENV !== 'test' ? Modal.setAppElement("#__next") : Modal.setAppElement("body") }

export const PlayerPickWidget: React.FC = () => {
    const { database, formations, stage, setDraftContext } = useContext(DraftContext);
    const [selectedPosition, setSelectedPosition] = useState<number>();
    const [randomPlayers, setRandomPlayers] = useState<TPlayer[]>([]);
    // when a player is picked, 
    //  the chosen position is not rendered anymore, instead, render the chosen player
    //  move to the next stage

    useEffect(() => {
        if (selectedPosition !== undefined && database.length) {
            setRandomPlayers(randomNItemSampler<TPlayer>(database.filter(player => player.Position === formations[stage.user]!.playerPositions[selectedPosition]!.position), 5))
        }
    }, [selectedPosition]);

    console.log(formations, selectedPosition);


    return (
        <>
            <div className="flex flex-row flex-wrap gap-2 items-center">
                {
                    formations[stage.user]!.playerPositions.map((playerPosition, i) => (
                        playerPosition.player === undefined ? (
                            <button
                                className="py-2 px-3 border border-solid border-black rounded-md bg-green-200"
                                key={i}
                                onClick={() => setSelectedPosition(i)}
                            >
                                {playerPosition.position}
                            </button>
                        ) : (
                            <div className="py-2 px-3 border border-solid border-black rounded-md">{playerPosition.player.Name} | {playerPosition.player.Overall} | {playerPosition.player.Position}</div>
                        )
                    ))
                }
            </div>

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
                                            // name: "DISPLAY",
                                            name: "PLAYER_PICK",
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