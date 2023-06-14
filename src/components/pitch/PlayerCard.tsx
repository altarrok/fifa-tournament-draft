import { EPlayerPosition } from "../PlayerPicker";
import { TPlayer } from "../dataset/DatasetUploader";


export const PlayerCard: React.FC<{
    position: EPlayerPosition,
    onClick: () => void,
    player?: TPlayer
}> = ({ position, player, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="border border-solid border-black cursor-pointer w-[50px] flex flex-col items-center bg-black/75 p-2"
        >
            {
                player && (
                    <>
                        <img src={player.picture} alt="" />
                        <h5 className="text-clip text-xs text-slate-200 w-full overflow-hidden whitespace-nowrap" title={player.Name}>{player.Name}</h5>
                        <h4 className="text-xl font-bold text-white">{player.Overall}</h4>
                    </>
                )
            }
            <h4 className="text-xs text-white border border-solid rounded-full p-1 px-2 bg-black/50">{position}</h4>
        </div>
    );
}