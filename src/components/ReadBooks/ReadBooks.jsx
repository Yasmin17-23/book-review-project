import useLocalStorage from "../../Hooks/useLocalStorage";
import CardStyle from "../CardStyle/CardStyle";



const ReadBooks = () => {
    const {localData} = useLocalStorage();
    console.log(localData);

    
    
    return (
        <div className="mt-6">
            {
                localData.map((list, idx) => <CardStyle key={idx} list = {list}></CardStyle>)
            }
        </div>
    );
};

export default ReadBooks;