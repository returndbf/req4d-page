import "./index.css"
interface HeaderProps{
    title?:string
}
export const Header = ({title}: HeaderProps) => {
    return (
        <div className={'header-container'}>
           <h1 className={'title'} >
               {title}
           </h1>
            </div>
    );
};