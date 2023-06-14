import { useContext } from "react";
import { DraftContext } from "~/draft-context/DraftContext";
import Papa from "papaparse";
import { z } from "zod";
import { EPlayerPosition } from "../PlayerPicker";

export const ZPlayer = z.object({
    picture: z.string(),
    Flag: z.string(),
    Name: z.string(),
    Age: z.preprocess(
        (age) => parseInt(z.string().parse(age)),
        z.number()
      ),
    Position: z.nativeEnum(EPlayerPosition),
    Overall: z.preprocess(
        (overall) => parseInt(z.string().parse(overall)),
        z.number()
      ),
    Team_Image: z.string(),
    Team: z.string(),
})

export type TPlayer = z.infer<typeof ZPlayer> & { id: number }
export type TDatabase = TPlayer[]

export const DatasetUploader: React.FC = () => {
    const { setDraftContext } = useContext(DraftContext);

    return (
        <input
            type="file"
            name="file"
            accept=".csv"
            onChange={(event) => {
                Papa.parse((event.target.files![0] as File), {
                  header: true,
                  skipEmptyLines: true,
                  complete: function (results) {
                    const parsedData = results.data.map((dataRow, i) => ({ ...ZPlayer.parse(dataRow), id: i }));
                    
                    setDraftContext((prevState) => ({ 
                      ...prevState, 
                      database: parsedData,
                      stage: {
                        name: "USER_COUNT_PICK",
                        user: 0,
                      }
                    }))
                  },
                });
            }}
            style={{ display: "block", margin: "10px auto" }}
        />
    );
}