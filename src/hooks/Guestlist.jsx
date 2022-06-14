import React, {useState, useEffect} from 'react'

const Guestlist = () => {
    const [guestList, setGuestList] = useState([ ]);
    const [guest, setGuest] = useState('');
    const onInput = (e) => {
        setGuest(e.target.value)
    };
    useEffect(() => {
        console.log('We just had a new guest');
    }, [guestList])
    const addGuest = () => {
        setGuestList([...guestList, guest])
        setGuest('')
    }
    return (
        <div>
            <input type="text" value={guest} onChange={onInput} />
            <button onClick={addGuest}>Add Guest</button>
            <ul>
                {guestList.map((guest) => {
                    return <li key={guest}> {guest}</li>
                })}
            </ul>
        </div>
    );
};

export default Guestlist