import {useState} from 'react';

const CHECKED_ASSISTANTS_KEY = 'checkedAssistants';
const checkIsAssitantChecked = (id) => {
    const checkedAssistants = JSON.parse(localStorage.getItem(CHECKED_ASSISTANTS_KEY)) || [];
    return checkedAssistants.includes(id);
};

const useCheckBox = (id) => {
    const {isAssitantChecked, setIsAssitantChecked} = useState(checkIsAssitantChecked(id));
    const toggleCheckBox = (id) => {
        const checkedBox = JSON.parse(localStorage.getItem(CHECKED_ASSISTANTS_KEY)) || [];
        const assitantIndex = checkedBox.indexOf(id);
        if (assitantIndex !== -1){
            checkedBox.splice(assitantIndex, 1);
            setIsAssitantChecked(false);
        }else{
            checkedBox.push(id);
            setIsAssitantChecked(true);
        }
        localStorage.setItem(CHECKED_ASSISTANTS_KEY, JSON.stringify(checkedBox));

    };

    return {
        isAssitantChecked,
        toggleCheckBox,
    };



};

export default useCheckBox;