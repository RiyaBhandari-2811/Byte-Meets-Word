import { Typography } from '@mui/material';
import GradientText from '../gradient_text/GradientText';

interface IHeadingProps {
  title: string;
}

const Heading: React.FC<IHeadingProps> = ({ title }) => {
  const words: string[] = title.split(' ');
  const firstPart: string = words.slice(0, -1).join(' ');
  const lastWord: string = ' ' + words[words.length - 1];
  return (
    <Typography
      sx={{
        fontSize: {
          xs: '1.3rem',
          sm: '1.5rem',
          md: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
        },
        fontWeight: 'fontWeightBold',
        letterSpacing: '0.05rem',
      }}
    >
      {firstPart}
      <GradientText text={lastWord} />
    </Typography>
  );
};

export default Heading;
