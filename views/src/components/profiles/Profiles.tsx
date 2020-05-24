import React, { FC, useState, useEffect } from 'react';
import { CardContent, Card, Container } from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import { HOST } from '../../utils/utils';


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

  const [data, setData] = useState<any>([{
    firstName: 'Muskan',
    lastName: 'Khedia',
    company: 'a',
    status: 'a'
  }]);

  const [state,] = React.useState({
    columns: [
      { title: 'Name', field: 'firstName', width: '220', align: 'left' },
      { title: 'Surname', field: 'lastName', width: '220', align: 'left' },
      { title: 'Company', field: 'company', width: '220', align: 'left' },
      { title: 'Status', field:'status', width: '220', align: 'left'},
    ]
  });

  useEffect(() => {
    async function fetchData(url: string) {
      const r = await fetch(url);
      const inJSON = (await r.json()) as any;
      console.warn('fgfgfgfgfg', inJSON.rows)
      setData(inJSON.rows);
      console.log('data: ', data);
    }
    fetchData(`${HOST}/profiles`)
  }, [])

  const [tmp,] = useState([
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    {
      firstName: 'Muskan',
      lastName: 'Khedia',
      company: 'a',
      status: 'a'
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
        <Container>
        <h3>Profiles</h3>
        <hr />
        <div>
          <Link to="/createProfile" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">Create Profile</Button>
          </Link>
        </div>
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
              {data === undefined ? null : data.map((d: any, i: any) => (
                <TableRow className="table-data-row" key={i}>
                <TableCell style={{ minWidth: 220, fontSize: 16 }} align="left">
                  {d.firstName}
                </TableCell>
                <TableCell
                  style={{ minWidth: 220, fontSize: 16 }}
                  align="left"
                >
                  {d.lastName}
                </TableCell>
                <TableCell style={{ minWidth: 170 }} align="center">
                  {d.company}
                </TableCell>
                <TableCell style={{ minWidth: 170 }} align="center">
                  {d.status}
                </TableCell>
                <TableCell style={{ minWidth: 170 }} align="center">
                  <Link to={`/profile/${d.firstName}/${d.id}`}>
                  <Button variant="contained" color="primary">View</Button>
                  </Link>
                  <Pad />
                  <Button variant="contained" color="secondary">Edit</Button>
                </TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Container>
      </CardContent>
    </Card>
  );
};

export default Profiles;
