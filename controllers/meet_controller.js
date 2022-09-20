const meets = require('express').Router()
const db = require('../models')
const { Meet } = db 


meets.get('/', async (req, res) => {
    try {
        const foundMeets = await Band.findAll()
        res.status(200).json(foundMeets)
    } catch (error) {
        res.status(500).json(error)
    }
})

meets.get('/:id', async (req,res) => {
    try {
        const foundMeets = await Meet.findOne({
            where: {meet_greet_id: req.params.id}
        })
        res.status(200).json(foundMeets)
    } catch (error) {
        res.status(500).json(error)
    }
})

meets.post('/', async (req, res) => {
    try {
        const newMeet = await Meet.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newMeet
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A BAND
meets.put('/:id', async (req, res) => {
    try {
        const updatedMeets  = await Meet.update(req.body, {
            where: {
                meet_greet_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedMeets} meet(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
meets.delete('/:id', async (req, res) => {
    try {
        const deletedMeets = await Meet.destroy({
            where: {
                meet_greet_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedMeets} meet(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})





// EXPORT
module.exports = meets