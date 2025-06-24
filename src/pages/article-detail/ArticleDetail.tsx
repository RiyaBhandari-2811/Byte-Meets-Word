/* eslint-disable @typescript-eslint/no-explicit-any */

import Heading from '@/components/heading/Heading';
import { Box, Button, Stack, Typography } from '@mui/material';
import parse, { DOMNode, Element, Text } from 'html-react-parser';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GradientIcon from '@/components/gradient_icon/GradientIcon';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetArticleByIdQuery } from '@/features/articlesSlice';
import { useSelector } from 'react-redux';

export interface IArticle {
  title: string;
  subtitle: string;
  summary: string;
  featureImage: string;
  mainContent: string;
  readTime: number;
  category?: string;
  tags: string[];
  isActive: boolean;
  createdAt: Date;
  modifiedAt: Date;
}

const ArticleDetail: React.FC = () => {
  const userStore = useSelector((state: any) => state.userStore);

  console.log('userStore: ', userStore);

  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { articleId } = useParams();
  const { data: article, isLoading } = useGetArticleByIdQuery(
    articleId as string
  );

  if (isLoading) return <p>Loading...</p>;

  console.log(article);

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
    article && (
      <Stack gap={1}>
        <Heading
          title={article.title}
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
          {article?.subtitle}
        </Typography>
        <Stack
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
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
          >{`${article.createdAt} - ${article.readTime}`}</Typography>

          {userStore.role === 'admin' && (
            <Button color="info" sx={{ maxWidth: 'max-content' }}>
              Edit
            </Button>
          )}
        </Stack>
        <img src={article.featureImage} alt={article.title} />
        <Typography component={'div'}>
          {parse(article.mainContent, { replace: transform })}
        </Typography>
      </Stack>
    )
  );
};
export default ArticleDetail;
