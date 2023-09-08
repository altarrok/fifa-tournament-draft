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
                pitchOffset: [225, 120],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [125, 150],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [325, 150],
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
        name: "3-4-3 Diamond",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 120],
            },
            {
                position: EPlayerPosition.LW,
                pitchOffset: [100, 150]
            },
            {
                position: EPlayerPosition.RW,
                pitchOffset: [350, 150]
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [225, 225]
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 300]
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [225, 400]
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [375, 300]
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
        name: "3-4-3 Flat",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 120],
            },
            {
                position: EPlayerPosition.LW,
                pitchOffset: [100, 150]
            },
            {
                position: EPlayerPosition.RW,
                pitchOffset: [350, 150]
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 300]
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [175, 340]
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [275, 340]
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [375, 300]
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
        name: "3-5-1-1",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 75],
            },
            {
                position: EPlayerPosition.CF,
                pitchOffset: [225, 175],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 300],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [150, 360],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [225, 340],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [300, 360],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [375, 300],
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
        name: "3-5-2",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [175, 100],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [275, 100],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [225, 200],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 275],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [150, 360],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [300, 360],
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
        name: "4-1-2-1-2 Narrow",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [175, 100],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [275, 100],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [225, 225],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [300, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [150, 340],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [225, 425],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-1-2-1-2 Wide",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [175, 100],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [275, 100],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [225, 225],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [375, 340],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 340],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [225, 425],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-1-3-2",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [175, 100],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [275, 100],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [225, 340],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [375, 340],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 340],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [225, 425],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-1-4-1",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 100],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [375, 340],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [300, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [150, 340],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [225, 425],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-2-2-2",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [175, 100],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [275, 100],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [125, 250],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [325, 250],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [275, 425],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [175, 425],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-2-3-1 Narrow",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 100],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [325, 225],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [225, 225],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [125, 225],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [275, 425],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [175, 425],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-2-3-1 Wide",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 100],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [375, 325],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [225, 225],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 325],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [275, 425],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [175, 425],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-2-4",
        playerPositions: [
            {
                position: EPlayerPosition.LW,
                pitchOffset: [75, 125],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [175, 100],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [275, 100],
            },
            {
                position: EPlayerPosition.RW,
                pitchOffset: [375, 125],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [300, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [150, 340],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-3-1-2",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [175, 100],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [275, 100],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [225, 225],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [325, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [125, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [225, 375],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-3-2-1",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [125, 150],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 100],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [325, 150],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [325, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [125, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [225, 340],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-3-3 Attack",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 100],
            },
            {
                position: EPlayerPosition.LW,
                pitchOffset: [100, 125],
            },
            {
                position: EPlayerPosition.RW,
                pitchOffset: [350, 125],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [225, 275],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [300, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [150, 340],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-3-3 Defend",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 100],
            },
            {
                position: EPlayerPosition.LW,
                pitchOffset: [100, 125],
            },
            {
                position: EPlayerPosition.RW,
                pitchOffset: [350, 125],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [225, 340],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [150, 425],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [300, 425],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-3-3 False 9",
        playerPositions: [
            {
                position: EPlayerPosition.CF,
                pitchOffset: [225, 150],
            },
            {
                position: EPlayerPosition.LW,
                pitchOffset: [100, 125],
            },
            {
                position: EPlayerPosition.RW,
                pitchOffset: [350, 125],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [300, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [150, 340],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [225, 425],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-3-3 Flat",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 100],
            },
            {
                position: EPlayerPosition.LW,
                pitchOffset: [100, 125],
            },
            {
                position: EPlayerPosition.RW,
                pitchOffset: [350, 125],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [300, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [150, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [225, 350],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-3-3 Holding",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 100],
            },
            {
                position: EPlayerPosition.LW,
                pitchOffset: [100, 125],
            },
            {
                position: EPlayerPosition.RW,
                pitchOffset: [350, 125],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [300, 340],
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
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-4-1-1 Attack",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 100],
            },
            {
                position: EPlayerPosition.CF,
                pitchOffset: [225, 200],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [375, 325],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 325],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [175, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [275, 340],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-4-1-1 Midfield",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 100],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [225, 200],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [375, 325],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 325],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [175, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [275, 340],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-4-2 Flat",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [175, 100],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [275, 100],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [375, 325],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 325],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [175, 340],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [275, 340],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-4-2 Holding",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [175, 100],
            },
            {
                position: EPlayerPosition.ST,
                pitchOffset: [275, 100],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [375, 325],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 325],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [175, 400],
            },
            {
                position: EPlayerPosition.CDM,
                pitchOffset: [275, 400],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-5-1 Attack",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 100],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [150, 225],
            },
            {
                position: EPlayerPosition.CAM,
                pitchOffset: [300, 225],
            },
            {
                position: EPlayerPosition.RM,
                pitchOffset: [375, 325],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 325],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [225, 340],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
    {
        name: "4-5-1 Flat",
        playerPositions: [
            {
                position: EPlayerPosition.ST,
                pitchOffset: [225, 100],
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
                pitchOffset: [375, 300],
            },
            {
                position: EPlayerPosition.LM,
                pitchOffset: [75, 300],
            },
            {
                position: EPlayerPosition.CM,
                pitchOffset: [225, 375],
            },
            {
                position: EPlayerPosition.RB,
                pitchOffset: [375, 525],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [175, 550],
            },
            {
                position: EPlayerPosition.CB,
                pitchOffset: [275, 550],
            },
            {
                position: EPlayerPosition.LB,
                pitchOffset: [75, 525],
            },
            {
                position: EPlayerPosition.GK,
                pitchOffset: [225, 645],
            },
        ],
    },
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
    //     playerPositions: [],
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