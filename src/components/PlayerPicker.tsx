import { TPlayer } from "./dataset/DatasetUploader";

export enum EPlayerPosition {
    GK = "GK",
    CB = "CB",
    RB = "RB",
    LB = "LB",
    RWB = "RWB",
    LWB = "LWB",
    CM = "CM",
    CDM = "CDM",
    CAM = "CAM",
    RM = "RM",
    LM = "LM",
    ST = "ST",
    CF = "CF",
    RF = "RF",
    LF = "LF",
    RW = "RW",
    LW = "LW",
}

export type TPlayerPosition = {
    position: EPlayerPosition,
    player?: TPlayer,
}

export const PlayerPicker: React.FC<{
    position: EPlayerPosition,
    players: TPlayer[],
    onChoose: (player: TPlayer) => void,
}> = ({ position, players, onChoose }) => {
    return (
        <div>
            <h3 className="text-3xl font-bold">{position}</h3>
            <div className="flex flex-row items-center gap-2">
                {
                    players.map((player, i) => (
                        <button
                            className="py-2 px-3 border border-solid border-black rounded-md"
                            key={i}
                            onClick={() => onChoose(player)}
                        >
                            {player.Name} | {player.Overall} | {player.Position}
                        </button>
                    ))
                }
            </div>
        </div>
    );
}