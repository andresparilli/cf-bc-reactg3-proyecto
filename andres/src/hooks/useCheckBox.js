import {useState} from 'react';

const useCheckBox = (studentId) => {

    const {isAssitantChecked, setIsAssitantChecked} = useState();

    return {
        isAssitantChecked,
    };



};

export default useCheckBox;