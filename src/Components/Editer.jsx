import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";

function Editor({ username }) {
  const ydoc = new Y.Doc();
  const provider = new WebrtcProvider("editor-room", ydoc);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider: provider,
        user: {
          name: username,
          color: "#" + Math.floor(Math.random() * 16777215).toString(16),
        },
      }),
    ],
  });

  return (
    <div className="w-full max-w-[1000px] h-screen ">
      <h2 className="text-3xl font-bold text-gray-400 text-center pt-10 mb-10">
        Real-Time Multiple_User Editor
      </h2>
      <div className="flex flex-wrap gap-2 mb-4 justify-between bg-gray-400 p-3 rounded shadow">
          {/* Text Styles */}
          <button onClick={() => editor.chain().focus().toggleBold().run()} className= {`hover:text-gray-800 ${editor.isActive('bold') ? 'font-bold text-blue-600' : ''}`}>Bold</button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`hover:text-gray-800 ${editor.isActive('bold') ? 'font-bold text-blue-600' : ''}`}>Italic</button>
       
    
          {/* Undo / Redo */}
          <button onClick={() => editor.chain().focus().undo().run()} className="border border-green-800 px-6 rounded  hover:bg-gray-600">Undo</button>
          <button onClick={() => editor.chain().focus().redo().run()} className="border border-green-800 px-6 rounded hover:bg-gray-600">Redo</button>
  
      </div>
      <div className=" rounded p-5 bg-white shadow-2xl">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default Editor;
