import { useState, useEffect, useRef, useMemo } from 'react';

import MicIcon from '../../assets/images/mic.svg';
import SendIcon from '../../assets/images/send.svg';
import PlusIcon from '../../assets/images/plus.svg';
import VideoIcon from '../../assets/images/video-camera.svg';


import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    ClassicEditor,
    Alignment,
    Autosave,
    Bold,
    Essentials,
    Heading,
    Indent,
    IndentBlock,
    Italic,
    List,
    Paragraph,
    Underline
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import Modal from '../Modal/Modal';
import Alert from '../Alert/Alert';
import type { IFeedItem } from '../../interface/IFeedItem';
import { useAuth } from '../../context/AuthContext';

/**
 * Create a free account with a trial: https://portal.ckeditor.com/checkout?plan=free
 */
const LICENSE_KEY = 'GPL'; // or <YOUR_LICENSE_KEY>.

const PostEditor = ({ onSendPost }: { onSendPost: ((input:IFeedItem) => void)}) => {
    const editorContainerRef = useRef<HTMLDivElement | null>(null);
    const editorRef = useRef<any>(null); // Use a more specific type if available from CKEditor typings
    const [isLayoutReady, setIsLayoutReady] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [postData, setPostData] = useState('');
    const {user} = useAuth()

    useEffect(() => {
        setIsLayoutReady(true);

        return () => setIsLayoutReady(false);
    }, []);

    const { editorConfig } = useMemo(() => {
        if (!isLayoutReady) {
            return {};
        }

        return {
            editorConfig: {
                toolbar: {
                    items: ['heading', '|', 'bold', 'italic', 'underline', '|', 'alignment', '|', 'bulletedList', 'numberedList', 'outdent', 'indent'],
                    shouldNotGroupWhenFull: true
                },
                plugins: [Alignment, Autosave, Bold, Essentials, Heading, Indent, IndentBlock, Italic, List, Paragraph, Underline],
                heading: {
                    options: [
                        {
                            model: 'paragraph',
                            view: 'p',
                            title: 'Paragraph',
                            class: 'ck-heading_paragraph'
                        },
                        {
                            model: 'heading1',
                            view: 'h1',
                            title: 'Heading 1',
                            class: 'ck-heading_heading1'
                        },
                        {
                            model: 'heading2',
                            view: 'h2',
                            title: 'Heading 2',
                            class: 'ck-heading_heading2'
                        },
                        {
                            model: 'heading3',
                            view: 'h3',
                            title: 'Heading 3',
                            class: 'ck-heading_heading3'
                        },
                        {
                            model: 'heading4',
                            view: 'h4',
                            title: 'Heading 4',
                            class: 'ck-heading_heading4'
                        },
                        {
                            model: 'heading5',
                            view: 'h5',
                            title: 'Heading 5',
                            class: 'ck-heading_heading5'
                        },
                        {
                            model: 'heading6',
                            view: 'h6',
                            title: 'Heading 6',
                            class: 'ck-heading_heading6'
                        }
                    ]
                },
                initialData: '',
                licenseKey: LICENSE_KEY,
                placeholder: 'Type or paste your content here!'
            }
        };
    }, [isLayoutReady]);

    const handleSend = () => {
        console.log("Post data:", postData);
        const post: IFeedItem = {
            id: Date.now(),
            body: postData,
            userName: user?.username || 'Anonymous',
            timestamp: new Date().getTime(),
        }
        onSendPost(post); // Call the parent function to handle sending the post
        setPostData(''); // Clear the post data after sending
    };

    return (
        <>
            <div className="bg-gray-100 rounded-2xl p-2 mb-4">
                <div className="mx-auto bg-white rounded-t-2xl shadow p-3.5 border border-gray-200" ref={editorContainerRef}>
                    <div className="editor-container__editor">
                        <div>
                            {editorConfig && (
                                <CKEditor
                                    editor={ClassicEditor}
                                    config={editorConfig}
                                    onReady={editor => {
                                        editorRef.current = editor;
                                    }}
                                    data={postData}
                                    onChange={() => {
                                        setPostData(editorRef.current?.getData() || '');
                                        console.log("editor data", editorRef.current?.getData());
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between mx-auto bg-white rounded-b-2xl shadow p-3.5 border border-gray-200'>
                    <div className="flex items-center gap-6 pt-2.5 pb-1" onClick={() => setIsOpen(true)}>
                        <img src={PlusIcon} alt="Heart" className='cursor-pointer w-6 bg-gray-200 rounded-md' />
                        <img src={MicIcon} alt="Comment" className='cursor-pointer w-6' />
                        <img src={VideoIcon} alt="Share" className='cursor-pointer w-6' />
                    </div>
                    <div>
                        <button onClick={handleSend} disabled={!postData || postData.trim() === "" || postData === "<p></p>"}
                            className={`cursor-pointer transition-opacity ${!postData || postData.trim() === "" || postData === "<p></p>" ? "opacity-50 pointer-events-none" : ""} bg-transparent border-none p-0`} >
                            <img src={SendIcon} alt="Send" />
                        </button>
                    </div>
                </div>

            </div>
            <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }}>
                <Alert onClose={() => setIsOpen(false)} />
            </Modal>
        </>
    );
}

export default PostEditor;