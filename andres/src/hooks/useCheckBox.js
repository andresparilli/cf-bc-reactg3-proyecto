import {useState, useRef } from 'react';

const CHECKED_ASSISTANTS_KEY = 'checkedAssistants';

const checkIsAssitantChecked = (studentId) => {
    const checkedAssistants = JSON.parse(localStorage.getItem(CHECKED_ASSISTANTS_KEY)) || [];
    return checkedAssistants.includes(studentId);
};

const useCheckBox = (studentId) => {
    const initialChecked = useRef(checkIsAssitantChecked(studentId));
    const [isAssitantChecked, setIsAssitantChecked] = useState(initialChecked.current);
  
    const toggleCheckBox = (studentId) => {
      const checkedAssistants = JSON.parse(localStorage.getItem(CHECKED_ASSISTANTS_KEY)) || [];
      const assitantIndex = checkedAssistants.indexOf(studentId);
  
      if (assitantIndex !== -1) {
        checkedAssistants.splice(assitantIndex, 1);
        setIsAssitantChecked(false);
      } else {
        checkedAssistants.push(studentId);
        setIsAssitantChecked(true);
      }
  
      localStorage.setItem(CHECKED_ASSISTANTS_KEY, JSON.stringify(checkedAssistants));
    };
  
    return {
      isAssitantChecked,
      toggleCheckBox,
    };
  };
  
  export default useCheckBox;