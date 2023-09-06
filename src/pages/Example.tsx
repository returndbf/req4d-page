import { useOutletContext } from "react-router-dom";


export const Example = () => {
    const a = useOutletContext() as number

    return (
        <div>
            {a}
        example
        </div>
    );
};




