import { Editor } from '@tiptap/react';

const MenuBar = ({ editor }: { editor: Editor }) => {
  if (!editor) {
    return null;
  }
  return <div>MenuBar</div>;
};

export default MenuBar;
