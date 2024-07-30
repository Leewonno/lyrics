interface ToastProps{
    children: string
}

export const Toast: React.FC<ToastProps> = ({ children }) =>{
    return (
        <div>
            {children}
        </div>
    )
}