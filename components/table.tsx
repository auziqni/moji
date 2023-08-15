"use client";
// import React from "react";
// // import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import type { Jamaah } from "@prisma/client";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { DialogEdit } from "./dialogEdit";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 35,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "name",
    headerName: "Nama",
    width: 150,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "ismale",
    headerName: "Gender",
    flex: 0.7,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
    renderCell: (params: any) => (
      <h2>{params.row.ismale ? "pria" : "wanita"}</h2>
    ),
  },
  {
    field: "age",
    headerName: "Umur",
    flex: 0.5,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "province",
    headerName: "Provinsi",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "group",
    headerName: "Rombongan",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "namaPengurus",
    headerName: "Pengurus",
    flex: 0.9,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "lat",
    headerName: "Lat",
    flex: 0.7,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "lng",
    headerName: "Lng",
    flex: 0.7,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "temp",
    headerName: "Temperature",
    flex: 0.6,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "humid",
    headerName: "Humidity",
    flex: 0.6,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Edit",
    headerName: "Edit",
    width: 40,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
    renderCell: (params: any) => <DialogEdit props={params} />,
  },
];

export default function Table({ props }: { props: Jamaah[] }) {
  return (
    <Box
      sx={{
        height: "70vh",
        width: "100%",
      }}
    >
      <DataGrid
        rows={props}
        // rows={jamaahs}
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
        getRowId={(row) => row.id}
      />
    </Box>
  );
}
