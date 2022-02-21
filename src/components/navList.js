import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import Person from '@mui/icons-material/Person';
import Forum from '@mui/icons-material/Forum';
import Analytics from '@mui/icons-material/Analytics';
import FolderOpen from '@mui/icons-material/FolderOpen';
import BorderColor from '@mui/icons-material/BorderColor';
import Search from '@mui/icons-material/Search';

const navbarList = [
  {
    icon: Search,
    desc: 'Search',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: DashboardOutlined,
    desc: 'Home',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  /* {
    icon: Analytics,
    desc: 'Cities',
    secondDesc: '',
    badge: 0,
    subList: [],
  } */
  /* {
    icon: Person,
    desc: 'Log In',
    secondDesc: '',
    badge: 0,
    subList: [],
  }, */
 /*  {
    icon: Forum,
    desc: 'Forum',
    secondDesc: 'Message from andi',
    badge: 2,
    subList: [
      {
        desc: 'chat',
        badge: 2,
      },
      {
        desc: 'reminder',
        badge: 0,
      },
    ],
  }, */
  
/*   {
    icon: FolderOpen,
    desc: 'Folder',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: BorderColor,
    desc: 'Edit',
    secondDesc: '',
    badge: 0,
    subList: [],
  }, */
];

export default navbarList;

 {/*link cities */}
 /* {navbarCities.map((key) => (
  <>
  <Tooltip
        title={open ? key.desc : ''}
        placement={'right'}
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: 'gray',
              color: 'white',
              marginLeft: '22px !important',
              boxShadow: '0px 0px 22px -2px rgba(0,0,0,0.20)',
            },
          },
        }}
      >
  <LinkRouter to={"/cities"}>
   <ListItemButton
          sx={{
            margin: '6px 14px',
            padding: '10px',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#26284687',
             
            },
          }}
          
        > 
        
          <ListItemIcon sx={{ minWidth: '46px' }}>
            <Badge
              badgeContent={key.badge}
              color="secondary"
              variant="dot"
            >
              <key.icon sx={{ fontSize: '20px', color: 'lightgray' }} />
            </Badge>
          </ListItemIcon>

          <ListItemText
            primary={key.desc}
            primaryTypographyProps={{
              variant: 'body2',
            }}
            sx={{
              display: 'inline',
              margin: '0px',
              overflowX: 'hidden',
              color: 'lightgray',
              whiteSpace: 'nowrap',
              minWidth: '126px',
            }}
          />
         
          
        </ListItemButton> 
        </LinkRouter>
        </Tooltip>
         </>
         ))} */