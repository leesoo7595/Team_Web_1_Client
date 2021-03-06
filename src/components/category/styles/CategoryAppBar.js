import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    height: '100vh',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
  },
  imgButton: {
    width: '10px !important',
    height: '40px !important',
  },
  '@global': {
    '.drawer-btn-group button:hover': {
      backgroundColor: '#d6e4f5 !important',
    }
  }
}))

export default useStyles