// component
import SvgColor from '../../../components/svg-color';
import DeleteIcon from '@mui/icons-material/Delete';
// ----------------------------------------------------------------------


const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
  },
  {
    title: 'user',
    path: '/dashboard/user',
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: <DeleteIcon />,
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
  },
  {
    title: 'login',
    path: '/login',
  },
  {
    title: 'Not found',
    path: '/404',
  },
];

export default navConfig;
