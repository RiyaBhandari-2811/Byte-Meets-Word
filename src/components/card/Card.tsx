import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import MUICard from '@mui/material/Card';

interface ICardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const Card: React.FC<ICardProps> = ({
  id,
  title,
  subtitle,
  description,
  image,
}) => {
  return (
    <MUICard
      key={id}
      className="card"
      sx={{
        width: '250px',
        height: '350px',
        backgroundColor: 'rgba(30, 41, 59, 1)',
        color: 'white',
        borderRadius: '20px',
      }}
    >
      <CardActionArea
        disableRipple
        disableTouchRipple
        sx={{
          height: '100%',
        }}
      >
        <CardMedia
          component="img"
          alt={title}
          image={image}
          height={'50%'}
          sx={{
            objectFit: 'cover',
          }}
        />
        <CardContent
          sx={{
            height: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '10px',
          }}
        >
          <Typography
            sx={{
              fontSize: '15px',
              fontWeight: 'fontWeightBold',
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 'fontWeightRegular',
            }}
          >
            {description}
          </Typography>
          <Typography
            sx={{
              fontSize: '11px',
              fontWeight: 'fontWeightRegular',
              color: 'rgba(156, 163, 175, 1)',
            }}
          >
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
};

export default Card;
