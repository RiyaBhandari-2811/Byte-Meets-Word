import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';

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

  return <EditorContent editor={editor} />;
};

export default TextEditor;
