import './GradientText.scss';
interface IGradientTextProps {
  text: string;
}

const GradientText: React.FC<IGradientTextProps> = ({ text }) => {
  return <span className="gradient-text">{text}</span>;
};

export default GradientText;
