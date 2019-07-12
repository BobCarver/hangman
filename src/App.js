import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import projects from './projects'
const projectArray = Array.from(projects.keys())

const App = () => {
  const [open, setOpen] = React.useState(false)
  const [selectedProject, setProject] = React.useState(projectArray[0])
  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)
  const handleSelection = e => {
    setProject(e.target.innerText)
    closeDrawer()
  }
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton onClick={openDrawer} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='title' color='inherit'>
            React Hooks Material-UI Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={closeDrawer} width={200}>
        <List>
          {projectArray.map(project => (
            <ListItem button key={project} onClick={handleSelection}>
              <ListItemText primary={project} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {projects.get(selectedProject)}
    </>
  )
}
export default App
