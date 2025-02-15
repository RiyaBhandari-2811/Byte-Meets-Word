import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

export interface ISocialMedia {
  name: string;
  Icon: React.ElementType;
  color: string;
  link: string;
  size:
    | string
    | {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
}

export const SOCIALS: ISocialMedia[] = [
  {
    name: 'X',
    Icon: XIcon,
    color: '#FFFFFF',
    link: 'https://www.example.com/x',
    size: '25px',
  },
  {
    name: 'facebook',
    Icon: FacebookIcon,
    color: '#1877F2',
    link: 'https://www.example.com/facebook',
    size: '30px',
  },
  {
    name: 'LinkedIn',
    Icon: LinkedInIcon,
    color: '#0077B5',
    link: 'https://www.example.com/linkedin',
    size: '32px',
  },
  {
    name: 'YouTube',
    Icon: YouTubeIcon,
    color: '#FF0000',
    link: 'https://www.example.com/youtube',
    size: '35px',
  },
  {
    name: 'Github',
    Icon: GitHubIcon,
    color: '#FFFFFF',
    link: 'https://www.example.com/x',
    size: '30px',
  },
];
