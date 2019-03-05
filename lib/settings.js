
export const colorPicker = () => {
        const picker = document.getElementById("pen-color");
        
        return picker.jscolor.toHEXString();
    }

export const widthPicker = () => {
        const picker = document.getElementById("pen-width");
        return picker.value;
    }

export const divisionPicker = () => {
    const picker = document.getElementById("divisions");
    return picker.value;
}


