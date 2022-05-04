import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { usePagination } from "@mui/material/Pagination";
import "./pagination.css";
export default function PaginationOutlined() {
    const handleChange=()=>{
        
    }
  return (
    <Stack spacing={2}>
      <Pagination
        style={{ display: "flex" }}
        className="pagination"
        count={3}
        variant="outlined"
        color="secondary"
        onChange={handleChange}
      />
    </Stack>
  );
}
