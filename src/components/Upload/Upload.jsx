import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

const Upload = () => {
    const [popup, setPopup] = useState(false)
    return (
        
        <>
        <button onClick={() => setPopup(true)}>Click Me</button>
        {popup && (
            <ClickAwayListener onClickAway={() => setPopup(false)}>
                    <div className={'popup'}>
                        <li>Items of the Popup</li>
                        <li>Items of the Popup</li>
                        <li>Items of the Popup</li>
                    </div>
            </ClickAwayListener>
        )}
        </>
    )
};

export default Upload;