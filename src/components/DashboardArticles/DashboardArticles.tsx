/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

import { getApiClient } from "../../utils/api";

import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

/**
 * Imports the component styles
 */
import { useStyles } from "./DashboardArticles.styles";

/**
 * Defines the props interface
 */
export interface DashboardArticlesProps {
  text?: string;
}

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

function createData(
  count: number,
  title: string,
  author: string,
  comments: number,
  likes: number,
  shares: number
) {
  return { count, title, author, comments, likes, shares };
}

const rows = [
  createData(0, "Jesus is with us", "Moses", 45, 9000, 5000),
  createData(1, "How Jesus died", "Judas Priest", 654, 684, 844),
  createData(2, "Why do we owe our lives to Jesus", "the Pope", 11, 849, 6321),
  createData(
    3,
    "Jesus is and always be the way",
    "randomFanatic",
    66,
    684,
    321
  ),
  createData(4, "Jesus was actually a twat", "Cyps", 77, 6584, 6544),
];

/**
 * Displays the component
 */
const DashboardArticles: React.FC<DashboardArticlesProps> = (props) => {
  const { text } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  const { apiClient } = getApiClient({ mock: true });

  const fetchArticles = async () => {
    const { data } = await apiClient.get("/v1/articles");
    console.log(data.articles);
  };

  React.useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className={classes.root}>
      <Typography gutterBottom={true} className={classes.articlesTitle}>
        Articles
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell align="left">Title</StyledTableCell>
              <StyledTableCell align="left">Author</StyledTableCell>
              <StyledTableCell align="left"># Comments</StyledTableCell>
              <StyledTableCell align="left">Likes</StyledTableCell>
              <StyledTableCell align="left"># Shares</StyledTableCell>
              <StyledTableCell align="left">Operations</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.count}>
                <StyledTableCell component="th" scope="row">
                  {row.count}
                </StyledTableCell>
                <StyledTableCell align="left">{row.title}</StyledTableCell>
                <StyledTableCell align="left">{row.author}</StyledTableCell>
                <StyledTableCell align="left">{row.comments}</StyledTableCell>
                <StyledTableCell align="left">{row.likes}</StyledTableCell>
                <StyledTableCell align="left">{row.shares}</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DashboardArticles;
