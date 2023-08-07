"use client";
// import React from "react";
// // import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import type { AllJamaah } from "@prisma/client";
import { Pencil } from "lucide-react";
import Link from "next/link";
const columns = [
  {
    field: "Id",
    headerName: "ID",
    width: 35,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Nama",
    headerName: "Nama",
    width: 150,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Ismale",
    headerName: "Gender",
    flex: 0.7,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
    renderCell: (params: any) => (
      <h2>{params.row.gendermale ? "pria" : "wanita"}</h2>
    ),
  },
  {
    field: "Age",
    headerName: "Umur",
    flex: 0.5,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
    renderCell: (params: any) => (
      <Link href={`/detail/${params.row.Child}`}>{params.row.Age}</Link>
    ),
  },
  {
    field: "Province",
    headerName: "Provinsi",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Group",
    headerName: "Rombongan",
    flex: 1,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Lat",
    headerName: "Lat",
    flex: 0.7,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Lng",
    headerName: "Lng",
    flex: 0.7,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Temp",
    headerName: "Temperature",
    flex: 0.6,
    cellClassName: "name-column--cell",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Humid",
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
    renderCell: (params: any) => <Pencil className=""></Pencil>,
  },
];

export default function Table({ props }: { props: AllJamaah[] }) {
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
        getRowId={(row) => row.Id}
      />
    </Box>
  );
}
