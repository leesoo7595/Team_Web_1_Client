import React, {useState} from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import alarm from '../images/alarm.png'
import person from '../images/person.png'
import history from '../images/history.png'
import Drawer from '@material-ui/core/Drawer'

const drawerWidth = '50%'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  drawer: {
    width: '52px',
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    height: '100vh',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: 30,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
  },
  appBar: {
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export default function CategoryAppBar(props) {

  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const onClickHistoryDrawer = () => {
    setOpen(!open)
  }

  return (
    <Drawer className={clsx(classes.drawer, {
      [classes.drawerOpen]: open,
      [classes.drawerClose]: !open,
    })}
      variant="permanent"
      anchor="right"
      open={open}
      onClose={onClickHistoryDrawer}
    >
      <div className="drawer-btn-group">
        <button onClick={onClickHistoryDrawer}>
          <img src={history} alt="history button" />
        </button>
        <button>
          <img src={alarm} alt="alarm button" />
        </button>
        <button>
          <img src={person} alt="person button" />
        </button>
      </div>
    </Drawer>
  )
}