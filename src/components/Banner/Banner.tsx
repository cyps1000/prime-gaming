/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Material UI Imports
 */
import Grid from "@material-ui/core/Grid";

/**
 * Assets Imports
 */
import BannerImage from "./banner.png";

/**
 * Imports the component styles
 */
import { useStyles } from "./Banner.styles";

/**
 * Defines the props interface
 */
export interface BannerProps {
  text?: string;
}

/**
 * Displays the component
 */
const Banner: React.FC<BannerProps> = (props) => {
  const { text } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles({ banner: BannerImage });

  return (
    <div className={classes.root}>
      {/* <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12}>
          <img className={classes.img} src={BannerImage} alt="banner" />
        </Grid>
      </Grid> */}
    </div>
  );
};

export default Banner;
