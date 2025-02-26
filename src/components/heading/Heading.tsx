import { SxProps, Theme, Typography } from '@mui/material';
import GradientText from '../gradient_text/GradientText';

interface IHeadingProps {
  title: string;
  styleProps?: SxProps<Theme>;
  gradient?: boolean;
}

const Heading: React.FC<IHeadingProps> = ({
  title,
  styleProps,
  gradient = true,
}) => {
  if (!gradient) {
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
          ...styleProps,
        }}
      >
        {title}
      </Typography>
    );
  }

  const words: string[] = title.split(' ');
  const firstPart: string = words.slice(0, -1).join(' ');
  const lastWord: string =
    words.length > 1 ? ' ' + words[words.length - 1] : title;

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
        ...styleProps,
      }}
    >
      {words.length > 1 ? firstPart : ''}
      <GradientText text={words.length > 1 ? lastWord : title} />
    </Typography>
  );
};

export default Heading;
