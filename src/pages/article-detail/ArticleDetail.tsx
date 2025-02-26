import Heading from '@/components/heading/Heading';
import articleData from '@assets/json/articleDetail.json';
import { Box, Stack, Typography } from '@mui/material';
import parse, { DOMNode, Element, Text } from 'html-react-parser';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GradientIcon from '@/components/gradient_icon/GradientIcon';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useState } from 'react';

const ArticleDetail: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = async (codeText: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(codeText);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = codeText;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setCopiedCode(codeText);
      setTimeout(() => {
        setCopiedCode(null);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const transform = (node: DOMNode) => {
    if (node.type === 'tag' && node.name === 'a') {
      return (
        <a
          href={node.attribs.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'underline',
            cursor: 'pointer',
            color: 'white',
          }}
        >
          {(node.children[0] as Text)?.data}
        </a>
      );
    }

    if (node.type === 'tag' && node.name === 'pre') {
      const codeText: string = (
        (node.children[0] as Element).children[0] as Text
      )?.data;

      return (
        <Box
          sx={{
            position: 'relative',
            borderRadius: '5px',
            background: 'rgb(40, 43, 46)',
            padding: '0.5rem',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              cursor: 'pointer',
            }}
            onClick={() => copyCode(codeText)}
          >
            <GradientIcon
              Icon={copiedCode === codeText ? DoneAllIcon : ContentCopyIcon}
              gradientId="copy"
            />
          </Box>
          <SyntaxHighlighter
            wrapLines={true}
            wrapLongLines={true}
            style={androidstudio}
            language={(node.children[0] as Element).attribs.class.split('-')[1]}
            customStyle={{ margin: '0px' }}
          >
            {codeText}
          </SyntaxHighlighter>
        </Box>
      );
    }
  };

  return (
    <Stack gap={1}>
      <Heading
        title={articleData.title}
        styleProps={{ textAlign: 'center' }}
        gradient={false}
      />
      <Typography
        sx={{
          textAlign: 'center',
          marginBottom: '1rem',
          fontSize: {
            xs: '0.8rem',
            sm: '1rem',
            xl: '1.5rem',
          },
        }}
      >
        {articleData.subtitle}
      </Typography>
      <Typography
        sx={{
          color: 'rgba(156, 163, 175, 1)',
          fontSize: {
            xs: '0.7rem',
            sm: '0.9rem',
            xl: '1.3rem',
          },
          letterSpacing: '0.5px',
        }}
      >{`${articleData.created_at} - ${articleData.reading_time}`}</Typography>
      <img src={articleData.featured_image} alt={articleData.title} />
      <Typography component={'div'}>
        {parse(articleData.main_content, { replace: transform })}
      </Typography>
    </Stack>
  );
};

export default ArticleDetail;
