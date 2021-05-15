/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

import { getApiClient } from "../../utils/api";
import { useState, useEffect } from "react";

/**
 * Component Imports
 */
import DashboardViewArticleModal from "../DashboardViewArticleModal";
import DynamicTable from "../DynamicTable";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";

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
   * Init the loading state
   */
  const [loading, setLoading] = useState(true);

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

    setArticles(articles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleClick = () => {
    console.log("articles:", articles);
  };

  useEffect(() => {
    if (articles.length > 0) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [articles]);

  return (
    <div className={classes.root}>
      <Typography gutterBottom={true} className={classes.articlesTitle}>
        Articles
      </Typography>
      <DynamicTable
        loading={loading}
        config={{
          columns: [
            {
              label: t("title"),
              rowKey: "title",
              sort: true,
              searchField: true,
            },
            {
              label: t("author"),
              rowKey: "author",
              sort: true,
              searchField: true,
            },
            {
              label: t("comments"),
              rowKey: "comments",
              sort: true,
            },
            {
              label: t("likes"),
              rowKey: "likes",
              sort: true,
            },
            {
              label: t("shares"),
              rowKey: "shares",
              sort: true,
            },
            {
              label: t("operations"),
              rowKey: "operations",
            },
          ],
          rows: articles.map((article) => {
            const handleView = () => openViewArticleModal(article);

            return {
              ...article,
              operations: (
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
              ),
            };
          }),
          loadingComponent: (
            <div className={classes.loader}>
              <CircularProgress size={25} color="secondary" /> Please wait while
              we're fetching your data
            </div>
          ),
          notFoundComponent: (
            <div className={classes.notFound}>
              We apologize but the collection is empty.😢
            </div>
          ),
          materialProps: {
            // tableContainerProps: {
            //   className: classes.tableContainer,
            // },
            // tableProps: {
            //   stickyHeader: true,
            // },
            paperProps: {
              className: classes.paper,
            },
            toolbarProps: {
              className: classes.toolbar,
            },
            tableHeadProps: {
              className: classes.tableHead,
            },
            tableBodyProps: {
              className: classes.tableBody,
            },
          },
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
      <DashboardViewArticleModal
        {...modalData}
        onClose={closeModal}
        open={modals.viewArticleModal}
      />
    </div>
  );
};

export default DashboardArticles;
