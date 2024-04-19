import {useState} from 'react';

const useCheckBox = (id) => {

    const {isAssitantChecked, setIsAssitantChecked} = useState();

    return {
        isAssitantChecked,
    };



};

export default useCheckBox;