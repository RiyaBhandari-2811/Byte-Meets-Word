import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import MUICard from '@mui/material/Card';
import './Card.scss';
import navigateToRoute, { NavigateFunction } from '@/utils/navigateTo';
import { IArticle } from '@/types/article';

interface ICardProps {
  article: IArticle;
}

const Card: React.FC<ICardProps> = ({ article }) => {
  const routeTo: NavigateFunction = navigateToRoute();

  const { _id, title, description, featureImage, readTime, createdAt } =
    article;

  return (
    <MUICard
      className="card"
      sx={{
        width: {
          xs: '300px',
          lg: '300px',
        },
        height: {
          xs: '400px',
          lg: '350px',
        },
        backgroundColor: 'rgba(30, 41, 59, 1)',
        color: 'white',
        border: '1.5px solid rgb(52 152 219 / 80%)',
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
        onClick={() => routeTo(`/articles/${_id}`)}
      >
        <CardMedia
          component="img"
          alt={title}
          image={featureImage}
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
            {createdAt + ' ' + readTime}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
};

export default Card;
