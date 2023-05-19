import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import {
    Box,
    FormControl,
    MenuItem,
    Chip,
    InputLabel,
    Button, 
    TextField,
    Dialog,

    DialogContent,
    DialogTitle,
    Typography
} from '@mui/material';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

const getStyles = (name, personName, theme) => {
    return {
        fontWeight:
        personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
};


const getFormData = (input) => {
    const formData = {
        title: '',
        type: [],
        location: [],
        field: [],
        introduction: '',
        content_waiting_for_you_detail: '',
        content_bring_with_you_detail: '',
        content_we_offer_you_subtitle: '',
        content_we_offer_you_detail: '',
        info_contact: '',
        info_comment: '',
    };

    if(input == null)
        return formData;

    formData['title'] = input.title;
    formData['type'] = input.type;
    formData['location'] = input.location;
    formData['field'] = input.field;
    formData['introduction'] = input.about.introduction;
    formData['content_waiting_for_you_detail'] = input.about.content[0].detail.length > 0?input.about.content[0].detail.join('\n'):"";
    formData['content_bring_with_you_detail'] = input.about.content[1].detail.length > 0?input.about.content[1].detail.join('\n'):"";
    formData['content_we_offer_you_subtitle'] = input.about.content[2].subtitle;
    formData['content_we_offer_you_detail'] = input.about.content[2].detail.length > 0?input.about.content[2].detail.join('\n'):"";
    formData['info_contact'] = input.about.info.contact.length > 0?input.about.info.contact.join('\n'):"";
    formData['info_comment'] = input.about.info.comment.length > 0?input.about.info.comment.join('\n'):"";

    return formData;
}


const JobForm = (props) => {
    const { t }  = useTranslation(['page']);
    const select_type_list = t('jobs.form.type', { returnObjects: true });
    const select_location_list = t('jobs.form.location', { returnObjects: true });
    const select_field_list = t('jobs.form.field', { returnObjects: true });
    const label_content_detail = t('jobs.form.lb_content', { returnObjects: true });
    const theme = useTheme();
    const {open, job, handleClose } = props;
    const [formData, setFormData] = React.useState(getFormData(job));
    
    const handleSelectChange = (event, newValue) => {
        const { target: { name, value }, } = event;
        //setFormData({...formData, [name]: value});
        //console.log('handleSelectChange', formData);
    };

    const handleMultiSelectChange = (event) => {
        const { target: { name, value }, } = event;
        setFormData({...formData, [name]: typeof value === 'string' ? value.split(',') : value,});
    };

    const handleFormItemChange = (event) => {
        const { target: { name, value }, } = event;
        //setFormData({...formData, [name]: value});
    };    

    const validationSchema = Yup.object().shape({
        introduction: Yup.string()
            .required('Introduction is required')
            .min(10, 'Introduction must be at least 40 characters'),
        type: Yup.string()
            .required('Type is required'),
        location: Yup.string()
            .required('Location is required'),
        content_waiting_for_you_detail: Yup.string()
            .required('This field is required'),
        content_bring_with_you_detail: Yup.string()
            .required('This field is required'),
        content_we_offer_you_subtitle: Yup.string()
            .required('This field is required'),
        content_we_offer_you_detail: Yup.string()
            .required('This field is required'),
        info_contact: Yup.string()
            .required('This field is required'),
        info_comment: Yup.string()
            .required('This field is required'),
    });
    
    const onSubmit = data => {
        console.log('onSubmit', data);
        props.onSubmit(data);
    };

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
        } = useForm({
        resolver: yupResolver(validationSchema), 
        defaultValues: formData
    });

    return (
        <Dialog open={open} maxWidth="lg" onClick={(e) => e.stopPropagation()} onClose={handleClose} fullWidth>
            <DialogTitle sx={{fontWeight: 'bold'}}>{formData.title}</DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <FormControl sx={{ mt:3 }} fullWidth>
                        <Controller
                        control={control}
                        name="introduction"
                        render={({ field }) => (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="introduction"
                                label="introduction"
                                name="introduction"
                                autoFocus
                                multiline
                                onChange={handleFormItemChange}
                                placeholder="Please input introduction content"
                                autoComplete="introduction"
                                {...register('introduction')}
                                error={errors.introduction ? true : false}
                            />
                            
                        )}>
                        </Controller>
                        <Typography variant="inherit" color="textSecondary">
                        {errors.introduction?.message}
                        </Typography>  
                    </FormControl>
                    <FormControl sx={{ mt:3 }} fullWidth>
                        <InputLabel id="type-label">Type</InputLabel>
                        <Controller
                        control={control}
                        name="type"
                        render={({ field }) => (
                            <Select
                            {...field}
                            label="type"
                            {...register('type')}
                            error={errors.type ? true : false}
                            >
                                {select_type_list.map((item, index) => (
                                    <MenuItem  key={index} value={item.value}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}>
                        </Controller>
                        <Typography variant="inherit" color="textSecondary">
                            {errors.type?.message}
                        </Typography>
                    </FormControl>
                    <FormControl sx={{ mt:3 }} fullWidth>
                        <InputLabel id="location-label">Location</InputLabel>
                        <Controller
                        control={control}
                        name="location"
                        render={({ field }) => (
                            <Select
                            {...field}
                            label="location"
                            {...register('location')}
                            error={errors.type ? true : false}
                            >
                                {select_location_list.map((location, index) => (
                                    <MenuItem key={index} value={location.value}>
                                        {location.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}></Controller>
                        <Typography variant="inherit" color="textSecondary">
                            {errors.location?.message}
                        </Typography>
                    </FormControl>
                    <FormControl sx={{ mt:4 }} fullWidth>
                        <InputLabel id="field-label">Field</InputLabel>
                        <Controller
                            control={control}
                            name="field"
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                id="field"
                                variant="outlined"
                                name={name}
                                label="name"
                                ref={ref}
                                onChange={onChange}
                                multiple
                                fullWidth
                                defaultValue={formData.field}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                    </Box>
                                )}
                                >
                                {select_field_list.map((fieldItem, index) => (
                                    <MenuItem key={index} value={fieldItem.value}>
                                    {fieldItem.name}
                                    </MenuItem>
                                ))}
                                </Select>
                            )}
                        />
                    </FormControl>
                    <FormControl sx={{ mt:5 }} fullWidth>
                        <Typography sx={{fontWeight: 'bold'}} variant="subtitle1" component="div">
                        {label_content_detail[0]}
                        </Typography>
                        <TextField
                            margin="normal"
                            sx={{ mt:1 }}
                            required
                            fullWidth
                            id="content_waiting_for_you_detail"
                            label={t('jobs.form.lb_detailed_contents')}
                            name="content_waiting_for_you_detail"
                            multiline
                            onChange={handleFormItemChange}
                            placeholder="Please input content"
                            {...register('content_waiting_for_you_detail')}
                            error={errors.content_waiting_for_you_detail ? true : false}
                        />
                    </FormControl>

                    <FormControl sx={{ mt:5 }} fullWidth>
                        <Typography sx={{fontWeight: 'bold'}} variant="subtitle1" component="div">
                        {label_content_detail[1]}
                        </Typography>
                        <TextField
                            margin="normal"
                            sx={{ mt:1 }}
                            required
                            fullWidth
                            id="content_bring_with_you_detail"
                            label={t('jobs.form.lb_detailed_contents')}
                            name="content_bring_with_you_detail"
                            multiline
                            onChange={handleFormItemChange}
                            placeholder="Please input content"
                            {...register('content_bring_with_you_detail')}
                            error={errors.content_bring_with_you_detail ? true : false}
                        />
                    </FormControl>

                    <FormControl sx={{ mt:5 }} fullWidth>
                        <Typography sx={{fontWeight: 'bold'}} variant="subtitle1" component="div">
                        {label_content_detail[2]}
                        </Typography>
                        <TextField
                            margin="normal"
                            sx={{ mt:1 }}
                            required
                            fullWidth
                            id="content_we_offer_you_subtitle"
                            label={t('jobs.form.lb_subtitle')}
                            name="content_we_offer_you_subtitle"
                            multiline
                            onChange={handleFormItemChange}
                            placeholder="Please input content"
                            {...register('content_we_offer_you_subtitle')}
                            error={errors.content_we_offer_you_subtitle ? true : false}
                        />
                    </FormControl>
                    <FormControl  fullWidth>
                        <Controller
                        control={control}
                        name="content_we_offer_you_detail"
                        render={({ field }) => (
                        <TextField
                            margin="normal"
                            sx={{ mt:2 }}
                            required
                            fullWidth
                            id="content_we_offer_you_detail"
                            label={t('jobs.form.lb_detailed_contents')}
                            name="content_we_offer_you_detail"
                            multiline
                            onChange={handleFormItemChange}
                            placeholder="Please input content"
                            {...register('content_we_offer_you_detail')}
                            error={errors.content_we_offer_you_detail ? true : false}
                        />
                        )}>
                        </Controller>
                        <Typography variant="inherit" color="textSecondary">
                        {errors.content_we_offer_you_detail?.message}
                        </Typography>  
                    </FormControl>

                    <FormControl sx={{ mt:5 }} fullWidth>
                        <Typography sx={{fontWeight: 'bold'}} variant="subtitle1" component="div">
                        {t('jobs.form.lb_contact')}
                        </Typography>
                        <Controller
                        control={control}
                        name="info_contact"
                        render={({ field }) => (
                        <TextField
                            margin="normal"
                            sx={{ mt:1 }}
                            required
                            fullWidth
                            id="info_contact"
                            label={t('jobs.form.lb_detailed_contents')}
                            name="info_contact"
                            multiline
                            onChange={handleFormItemChange}
                            placeholder="Please input content"
                            {...register('info_contact')}
                            error={errors.info_contact ? true : false}
                        />
                        )}>
                        </Controller>
                        <Typography variant="inherit" color="textSecondary">
                        {errors.info_contact?.message}
                        </Typography>  
                    </FormControl>


                    <FormControl sx={{ mt:5 }} fullWidth>
                        <Typography sx={{fontWeight: 'bold'}} variant="subtitle1" component="div">
                        {t('jobs.form.lb_comment')}
                        </Typography>
                        <Controller
                        control={control}
                        name="info_comment"
                        render={({ field }) => (
                        <TextField
                            margin="normal"
                            sx={{ mt:1 }}
                            required
                            fullWidth
                            id="info_comment"
                            label={t('jobs.form.lb_detailed_contents')}
                            name="info_comment"
                            multiline
                            onChange={handleFormItemChange}
                            placeholder="Please input content"
                            autoComplete="info_comment"
                            {...register('info_comment')}
                            error={errors.info_comment ? true : false}
                        />
                        )}>
                        </Controller>
                        <Typography variant="inherit" color="textSecondary">
                        {errors.info_comment?.message}
                        </Typography>  
                    </FormControl>                
                    <Box display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                    >
                        <Button type="submit" variant="contained" sx={{ mt: 5, mb: 0, mx: 5, paddingLeft: '30px', paddingRight: '30px' }} 
                            size="large" onClick={handleSubmit(onSubmit)}>Save</Button>
                        <Button variant="contained" color="error" sx={{ mt: 5, mb: 0 }} size="large" onClick={handleClose}>Cancel</Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default JobForm