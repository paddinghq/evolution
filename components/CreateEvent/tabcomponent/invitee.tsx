import { Input } from "@/components/ui/input";
import { SetStateAction, useState } from "react";
import { IoClose } from "react-icons/io5";

const  Invitee = () => {
    const [email, setemail] = useState('');
    const [enteredEmail, setEnteredEmail] = useState<string[]>([]);

    const [phone, setPhone] = useState('');
    const [enteredPhone, setEnteredPhone] = useState<(string | number)[]>([]);

    
    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setemail(event.target.value);
    };

    const handleEnterKeyPress = (event: { key: string; preventDefault: () => void; }) => {
        if (event.key === 'Enter') {
            // Prevent the form from being submitted
            event.preventDefault();

            // Add the entered hashtag to the list
            setEnteredEmail([...enteredEmail, email]);

            // Clear the input field
            setemail('');
        }
    };

    const handleRemoveHashtag = (index: number): void => {
        const updatedHashtags = [...enteredEmail];
        updatedHashtags.splice(index, 1);
        setEnteredEmail(updatedHashtags);
    };

    const handleNumberChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPhone(event.target.value);
    };
    const handleEnterPress = (event: { key: string; preventDefault: () => void; }) => {
        if (event.key === 'Enter') {
            // Prevent the form from being submitted
            event.preventDefault();

            // Add the entered hashtag to the list
            setEnteredPhone([...enteredPhone, Number(phone)]);

            // Clear the input field
            setPhone('');
        }
    };

    const handleRemoveNumber = (index: number): void => {
        const updatedNumber = [...enteredPhone];
        updatedNumber.splice(index, 1);
        setEnteredPhone(updatedNumber);
    };
    
    return (
        <div className="flex justify-between gap-3">
            <div className="w-full">
            <>
                <Input placeholder='Enter Email Address'
                value={email}
                onChange={handleInputChange}
                onKeyPress={handleEnterKeyPress}
                />

                {enteredEmail.length > 0 && (
                    <div className='mt-5 bg-white py-4 px-3 flex flex-wrap gap-3 rounded-lg'>
                    {enteredEmail.map((enteredEmail, index) => (
                        <span key={index} className='border-2 rounded-full border-black flex px-4'>{enteredEmail}
                            <button onClick={() => handleRemoveHashtag(index)}>
                                <IoClose />
                            </button>
                        </span>
                    ))}
                    </div>
                )}
            </>
            
            
            </div>
            <div className="w-full">
            <>
                <Input placeholder='Enter Phone Number'
                value={phone}
                onChange={handleNumberChange}
                onKeyPress={handleEnterPress}
                />

                {enteredPhone.length > 0 && (
                    <div className='mt-5 bg-white py-4 px-3 flex flex-wrap gap-3 rounded-lg'>
                    {enteredPhone.map((enteredPhone, index) => (
                        <span key={index} className='border-2 rounded-full border-black px-3 flex items-center gap-3'>{enteredPhone}
                            <button onClick={() => handleRemoveNumber(index)}>
                                <IoClose />
                            </button>
                        </span>
                    ))}
                    </div>
                )}
            </>
            
            
            </div>
        </div>
    )
}

export default Invitee