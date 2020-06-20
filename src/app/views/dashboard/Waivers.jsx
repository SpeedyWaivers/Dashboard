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
                <TableCell className="px-0" align="center">
                  Mobile Number
                </TableCell>
                <TableCell className="px-0" align="center">
                  Created Date
                </TableCell>
                <TableCell className="px-0" align="center">
                  Waiver
                </TableCell>
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
                    <TableCell className="px-0" align="left">
                      {format(new Date(user.birthDate), "MMMM dd yyyy")}
                    </TableCell>
                    <TableCell className="px-0">{user.emailAddress}</TableCell>
                    <TableCell className="px-0" align="center">
                      {user.mobileNumber}
                    </TableCell>
                    <TableCell className="px-0" align="center">
                      {format(new Date(user.createdDate), "MMMM dd yyyy h:mm aa")}
                    </TableCell>
                    <TableCell className="px-0" align="center">
                      <a
                        target="_blank"
                        href={`https://speedywaivers.com/waivers/${user.publicCustomerId}.pdf`}
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
