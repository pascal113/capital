import React, {useState} from 'react';
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

const JobForm = (props) => {
    const { t }  = useTranslation(['page']);
    const label_content_detail = t('jobs.form.lb_content', { returnObjects: true });
    const {open, job, types, locations, fields, editLanguage, handleClose } = props;
    const sufLabel = (editLanguage === 'DE')?'_de':'_gb';
    
    const getFormData = () => {
        const formData = {
            id: '',
            title: '',
            type: '',
            location: '',
            field: [],
            introduction: '',
            content_waiting_for_you_detail: '',
            content_bring_with_you_detail: '',
            content_we_offer_you_subtitle: '',
            content_we_offer_you_detail: '',
            info_contact: '',
            info_comment: '',
        };

        if(job == null)
            return formData;

        formData['id'] = job._id;
        formData['language'] = editLanguage;
        formData['title'] = job[`title${sufLabel}`];
        formData['type'] = job.type;
        formData['location'] = job.location;
        formData['field'] = job.field.length > 0?job.field.split(','):[];
        formData['introduction'] = job[`about${sufLabel}`].introduction;
        formData['content_waiting_for_you_detail'] = job[`about${sufLabel}`].content[0].detail.length > 0?job[`about${sufLabel}`].content[0].detail.join('\n'):"";
        formData['content_bring_with_you_detail'] = job[`about${sufLabel}`].content[1].detail.length > 0?job[`about${sufLabel}`].content[1].detail.join('\n'):"";
        formData['content_we_offer_you_subtitle'] = job[`about${sufLabel}`].content[2].subtitle;
        formData['content_we_offer_you_detail'] = job[`about${sufLabel}`].content[2].detail.length > 0?job[`about${sufLabel}`].content[2].detail.join('\n'):"";
        formData['info_contact'] = job[`about${sufLabel}`].info.contact.length > 0?job[`about${sufLabel}`].info.contact.join('\n'):"";
        formData['info_comment'] = job[`about${sufLabel}`].info.comment.length > 0?job[`about${sufLabel}`].info.comment.join('\n'):"";

        return formData;
    }
    const formData = getFormData(job, editLanguage, sufLabel);

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required(t('messages.field_require')),
        introduction: Yup.string()
            .required(t('messages.field_require')),
        type: Yup.string()
            .required(t('messages.field_require')),
        field: Yup.array()
            .min(1, t('messages.field_require')),
        location: Yup.string()
            .required(t('messages.field_require')),
        content_waiting_for_you_detail: Yup.string()
            .required(t('messages.field_require')),
        content_bring_with_you_detail: Yup.string()
            .required(t('messages.field_require')),
        content_we_offer_you_subtitle: Yup.string()
            .required(t('messages.field_require')),
        content_we_offer_you_detail: Yup.string()
            .required(t('messages.field_require')),
        info_contact: Yup.string()
            .required(t('messages.field_require')),
        info_comment: Yup.string()
            .required(t('messages.field_require')),
    });
    
    const onSubmit = data => {
        data.field = data.field.toString();
        props.onSubmit(formData.id, data);
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
            <DialogTitle sx={{fontWeight: 'bold'}}>{formData.title===''?t('jobs.form.lb_add_new'):t('jobs.form.lb_edit')}</DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <FormControl sx={{ mt:3 }} fullWidth>
                        <Controller
                        control={control}
                        name="title"
                        render={({ field }) => (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label={t('jobs.form.lb_title')}
                                name="title"
                                autoFocus
                                multiline
                                placeholder={t('messages.enter_contents')}
                                autoComplete="title"
                                {...register("title")}
                                error={errors.title ? true : false}
                            />
                        )}>
                        </Controller>
                        <Typography variant="inherit" color="textSecondary">
                        {errors.title?.message}
                        </Typography>  
                    </FormControl>
                    <FormControl sx={{ mt:1 }} fullWidth>
                        <Controller
                        control={control}
                        name="introduction"
                        render={({ field }) => (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="introduction"
                                label={t('jobs.form.lb_introduction')}
                                name="introduction"
                                multiline
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
                        <InputLabel id="type-label">{t('jobs.form.lb_type')}</InputLabel>
                        <Controller
                        control={control}
                        name="type"
                        render={({ field }) => (
                            <Select
                            {...field}
                            label={t('jobs.form.lb_type')}
                            {...register("type")}
                            error={errors.type ? true : false}
                            required
                            >
                                {types.map((item, index) => (
                                    <MenuItem  key={index} value={item.id}>
                                        {item[`name${sufLabel}`]}
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
                        <InputLabel id="location-label">{t('jobs.form.lb_location')}</InputLabel>
                        <Controller
                        control={control}
                        name="location"
                        render={({ field }) => (
                            <Select
                            {...field}
                            label={t('jobs.form.lb_location')}
                            required
                            {...register("location")}
                            error={errors.location ? true : false}
                            >
                                {locations.map((item, index) => (
                                    <MenuItem key={index} value={item.id}>
                                        {item[`name${sufLabel}`]}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}></Controller>
                        <Typography variant="inherit" color="textSecondary">
                            {errors.location?.message}
                        </Typography>
                    </FormControl>
                    <FormControl sx={{ mt:4 }} fullWidth>
                        <InputLabel id="field-label">{t('jobs.form.lb_field')}</InputLabel>
                        <Controller
                            control={control}
                            name="field"
                            render={({ field: { onChange, value, name, ref } }) => (
                                <Select
                                id="field"
                                variant="outlined"
                                name={name}
                                label={t('jobs.form.lb_field')}
                                ref={ref}
                                onChange={onChange}
                                multiple
                                required
                                fullWidth
                                value={value}
                                //defaultValue={formData.field}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} 
                                        label={ (fields.find( item  => item.id === value))[`name${sufLabel}`]}/>
                                    ))}
                                    </Box>
                                )}
                                {...register("field")}
                                error={errors.field ? true : false}
                                >
                                {fields.map((item, index) => (
                                    <MenuItem key={index} value={item.id ? item.id : item[`name${sufLabel}`]}>
                                        {item[`name${sufLabel}`]}
                                    </MenuItem>
                                ))}
                                </Select>
                            )}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.field?.message}
                        </Typography>
                    </FormControl>
                    <FormControl sx={{ mt:5 }} fullWidth>
                        <Typography sx={{fontWeight: 'bold'}} variant="subtitle1" component="div">
                        {label_content_detail[0]}
                        </Typography>
                        <Controller
                        control={control}
                        name="content_waiting_for_you_detail"
                        render={({ field }) => (
                        <TextField
                            margin="normal"
                            sx={{ mt:1 }}
                            required
                            fullWidth
                            id="content_waiting_for_you_detail"
                            label={t('jobs.form.lb_detailed_contents')}
                            name="content_waiting_for_you_detail"
                            multiline
                            placeholder={t('messages.enter_contents')}
                            {...register('content_waiting_for_you_detail')}
                            error={errors.content_waiting_for_you_detail ? true : false}
                        />
                        )}></Controller>
                        <Typography variant="inherit" color="textSecondary">
                            {errors.content_waiting_for_you_detail?.message}
                        </Typography>
                    </FormControl>

                    <FormControl sx={{ mt:5 }} fullWidth>
                        <Typography sx={{fontWeight: 'bold'}} variant="subtitle1" component="div">
                        {label_content_detail[1]}
                        </Typography>
                        <Controller
                        control={control}
                        name="content_bring_with_you_detail"
                        render={({ field }) => (
                        <TextField
                            margin="normal"
                            sx={{ mt:1 }}
                            required
                            fullWidth
                            id="content_bring_with_you_detail"
                            label={t('jobs.form.lb_detailed_contents')}
                            name="content_bring_with_you_detail"
                            multiline
                            placeholder={t('messages.enter_contents')}
                            {...register('content_bring_with_you_detail')}
                            error={errors.content_bring_with_you_detail ? true : false}
                        />
                        )}></Controller>
                        <Typography variant="inherit" color="textSecondary">
                            {errors.content_bring_with_you_detail?.message}
                        </Typography>
                    </FormControl>

                    <FormControl sx={{ mt:5 }} fullWidth>
                        <Typography sx={{fontWeight: 'bold'}} variant="subtitle1" component="div">
                        {label_content_detail[2]}
                        </Typography>
                        <Controller
                        control={control}
                        name="content_we_offer_you_subtitle"
                        render={({ field }) => (
                        <TextField
                            margin="normal"
                            sx={{ mt:1 }}
                            required
                            fullWidth
                            id="content_we_offer_you_subtitle"
                            label={t('jobs.form.lb_subtitle')}
                            name="content_we_offer_you_subtitle"
                            multiline
                            placeholder={t('messages.enter_contents')}
                            {...register('content_we_offer_you_subtitle')}
                            error={errors.content_we_offer_you_subtitle ? true : false}
                        />
                        )}></Controller>
                        <Typography variant="inherit" color="textSecondary">
                            {errors.content_we_offer_you_subtitle?.message}
                        </Typography>
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
                            placeholder={t('messages.enter_contents')}
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
                            placeholder={t('messages.enter_contents')}
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
                            placeholder={t('messages.enter_contents')}
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
                            size="large" onClick={handleSubmit(onSubmit)}>{t('save')}</Button>
                        <Button variant="contained" color="error" sx={{ mt: 5, mb: 0 }} size="large" onClick={handleClose}>{t('cancel')}</Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default JobForm