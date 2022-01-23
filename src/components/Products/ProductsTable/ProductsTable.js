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
import { getComparator, sortedRowInformation } from "../../../helperFuntions";
import { asyncDeleteProduct } from "../../../redux/actions/productActions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "250px",
    },
  },
  table: {
    maxWidth: "85%",
    marginLeft: "5%",
  },
}));

const ProductsTable = ({
  filteredProducts,
  openModal,
  setPreviousData,
  setText,
}) => {
  const classes = useStyles();
  const rowInformation = filteredProducts;
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();
  const handleDelete = (productId) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      dispatch(asyncDeleteProduct(productId));
    }
  };

  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const createSortHandler = (property) => (event) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
    setPage(0);
  };
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value), 10);
    setPage(0);
  };

  const handleEdit = (productData) => {
    openModal();
    setText("EDIT");
    setPreviousData({ ...productData, price: productData.price.toString() });
  };

  return (
    <div style={{ paddingLeft: "10px" }}>
      {products.length === 0 ? (
        <div>
          <br />
          <span>No products here...Add now!</span>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div>
          <br />
          <span>No products matched your search!</span>
        </div>
      ) : (
        <div>
          <TableContainer component={Paper} className={classes.table}>
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
                  <TableCell key="price">
                    <TableSortLabel
                      active={valueToOrderBy === "price"}
                      direction={
                        valueToOrderBy === "price" ? orderDirection : "asc"
                      }
                      onClick={createSortHandler("price")}
                    >
                      price
                    </TableSortLabel>
                  </TableCell>
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
                  .map((product, i) => (
                    <TableRow key={product._id}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>
                        {new Date(product.createdAt).toLocaleString("en")}
                      </TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          fontSize="small"
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            handleEdit(product);
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
                            handleDelete(product._id);
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

export default ProductsTable;
