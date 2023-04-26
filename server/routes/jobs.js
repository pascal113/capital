import Express from 'express'

const router = Express.Router();
import Job from '../models/job.js'
import {responseClient} from '../utils/util.js'

router.post('/add', function (req, res) {
    const {
        title,
        content,
        time,
        tags,
        isPublish
    } = req.body;
    const author = req.session.userInfo.username;
    const coverImg =  `/${Math.round(Math.random() * 9 + 1)}.jpg`;
    const viewCount = 0;
    const commentCount = 0;
    let tempJob = new Job({
        title,
        content,
        isPublish,
        viewCount,
        commentCount,
        time,
        author,
        coverImg,
        tags:tags.split(',')
    });
    tempJob.save().then(data=>{
        responseClient(res,200,0,'Save success',data)
    }).cancel(err=>{
        console.log(err);
        responseClient(res);
    });
});

router.post('/update',(req,res)=>{
    const {
        title,
        content,
        time,
        tags,
        isPublish,
        id
    } = req.body;
    Job.update({_id:id},{title,content,time,tags:tags.split(','),isPublish})
        .then(result=>{
            console.log(result);
            responseClient(res,200,0,'Update success',result)
        }).cancel(err=>{
        console.log(err);
        responseClient(res);
    });
});

router.delete('/del',(req,res)=>{
    let id = req.query.id;
    Job.remove({_id:id})
        .then(result=>{
            if(result.result.n === 1){
                responseClient(res,200,0,'Delete success!')
            }else{
                responseClient(res,200,1,'Content not exist');
            }
        }).cancel(err=>{
            responseClient(res);
    })
});

export default router;