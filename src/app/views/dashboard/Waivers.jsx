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
        <Breadcrumb routeSegments={[{ name: "Waivers" }]} />
      </div>
      <SimpleCard title="Waivers">
        <div className="w-full overflow-auto">
          <Table className="whitespace-pre break-all">
            <TableHead>
              <TableRow>
                <TableCell className="px-0">First Name</TableCell>
                <TableCell className="px-0">Last Name</TableCell>
                <TableCell className="px-0">Date of Birth</TableCell>
                <TableCell className="px-0">Email</TableCell>
                <TableCell className="px-0">Mobile Number</TableCell>
                <TableCell className="px-0">Waiver</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                  <TableRow key={index}>
                    <TableCell className="px-0 capitalize" align="left">
                      {user.firstName}
                    </TableCell>
                    <TableCell className="px-0 capitalize" align="left">
                      {user.lastName}
                    </TableCell>
                    <TableCell className="px-0 capitalize" align="left">
                      {format(new Date(user.birthDate), "dd MMM, yyyy")}
                    </TableCell>
                    <TableCell className="px-0 capitalize">
                      {user.emailAddress}
                    </TableCell>
                    <TableCell className="px-0 capitalize">
                      {user.mobileNumber}
                    </TableCell>
                    <TableCell className="px-0">
                      <a
                        target="_blank"
                        href={`https://google.com/${user.publicCustomerId}`}
                      >
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                        >
                          Waiver
                        </Button>
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

          <TablePagination
            className="px-4"
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            component="div"
            count={customerList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
      </SimpleCard>
    </div>
  );
};

export default Waivers;
