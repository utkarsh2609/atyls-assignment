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

/**
 * Create a free account with a trial: https://portal.ckeditor.com/checkout?plan=free
 */
const LICENSE_KEY = 'GPL'; // or <YOUR_LICENSE_KEY>.

const PostEditor = () => {
    const editorContainerRef = useRef(null);
    const editorRef = useRef(null);
    const [isLayoutReady, setIsLayoutReady] = useState(false);

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
                    items: ['undo', 'redo', '|', 'heading', '|', 'bold', 'italic', 'underline', '|', 'alignment', '|', 'bulletedList', 'numberedList', 'outdent', 'indent'],
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

    return (
        <div className="bg-gray-100 rounded-2xl p-2 mb-4">
            <div className="mx-auto bg-white rounded-t-2xl shadow p-3.5 border border-gray-200" ref={editorContainerRef}>
                <div className="editor-container__editor">
                    <div ref={editorRef}>{editorConfig && <CKEditor editor={ClassicEditor} config={editorConfig} />}</div>
                </div>
            </div>
            <div className='flex items-center justify-between mx-auto bg-white rounded-b-2xl shadow p-3.5 border border-gray-200'>
                <div className="flex items-center gap-6 pt-2.5 pb-1">
                    <img src={PlusIcon} alt="Heart" className='cursor-pointer w-6 bg-gray-200 rounded-md' />
                    <img src={MicIcon} alt="Comment" className='cursor-pointer w-6' />
                    <img src={VideoIcon} alt="Share" className='cursor-pointer w-6' />
                </div>
                <div>
                    <img src={SendIcon} alt="Send" />
                </div>
            </div>

        </div>
    );
}

export default PostEditor;