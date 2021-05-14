import { getApiClient } from "../../utils/api";

import { useState, useEffect } from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";

/**
 * Component Imports
 */
import DashboardViewArticleModal from "../DashboardViewArticleModal";
import DynamicTable from "../DynamicTable";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

/**
 * Imports the component styles
 */
import { useStyles } from "./DashboardArticles.styles";

/**
 * Defines the Modals' State interface
 */
interface ModalState {
  viewArticleModal: boolean;
  editArticleModal: boolean;
  deleteArticleModal: boolean;
}

/**
 * Defines the props interface
 */
export interface DashboardArticlesProps {
  text?: string;
}

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#343434",
      color: theme.palette.secondary.main,
    },
    body: {
      fontSize: 14,
      color: theme.palette.secondary.main,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "#121212c7",
      },
      backgroundColor: "#121212eb",
    },
  })
)(TableRow);

/**
 * Articles interface
 */
interface Article {
  id: string;
  title: string;
  author: string;
  content: string;
  comments: string;
  likes: string;
  shares: string;
}

/**
 * Displays the component
 */
const DashboardArticles: React.FC<DashboardArticlesProps> = (props) => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Initializes the Modal state
   */
  const [modals, setModals] = useState({
    viewArticleModal: false,
    editArticleModal: false,
    deleteArticleModal: false,
  } as ModalState);

  /**
   *
   */
  const [modalData, setModalData] = useState({
    articleTitle: "",
    articleContent: "",
    articleAuthor: "",
    articleComments: "",
    articleLikes: "",
    articleShares: "",
  });

  /**
   * Handles opening the modal
   */
  const openModal = (modalType: string) => {
    setModals((prevState) => {
      return { ...prevState, [modalType]: true };
    });
  };

  /**
   * Handles opening the view Article Modal
   */
  const openViewArticleModal = (props: any) => {
    setModalData({ ...props });
    openModal("viewArticleModal");
  };

  /**
   * Handles opening the edit Article Modal
   */
  const openEditArticleModal = () => openModal("editArticleModal");

  /**
   * Handles opening the delete Article Modal
   */
  const openDeleteArticleModal = () => openModal("deleteArticleModal");

  /**
   * Handles closing the View/Edit/Delete Modal
   */
  const closeModal = () => {
    setModalData({
      articleTitle: "",
      articleContent: "",
      articleAuthor: "",
      articleComments: "",
      articleLikes: "",
      articleShares: "",
    });
    setModals({
      viewArticleModal: false,
      editArticleModal: false,
      deleteArticleModal: false,
    });
  };

  const { apiClient } = getApiClient({ mock: true });

  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    const { data } = await apiClient.get("/v1/articles");
    const { articles }: { articles: Article[] } = data;
    console.log(data.articles);
    setArticles(articles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className={classes.root}>
      <Typography gutterBottom={true} className={classes.articlesTitle}>
        Articles
      </Typography>
      <DynamicTable
        config={{
          fields: [
            {
              label: "Name",
              key: "name",
            },
            {
              label: "Age",
              key: "age",
            },
          ],
          collection: [
            {
              name: "Tom",
              age: 23,
            },
            {
              name: "jesus",
              age: 50,
            },
          ],
          orderBy: "age",
          order: "desc",
        }}
      />
      {/* <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell align="left">Title</StyledTableCell>
              <StyledTableCell align="left">Author</StyledTableCell>
              <StyledTableCell align="left"># Comments</StyledTableCell>
              <StyledTableCell align="left">Likes</StyledTableCell>
              <StyledTableCell align="left"># Shares</StyledTableCell>
              <StyledTableCell align="center">Operations</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {articles.map((row) => {
              const handleView = () =>
                openViewArticleModal({
                  articleTitle: row.title,
                  articleContent: row.content,
                  articleAuthor: row.author,
                  articleComments: row.comments,
                  articleLikes: row.likes,
                  articleShares: row.shares,
                });
              return (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.title}</StyledTableCell>
                  <StyledTableCell align="left">{row.author}</StyledTableCell>
                  <StyledTableCell align="left">{row.comments}</StyledTableCell>
                  <StyledTableCell align="left">{row.likes}</StyledTableCell>
                  <StyledTableCell align="left">{row.shares}</StyledTableCell>
                  <StyledTableCell align="left">
                    <div className={classes.operations}>
                      <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        onClick={handleView}
                      >
                        <VisibilityOutlinedIcon />
                      </IconButton>
                      <IconButton size="small" edge="start" color="inherit">
                        <EditOutlinedIcon />
                      </IconButton>
                      <IconButton size="small" edge="start" color="inherit">
                        <DeleteForeverOutlinedIcon />
                      </IconButton>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer> */}
      <DashboardViewArticleModal
        {...modalData}
        onClose={closeModal}
        open={modals.viewArticleModal}
      />
    </div>
  );
};

export default DashboardArticles;
