import React, {useState, useRef} from 'react'

const SelectUploadFile = (props) => {
    const [fileName, setFileName] = useState(props.fileName);
    const hiddenFileInput = useRef(null);
    const max_file_size = 10*1024*1024; //10M

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    
    const clearState = () => {
        setFileName('');
        props.passClearStateFunc(clearState);
    }
    const handleChange = event => {
        const fileSelected = event.target.files[0];
        console.log('fileSelected', fileSelected);
        const fileSize = fileSelected.size;
        console.log('size', fileSize);
        if(fileSize > max_file_size)
        {
            event.target.value = '';
            alert('Maximal 10 MB');
            return;
        }
        setFileName(fileSelected.name);
        event.target.value = '';
    };

    return (
        <div className='upload-cv-file'>
            <div className='upload-select-file'>
                <button type='button' id='upload-btn' onClick={handleClick}>Durchsuchen</button>
                <input  type="file" 
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{display: 'none'}} 
                />
                <span className='selected-file'>{fileName}</span>
            </div>
            <div className='file-size'><span>Maximal 10 MB</span></div>
        </div>
    )
}

export default SelectUploadFile