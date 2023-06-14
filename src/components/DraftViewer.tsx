import { useContext } from "react";
import { DraftContext } from "~/draft-context/DraftContext";
import { Pitch } from "./pitch/Pitch";

export const DraftViewer: React.FC = () => {
    const { formations } = useContext(DraftContext);
    
    return (
        <div className="p-12 flex flex-col gap-6 border-t border-t-solid border-t-black mt-12">
            <h2 className="text-4xl font-bold">Formations</h2>
            <div className="flex flex-row flex-wrap gap-12 justify-around items-stretch">
                {
                    formations.map((formation, i) => (
                        <div key={i} className="p-2 border border-solid border-black rounded-sm box-border">
                            <h3 className="text-lg italic">Player {i + 1}</h3>
                            <h4 className="text-xl font-bold">{formation.name}</h4>
                            <Pitch formation={formation} onEmptyPositionClick={() => {}} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}