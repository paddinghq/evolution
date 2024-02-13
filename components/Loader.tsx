import { Oval } from "react-loader-spinner"

const Loader = () => {
    return (
        <div className="w-[20%] m-auto">
            <Oval
            visible={true}
            height="100%"
            width="100%"
            color="#B1761F"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </div>
    )
    
}

export default Loader