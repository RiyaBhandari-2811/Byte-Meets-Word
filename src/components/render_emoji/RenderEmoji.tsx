import { Box } from '@mui/material';

interface IRenderEmojiProps {
  code: number;
}

const RenderEmoji: React.FC<IRenderEmojiProps> = ({ code }) => {
  return (
    <Box
      component="span"
      role="img"
      aria-label={'jsx-a11y/accessible-emoji'}
      sx={{ fontSize: '1.5rem' }}
    >
      {String.fromCodePoint(code)}
    </Box>
  );
};

export default RenderEmoji;
