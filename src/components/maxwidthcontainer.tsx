export default function MaxWidthContainer({children , className}:{children:React.ReactNode,className?:string}){
    return(
        <div className={`max-w-3xl mx-auto ${className}`}>
            {children}
        </div>
    )
}   