import React, { useState } from "react";
import {
  Button,
  Paper,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Table,
  TableBody,
  TablePagination,
  TableContainer,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
//import { asyncDeleteCustomer } from "../redux/actions/customersAction";
import { getComparator, sortedRowInformation } from "../../../helperFuntions";
import AddEditCustomerModal from "../AddEditCustomerModal/AddEditCustomerModal";
let previousData = {};
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "250px",
    },
  },
  table: {
    maxWidth: "90%",
  },
  button: {
    maxWidth: "30px",
  },
}));

const CustomersTable = ({
  filteredCustomers,
  closeModal,
  openModal,
  setPreviousData,
  setText,
}) => {
  const classes = useStyles();
  const rowInformation = filteredCustomers;

  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  //const [editCustomer, setEditCustomer] = useState({});
  let id = 1;
  const token = useSelector((state) => state.user.token);
  const customers = useSelector((state) => state.customers.allCustomers);
  const dispatch = useDispatch();
  const deleteCustomer = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      //  dispatch(asyncDeleteCustomer(id, token));
      alert("delete");
    }
  };

  const createSortHandler = (property) => (event) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value), 10);
    setPage(0);
  };

  const handleEdit = (customerData) => {
    openModal();
    //setEditCustomer({ ...customerData });
    setPreviousData(customerData);
    setText("EDIT");
  };

  return (
    <div style={{ paddingLeft: "10px" }}>
      {customers.length === 0 ? (
        <div>
          <br />
          <span>No customers here...Add now!</span>
        </div>
      ) : filteredCustomers.length === 0 ? (
        <div>
          <br />
          <span>No customers found</span>
        </div>
      ) : (
        <div>
          <TableContainer className={classes.table} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell key="id">ID</TableCell>

                  <TableCell key="name">
                    <TableSortLabel
                      active={valueToOrderBy === "name"}
                      direction={
                        valueToOrderBy === "name" ? orderDirection : "asc"
                      }
                      onClick={createSortHandler("name")}
                    >
                      Name
                    </TableSortLabel>
                  </TableCell>
                  <TableCell key="email">
                    <TableSortLabel
                      active={valueToOrderBy === "email"}
                      direction={
                        valueToOrderBy === "email" ? orderDirection : "asc"
                      }
                      onClick={createSortHandler("email")}
                    >
                      Email
                    </TableSortLabel>
                  </TableCell>
                  <TableCell key="mobile">
                    <TableSortLabel
                      active={valueToOrderBy === "mobile"}
                      direction={
                        valueToOrderBy === "mobile" ? orderDirection : "asc"
                      }
                      onClick={createSortHandler("mobile")}
                    >
                      Phone No.
                    </TableSortLabel>
                  </TableCell>
                  {/* <TableCell key="createdAt">Created At</TableCell> */}
                  <TableCell key="createdAt">
                    <TableSortLabel
                      active={valueToOrderBy === "createdAt"}
                      direction={
                        valueToOrderBy === "createdAt" ? orderDirection : "asc"
                      }
                      onClick={createSortHandler("createdAt")}
                    >
                      Created At
                    </TableSortLabel>
                  </TableCell>
                  <TableCell key="action">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedRowInformation(
                  rowInformation,
                  getComparator(orderDirection, valueToOrderBy)
                )
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((cust, i) => (
                    <TableRow key={cust._id} className={classes.button}>
                      <TableCell>{id++}</TableCell>
                      <TableCell>{cust.name}</TableCell>
                      <TableCell>{cust.email}</TableCell>
                      <TableCell>{cust.mobile}</TableCell>
                      <TableCell>
                        {new Date(cust.createdAt).toLocaleString("en")}
                      </TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          fontSize="small"
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            handleEdit(cust);
                          }}
                        >
                          edit
                        </Button>
                        <Button
                          size="small"
                          fontSize="small"
                          variant="contained"
                          color="secondary"
                          onClick={() => {
                            deleteCustomer(cust._id);
                          }}
                        >
                          delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={rowInformation.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      )}
    </div>
  );
};

export default CustomersTable;
