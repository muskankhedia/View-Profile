import React, { FC, useState } from 'react';
import { CardContent, Card } from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { HashRouter as Router, Link } from 'react-router-dom';

interface Row {
  name: string;
  surname: string;
  birthYear: number;
  birthCity: number;
}

const Pad: FC<{}> = () => (
  <>&nbsp;&nbsp;&nbsp;&nbsp;</>
);

const Profiles: FC<{}> = () => {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name', width: '220', align: 'left' },
      { title: 'Surname', field: 'surname', width: '220', align: 'left' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric', width: '170', align: 'center' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },width: '170', align: 'center'
      },
    ]
  });
  const [data, setData] = useState([
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    {
      name: 'Zerya Betül',
      surname: 'Baran',
      birthYear: 2017,
      birthCity: 34,
    },
  ]);
  const [tmp, setTmp] = useState([
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    {
      name: 'Zerya Betül',
      surname: 'Baran',
      birthYear: 2017,
      birthCity: 34,
    },
  ]);

  const filterRows = (text: string) => {
    if (text.length === 0) {
      setData(tmp);
      return;
    }
    const rows: any = [];
    for (const r of data) {
      if (r.name.includes(text)) {
        rows.push(r);
      }
    }
    setData(rows);
  };
  return (
    <Card>
      <CardContent>
        <h3>Profiles</h3>
        <hr />
        <div style={{ margin: '1%', flexDirection: 'column' }}>
          <TextField id="standard-basic" label="Filter name" fullWidth={true} onChange={(e) => filterRows(e.target.value)} />
        </div>
        <TableContainer style={{ maxHeight: '100vh', overflowY: 'hidden' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {state.columns.map((column: any, i: number) => (
                  <TableCell
                    key={i}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: 600,
                      fontSize: 15
                    }}
                  >
                    {column.title}
                  </TableCell>
                ))}
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d, i) => (
                <TableRow className="table-data-row" key={i}>
                <TableCell style={{ minWidth: 220, fontSize: 16 }} align="left">
                  {d.name}
                </TableCell>
                <TableCell
                  style={{ minWidth: 220, fontSize: 16 }}
                  align="left"
                >
                  {d.surname}
                </TableCell>
                <TableCell style={{ minWidth: 170 }} align="center">
                  {d.birthYear}
                </TableCell>
                <TableCell style={{ minWidth: 170 }} align="center">
                  {d.birthCity}
                </TableCell>
                <TableCell style={{ minWidth: 170 }} align="center">
                  <Button variant="contained" color="primary">View</Button>
                  <Pad />
                  <Button variant="contained" color="secondary" component={Link} to="/createprofile">Edit</Button>
                </TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Profiles;