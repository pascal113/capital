import React, {useState, useRef} from 'react';
import { useTranslation } from 'react-i18next';

const SelectUploadFile = (props) => {
    const { t }  = useTranslation(['page']);
    const [fileName, setFileName] = useState('');
    const hiddenFileInput = useRef(null);
    const max_file_size = 10*1024*1024; //10M

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    
    const clearState = () => {
        setFileName('');
        props.setFileData(null);
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
        props.setFileData(fileSelected);
        setFileName(fileSelected.name);
        event.target.value = '';
    };

    return (
        <div className='upload-cv-file'>
            <div className='upload-select-file'>
                <button type='button' id='upload-btn' onClick={handleClick}>{t('apply.upload_button')}</button>
                <input  type="file" 
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{display: 'none'}} 
                />
                <span className='selected-file'>{fileName}</span>
            </div>
            <div className='file-size'><span>{t('apply.max_filesize_10mb')}</span></div>
        </div>
    )
}

export default SelectUploadFile