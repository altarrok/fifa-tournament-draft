import { useContext, useState } from "react";
import { DraftContext } from "~/draft-context/DraftContext";


export const UserCountPicker: React.FC = () => {
    const [userCount, setUserCount] = useState(1);
    const { setDraftContext } = useContext(DraftContext);

    return (
        <>
            <label htmlFor="user-count">User Count: </label>
            <select id="user-count" value={userCount} onChange={(e) => setUserCount(Number(e.target.value))}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
            </select>
            <button
                className="py-2 px-3 border border-solid border-black rounded-md"
                onClick={() => setDraftContext((prevCtx) => ({ 
                    ...prevCtx, 
                    userCount,
                    stage: {
                        name: "FORMATION_PICK",
                        user: 0
                    } 
                }))}
            >
                Let's start!
            </button>
        </>
    );
}