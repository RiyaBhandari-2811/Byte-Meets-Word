import { Typography } from '@mui/material';
import GradientText from '../gradient_text/GradientText';

interface IHeadingProps {
  title: string;
  gradientTitle: string;
}

const Heading: React.FC<IHeadingProps> = ({ title, gradientTitle }) => {
  return (
    <Typography
      sx={{
        fontSize: {
          xs: '1.5rem',
          sm: '1.5rem',
          md: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
        },
        fontWeight: 'fontWeightBold',
        letterSpacing: '0.05rem',
      }}
    >
      {title}
      {gradientTitle && <GradientText text={gradientTitle} />}
    </Typography>
  );
};

export default Heading;
