/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

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
   * Handles the translations
   */
  const { t } = useTranslation();

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
    title: "",
    content: "",
    author: "",
    comments: "",
    likes: "",
    shares: "",
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
      title: "",
      content: "",
      author: "",
      comments: "",
      likes: "",
      shares: "",
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
          columns: [
            {
              label: t("title"),
              rowKey: "title",
              sort: true,
            },
            {
              label: t("author"),
              rowKey: "author",
              sort: true,
            },
            {
              label: t("comments"),
              rowKey: "comments",
            },
            {
              label: t("likes"),
              rowKey: "likes",
            },
            {
              label: t("shares"),
              rowKey: "shares",
            },
          ],
          rows: articles,
          plugins: ["withSort", "withCount"],
          orderBy: "age",
          order: "desc",
        }}
        classes={{
          table: classes.table,
          tableCell: {
            head: classes.head,
            body: classes.body,
          },
          tableRow: {
            root: classes.tableRow,
          },
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
