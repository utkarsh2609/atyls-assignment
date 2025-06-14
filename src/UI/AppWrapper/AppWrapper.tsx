import type { ReactNode } from "react";

interface AppWrapperProps {
    children: ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
    return (
        <div className="bg-app-gradient h-svh">
            <div className="w-full desktop:w-[476px] mx-auto h-svh flex flex-col bg-white">
                {children}
            </div>
        </div>
    )
}

export default AppWrapper
