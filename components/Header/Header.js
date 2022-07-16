import { 
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const navLinks = [
  { label: 'Home', value: 'home' },
  { label: 'FAQs', value: 'faqs' },
];

const menuLabel = 'Menu';
 
export const Header = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(state => !state);
  };

  const [container, setContainer] = useState(null);
  useEffect(() => {
    setContainer(window !== undefined ? () => document.body : undefined);
  }, [ ]);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar 
        component={'nav'}
        position={'static'}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'
            component={'div'}
            sx={{ flex: 1, display: { xs: 'none', sm: 'block' } }}
          >
            { menuLabel }
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            { navLinks.map(({ label, value }) => (
              <Link key={`d-link-${value}`} href={`/${value}`} >
                <Button sx={{ color: 'white' }} >
                  { label }
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component={'nav'}>
        <Drawer
          container={container}
          variant='temporary'
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          <SideMenu 
            onToggle={handleDrawerToggle}
          />
        </Drawer>
      </Box>
    </Box>
  )
};

const SideMenu = ({ onToggle }) => {
  const handleToggle = () => {
    if (!onToggle) {
      return;
    }
    onToggle();
  }

  return (
    <Box
      sx={{ textAlign: 'center' }}
      onClick={handleToggle}
    >
      <Typography variant='h6' sx={{ my: 2 }} >
        { menuLabel }
      </Typography>
      <Divider />
      <List>
        { navLinks.map(({ label, value }) => (
          <Link key={`m-link-${value}`} href={`/${value}`} >
            <ListItem button>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )
}