import { IDisplayedColums } from "../models/table-config.model";

export const DISPLAYEDCOLUMNSTASK : IDisplayedColums[] =
[
    {
      header: "Id",
      property: "id",
      type: "string"
    },
    {
      header: "Titulo",
      property: "title",
      type: "string"
    },
    {
      header: "Completado",
      property: "status", 
      type: "button"
    }
];1