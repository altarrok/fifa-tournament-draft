import { TPlayerPosition } from "../PlayerPicker";

export type TFormation = {
    name: string,
    playerPositions: TPlayerPosition[]
}

export const FormationPicker: React.FC<{
    formations: TFormation[],
    onSelect: (formation: TFormation) => void,
}> = ({ formations, onSelect }) => {
    return (
        <div className="flex gap-2">
            {formations.map((formation, i) => (
                <button
                    key={i}
                    className="py-2 px-3 text-2xl border border-solid border-black rounded-md"
                    onClick={() => onSelect(structuredClone(formation))}
                >
                    {formation.name}
                </button>
            ))}
        </div>
    );
}