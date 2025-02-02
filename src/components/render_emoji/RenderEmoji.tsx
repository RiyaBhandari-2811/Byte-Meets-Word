interface IRenderEmojiProps {
  code: number;
}

const RenderEmoji: React.FC<IRenderEmojiProps> = ({ code }) => {
  return (
    <span role="img" aria-label={'jsx-a11y/accessible-emoji'}>
      {String.fromCodePoint(code)}
    </span>
  );
};

export default RenderEmoji;
