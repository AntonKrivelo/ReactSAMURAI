export const requiredField = (value) => {
   if(value) {
        return undefined;
   } else {
        return 'error message';
   }

}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`;
    } else {
        return undefined;
    }
}
export const minLengthCreator = (minLength) => (value) => {
    if(value && value.length <= minLength) {
        return `Min length is ${minLength} symbols`;

    }else {
        return undefined;
    }
}