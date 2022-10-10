import {
  Typography,
  Grid,
  InputBase,
  Container,
  TextField,
  InputAdornment,
} from "@mui/material";
import Image from "mui-image";
import { NumericFormat } from "react-number-format";

import * as React from "react";

const InvoicePreview = ({
  invoiceFrom,
  billTo,
  shipTo,
  paymentTerms,
  poNumber,
  invoiceNumber,
  terms,
  notes,
  subtotal,
  tax,
  total,
  amountPaid,
  balanceDue,
  date,
  dueDate,
  inputFields,
  logo,
}) => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={7} mb={3} ml={3} justify="flex-end" mt={5}>
            <Image width="200px" height="200px" src={logo} />
            <Typography mt={1}>Invoice From:{invoiceFrom}</Typography>
            <Typography sx={{ width: 160, mt: 2 }}>
              Bill To: {billTo}
            </Typography>

            <Typography sx={{ width: 160, mt: 2 }}>
              Ship To: {shipTo}
            </Typography>
          </Grid>
          <Grid item justify="flex-end" sx={{ mb: "auto" }} xs={3}>
            <Typography variant="h3" sx={{ ml: 6, mt: 5 }}>
              {" "}
              INVOICE
            </Typography>

            <Typography sx={{ mt: 7, ml: 6 }}>
              Invoice # {invoiceNumber}
            </Typography>

            <Typography sx={{ mt: 1, ml: 10, width: 235 }}>
              Date: {date}
            </Typography>
            <Typography sx={{ mt: 1, ml: 6, width: 235 }}>
              Due Date: {dueDate}
            </Typography>

            <Typography sx={{ mt: 1, ml: 1 }}>
              PaymentTerms: {paymentTerms}
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs pl={3} justify="flex-start"></Grid>
          <Grid item mt={1} justify="flex-end">
            <Typography sx={{ mt: 1 }}>{poNumber}</Typography>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item>{/*Placeholder Table */}</Grid>
        </Grid>
        <Grid container mt={1}>
          <Grid item pl={2}>
            <TextField
              size="small"
              defaultValue="Item"
              variant="outlined"
              sx={{ width: 400 }}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              sx={{ width: 100 }}
              size="small"
              defaultValue="Quantity"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              sx={{ width: 100 }}
              InputProps={{
                readOnly: true,
              }}
              size="small"
              defaultValue="Rate"
            />
            <TextField
              sx={{ width: 100 }}
              InputProps={{
                readOnly: true,
              }}
              size="small"
              defaultValue="Amount"
            />
          </Grid>
          <Grid item pl={2}>
            {inputFields.map((inputField) => (
              <div key={inputField.id}>
                <TextField
                  placeholder="Description of Service of product"
                  size="small"
                  type="text"
                  name="item"
                  value={inputField.item}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ width: 400 }}
                />

                <TextField
                  size="small"
                  type="text"
                  name="quantity"
                  sx={{ width: 100 }}
                  value={inputField.quantity}
                  InputProps={{
                    readOnly: true,
                  }}
                />

                <NumericFormat
                  prefix={"$"}
                  customInput={TextField}
                  thousandSeparator
                  size="small"
                  type="text"
                  name="rate"
                  sx={{ width: 100 }}
                  value={inputField.rate}
                  InputProps={{
                    readOnly: true,
                  }}
                />

                <NumericFormat
                  prefix={"$"}
                  customInput={TextField}
                  thousandSeparator
                  size="small"
                  type="text"
                  name="amount"
                  sx={{ width: 100 }}
                  value={inputField.quantity * inputField.rate}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            ))}
          </Grid>
        </Grid>
        <Grid pl={3}></Grid>
        <Grid container mt={5}>
          <Grid item xs={7} mt={2.5} ml={3} mb={10}>
            <Typography justify="flex-start" sx={{ width: 540, mt: 1 }}>
              Notes: {notes}
            </Typography>

            <Typography justify="flex-start" sx={{ width: 540, mt: 10 }}>
              Terms: {terms}
            </Typography>
          </Grid>
          <Grid item xs={4} justify="flex-end" mt={1}>
            <Typography size="small" sx={{ mt: 1, ml: 4.7 }}>
              Subtotal:{" "}<NumericFormat
                      prefix={"$"}
                      size="small"
                      customInput={InputBase}
                      thousandSeparator
                      sx={{ width:100 }}
                      value={subtotal}
                    />
            </Typography>

            <Typography size="small" sx={{ mt: 1, ml: 9 }}>
              Tax: {tax} %
            </Typography>
            <Typography size="small" sx={{ mt: 1, ml: 8 }}>
              Total:{" "}<NumericFormat
                      prefix={"$"}
                      size="small"
                      customInput={InputBase}
                      thousandSeparator
                      sx={{ width:100 }}
                      value={(total = (subtotal * tax) / 100 + subtotal)}
                    /> 
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Grid mt={10}></Grid>
    </div>
  );
};

export default InvoicePreview;
