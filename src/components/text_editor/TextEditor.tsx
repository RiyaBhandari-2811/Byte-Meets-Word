import { Stack } from '@mui/material';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';
import MenuBar from '../menu_bar/MenuBar';

const extensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

const TextEditor = () => {
  const [article] = useState('');

  const editor = useEditor({
    extensions,
    autofocus: true,
    content: article,
    editorProps: {
      attributes: {
        class: 'editor-div',
      },
    },
  });

  if (!editor) return null;

  return (
    <Stack
      spacing={2}
      marginTop={5}
      alignItems="center"
      justifyContent="center"
    >
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </Stack>
  );
};

export default TextEditor;
