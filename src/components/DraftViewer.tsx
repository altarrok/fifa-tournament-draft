import { useContext } from "react";
import { DraftContext } from "~/draft-context/DraftContext";

export const DraftViewer: React.FC = () => {
    const { formations } = useContext(DraftContext);
    return (
        <div className="p-12 flex flex-col gap-6 border-t border-t-solid border-t-black mt-12">
            <h2 className="text-4xl font-bold">Formations</h2>
            <div className="flex flex-row flex-wrap gap-12 justify-around items-stretch">
                {
                    formations.map((formation, i) => (
                        <div className="p-2 border border-solid border-black rounded-sm w-1/4 box-border">
                            <h3>Player {i + 1}</h3>
                            <h4>{formation.name}</h4>
                            <div>
                                {
                                    formation.playerPositions.map((playerPosition, i) => (
                                        playerPosition.player === undefined ? (
                                            <button
                                                className="py-2 px-3 border border-solid border-black rounded-md bg-green-200"
                                                key={i}
                                            >
                                                {playerPosition.position}
                                            </button>
                                        ) : (
                                            <div className="py-2 px-3 border border-solid border-black rounded-md">{playerPosition.player.Name} | {playerPosition.player.Overall} | {playerPosition.player.Position}</div>
                                        )
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}