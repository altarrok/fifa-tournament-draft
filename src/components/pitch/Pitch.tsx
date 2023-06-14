import { TFormation } from "../formation-picker/FormationPicker";
import { PitchSVG } from "./PitchSVG";
import { PlayerCard } from "./PlayerCard";

export const Pitch: React.FC<{
    formation: TFormation,
    onEmptyPositionClick: (index: number) => void,
}> = ({ formation, onEmptyPositionClick }) => {
    return (
        <div className="w-[452px] h-[684px] relative">
            <PitchSVG />
            {formation.playerPositions.map((playerPosition, i) => (
                <div
                    key={i}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: playerPosition.pitchOffset[0], top: playerPosition.pitchOffset[1] }}
                >
                    <PlayerCard
                        position={playerPosition.position}
                        player={playerPosition.player}
                        onClick={() => playerPosition.player === undefined ? onEmptyPositionClick(i) : {}}
                    />
                </div>
            ))}
        </div>
    );
}

