import {
  grey900, blueGrey900, grey800,
  indigo500, indigo400, pink500,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey900,
    primary2Color: blueGrey900,
    primary3Color: grey800,
    accent1Color: indigo500,
    accent2Color: pink500,
    accent3Color: indigo400,
  }
});

export default muiTheme;