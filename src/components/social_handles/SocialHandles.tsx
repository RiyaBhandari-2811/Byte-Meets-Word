import { SOCIALS, ISocialMedia } from '@/constants/socialMedia';
import navigateToRoute, { NavigateFunction } from '@/utils/navigateTo';
import { Stack } from '@mui/material';
import './SocialHandles.scss';

const SocialHandles = () => {
  const routeTo: NavigateFunction = navigateToRoute();
  return (
    <Stack
      direction={'row'}
      spacing={2}
      alignItems={'center'}
      justifyContent={'center'}
      className="social-handles__container"
    >
      {SOCIALS.map(
        ({ Icon, color, link, size }: ISocialMedia, index: number) => (
          <Icon
            key={index}
            sx={{ color, fontSize: size }}
            onClick={() => routeTo(link)}
            className="social-handles-icon"
          />
        )
      )}
    </Stack>
  );
};

export default SocialHandles;
