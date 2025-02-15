import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import MUICard from '@mui/material/Card';
import './Card.scss';

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
        width: {
          xs: '300px',
          lg: '250px',
        },
        height: {
          xs: '400px',
          lg: '350px',
        },
        backgroundColor: 'rgba(30, 41, 59, 1)',
        color: 'white',
        borderRadius: '20px',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 0 10px rgb(52 152 219 / 80%)',
        },
        '& .MuiCardActionArea-focusHighlight': {
          display: 'none',
        },
      }}
    >
      <CardActionArea
        disableRipple={true}
        disableTouchRipple={true}
        className="card__action-area"
        sx={{
          height: '100%',
        }}
      >
        <CardMedia
          component="img"
          alt={title}
          image={image}
          height={'50%'}
          className="card__media"
          sx={{
            objectFit: 'cover',
          }}
        />
        <CardContent
          className="card__content"
          sx={{
            height: '45%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          <Typography
            className="card-title"
            sx={{
              fontSize: '15px',
              fontWeight: 'fontWeightBold',
            }}
          >
            {title}
          </Typography>

          <Typography
            className="card-description"
            sx={{
              fontSize: '12px',
              fontWeight: 'fontWeightRegular',
            }}
          >
            {description}
          </Typography>
          <Typography
            className="card__subtitle"
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
