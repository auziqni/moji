"use client";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "next/link";
import axios from "axios";
import { parajamaah } from "@/lib/mock";

// type Jamaah = {
//   id: number;
//   name: string;
//   gendermale: boolean;
//   age: number;
//   negara: string;
//   rombongan: string;
//   lat: number;
//   lng: number;
//   temp: number;
//   humid: number;
// } | null;

const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.5,
    headerClassName: "super-app-theme--header",
  },
  { field: "name", headerName: "Nama" },
  {
    field: "gendermale",
    headerName: "Gender",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
    renderCell: (params: any) => (
      <h2>{params.row.gendermale ? "pria" : "wanita"}</h2>
    ),
  },
  {
    field: "age",
    headerName: "umur",
    flex: 0.5,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
    //   renderCell: (params) => (
    //     <Link href={`/detail/${params.row.Child}`}>{params.row.Child}</Link>
    //   ),
  },
  {
    field: "negara",
    headerName: "Negara",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "rombongan",
    headerName: "Rombongan",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "lat",
    headerName: "Lat",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "lng",
    headerName: "Lng",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "temp",
    headerName: "Temperature",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "humid",
    headerName: "Humidity",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
];

function Table() {
  return (
    <Box
      sx={{
        height: "70vh",
        width: "100%",
      }}
    >
      <DataGrid
        //   checkboxSelection
        rows={parajamaah}
        columns={columns}
        // columns={[{headerAlign="center"}]}
        // components={{ Toolbar: GridToolbar }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        sx={{
          boxShadow: 2,
          border: 1,
          borderColor: "green",
          "& .MuiDataGrid-cell:hover": {
            color: "green",
          },
        }}

        // getRowId={(row) => row.}
      />
    </Box>
  );
}

export default Table;
