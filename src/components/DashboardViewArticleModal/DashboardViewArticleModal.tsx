/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Components Imports
 */
import Modal from "../Modal";
import ModalTitle from "../ModalTitle";
import ModalContent from "../ModalContent";

/**
 * Imports the component styles
 */
import { useStyles } from "./DashboardViewArticleModal.styles";

/**
 * Defines the props interface
 */
export interface DashboardViewArticleModalProps {
  onClose: () => void;
  open: boolean;
  articleTitle: string;
  articleAuthor: string;
  articleContent: string;
  articleComments: string;
  articleLikes: string;
  articleShares: string;
}

/**
 * Displays the component
 */
const DashboardViewArticleModal: React.FC<DashboardViewArticleModalProps> = (
  props
) => {
  const {
    onClose,
    open,
    articleTitle,
    articleContent,
    articleAuthor,
    articleComments,
    articleLikes,
    articleShares,
  } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Modal open={open} onClose={onClose} scroll="paper">
      <ModalTitle onClick={onClose} />
      <ModalContent>
        <h1>{articleTitle}</h1>
        <h2>by {articleAuthor}</h2>
        <h2>article shares: {articleShares}</h2>
        <h2>article likes: {articleLikes}</h2>
        <h2>article comments: {articleComments}</h2>
        <p>{articleContent}</p>
      </ModalContent>
    </Modal>
  );
};

export default DashboardViewArticleModal;
