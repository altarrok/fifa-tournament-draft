import { useContext, useEffect, useState } from "react";
import { randomNItemSampler } from "~/util/randomItemSampler";
import { FormationPicker, TFormation } from "./FormationPicker";
import { EPlayerPosition } from "../PlayerPicker";
import { DraftContext } from "~/draft-context/DraftContext";

export const formationOptions: TFormation[] = [
    {
        name: "3-1-4-2",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [175, 120],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [275, 120],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 275],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [150, 340],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [225, 375],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [300, 340],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [375, 275],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [100, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [225, 510],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [350, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "3-4-1-2",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [175, 120],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [275, 120],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [225, 225],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 275],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [150, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [300, 340],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [375, 275],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [100, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [225, 510],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [350, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "3-4-2-1",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CF,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CF,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [0, 0],
            },
        ],
    },
    {
        name: "3-4-3 Diamond",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.LW,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.RW,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [0, 0]
            },
        ],
    },
    {
        name: "3-4-3 Flat",
        playerPositions: [
            {
                position: EPlayerPosition.LW,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.RW,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0]
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [0, 0]
            },
        ],
    },
    {
        name: "3-5-1-1",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CF,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [0, 0],
            },
        ],
    },
    {
        name: "3-5-2",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [0, 0],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [0, 0],
            },
        ],
    },
    // {
    //     name: "4-1-2-1-2 Narrow",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-1-2-1-2 Wide",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-1-3-2",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-1-4-1",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-2-2-2",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-2-3-1 Narrow",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-2-3-1 Wide",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-2-4",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-3-1-2",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-3-2-1",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-3-3 Attack",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-3-3 Defend",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-3-3 False 9",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-3-3 Flat",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-3-3 Holding",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-4-1-1 Attack",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-4-1-1 Midfield",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-4-2 Flat",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-4-2 Holding",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-5-1 Attack",
    //     playerPositions: [],
    // },
    // {
    //     name: "4-5-1 Flat",
    //     playerPositions: [],
    // },
    // {
    //     name: "5-1-2-2",
    //     playerPositions: [],
    // },
    // {
    //     name: "5-2-1-2",
    //     playerPositions: [],
    // },
    // {
    //     name: "5-2-3",
    //     playerPositions: [],
    // },
    // {
    //     name: "5-3-2",
    //     playerPositions: [],
    // },
    // {
    //     name: "5-4-1 Diamond",
    //     playerPositions: [],
    // },
    // {
    //     name: "5-4-1 Flat",
    //     playerPositions: [
    //         { position: EPlayerPosition.ST },
    //         { position: EPlayerPosition.LM },
    //         { position: EPlayerPosition.CM },
    //         { position: EPlayerPosition.CM },
    //         { position: EPlayerPosition.RM },
    //         { position: EPlayerPosition.LWB },
    //         { position: EPlayerPosition.CB },
    //         { position: EPlayerPosition.CB },
    //         { position: EPlayerPosition.CB },
    //         { position: EPlayerPosition.RWB },
    //         { position: EPlayerPosition.GK },
    //     ],
    // },
];


export const FormationPickWidget: React.FC = () => {
    const { setDraftContext, stage } = useContext(DraftContext);
    const [randomFormations, setRandomFormations] = useState<TFormation[]>([]);

    useEffect(() => {
        setRandomFormations(randomNItemSampler<TFormation>(formationOptions, 4))
    }, [stage.user]);

    return (
        <FormationPicker
            formations={randomFormations}
            onSelect={(formation) => {
                setDraftContext((prevCtx) => ({
                    ...prevCtx,
                    formations: [...prevCtx.formations, formation],
                    stage: (prevCtx.stage.user + 1 === prevCtx.userCount ? {
                        name: "PLAYER_PICK",
                        user: 0,
                    } : {
                        name: "FORMATION_PICK",
                        user: prevCtx.stage.user + 1,
                    })
                }))
            }}
        />
    );
}