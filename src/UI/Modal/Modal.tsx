import React, { useEffect, useRef, useState } from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    height?: string;
    className?: string
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (isOpen && !mounted) {
            setMounted(true);
        }
    }, [isOpen, mounted]);

    useEffect(() => {
        if (!isOpen && mounted) {
            setIsAnimatingOut(true);
            const timer = setTimeout(() => {
                setIsAnimatingOut(false);
                setMounted(false);
            }, 300); // Match animation duration
            return () => clearTimeout(timer);
        }
    }, [isOpen, mounted]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!mounted && !isAnimatingOut) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 w-full desktop:w-[476px] mx-auto min-h-screen flex flex-col  bg-black transition-opacity duration-300 z-40
          ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Modal */}
            <div
                ref={modalRef}
                className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 desktop:w-[476px] w-full max-w-lg rounded-t-[20px] transform will-change-transform z-50
          ${isOpen ? 'animate-slideIn' : isAnimatingOut ? 'animate-slideOut' : ''}`}
            >
                {/* <div className={`py-[36px] px-[32px] h-full flex flex-col ${className}`}> */}
                    <div className="overflow-y-auto scrollbar-hide flex-1 ">{children}</div>
                {/* </div> */}
            </div>
        </>
    );
}

export default Modal;
