import { SvgIcon } from '@mui/material';

interface IGradientIcon {
  Icon: typeof SvgIcon;
  gradientId: string;
}

const GradientIcon: React.FC<IGradientIcon> = ({
  Icon,
  gradientId = 'customGradient',
}) => {
  return (
    <SvgIcon
      sx={{
        fill: `url(#${gradientId})`,
        width: {
          xs: '1.3rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '2.5rem',
          xl: '3rem',
        },
      }}
    >
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
      </linearGradient>

      <Icon
        sx={{
          '& path': { fill: `url(#${gradientId})` },
        }}
      />
    </SvgIcon>
  );
};

export default GradientIcon;
