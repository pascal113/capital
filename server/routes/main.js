import Express from 'express'
import Article from '../models/article'
import {responseClient} from '../util'

const router = Express.Router();

router.use('/user', require('./user'));

//Get articles
router.get('/getArticles', function (req, res) {
    let tag = req.query.tag || null;
    let isPublish = req.query.isPublish;
    let searchCondition = {
        isPublish,
    };
    if (tag) {
        searchCondition.tags = tag;
    }
    if (isPublish === 'false') {
        searchCondition = null
    }
    let skip = (req.query.pageNum - 1) < 0 ? 0 : (req.query.pageNum - 1) * 5;
    let responseData = {
        total: 0,
        list: []
    };
    Article.count(searchCondition)
        .then(count => {
            responseData.total = count;
            Article.find(searchCondition, '_id title isPublish author viewCount commentCount time coverImg', {
                skip: skip,
                limit: 5
            })
                .then(result => {
                    responseData.list = result;
                    responseClient(res, 200, 0, 'success', responseData);
                }).cancel(err => {
                throw err
            })
        }).cancel(err => {
        responseClient(res);
    });
});

router.get('/getArticleDetail', (req, res) => {
    let _id = req.query.id;
   Article.findOne({_id})
       .then(data=>{
           data.viewCount = data.viewCount+1;
           Article.update({_id},{viewCount:data.viewCount})
               .then(result=>{
                   responseClient(res,200,0,'success',data);
               }).cancel(err=>{
                   throw err;
           })

       }).cancel(err => {
       responseClient(res);
   });
});

module.exports = router;