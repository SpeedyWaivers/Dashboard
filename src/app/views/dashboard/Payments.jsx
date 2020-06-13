import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TablePagination,
  Button,
} from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerList } from "app/redux/actions/WaiverActions";
import { format } from "date-fns";

const Waivers = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const { customerList } = useSelector((state) => state.waiver);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomerList());
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "Payments" }]} />
      </div>
      <SimpleCard title="Payments">
      </SimpleCard>
    </div>
  );
};

export default Waivers;
