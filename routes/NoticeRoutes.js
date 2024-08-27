
import express from 'express'
import {
    createnotice,
    getAllNotice,
} from '../controllers/NoticeController.js'



const router =express.Router()
router.post('/',createnotice)
router.get('/all',getAllNotice)


export default router