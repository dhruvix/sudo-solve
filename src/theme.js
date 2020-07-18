import { createMuiTheme } from '@material-ui/core/styles';
import { yellow, green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: green,
    type: 'dark',
  },
  status: {
    danger: 'orange',
  },
});

export default theme;