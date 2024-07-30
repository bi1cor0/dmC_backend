import express from 'express'
import Characters from '../models/Characters.mjs'
const router = express.Router()

//Routes
router.get('/', async (req, res)=>{
    try{
        //Get all data to save to a variable
        const allChars = await Characters.find({})
        //Send data to the front end
        res.json(allChars)
    } catch(err){
        console.error(err)
        res.status(500).json({msg: 'Server Error'})
    }}
)

router.post('/', async (req, res) =>{
    try{
        //variable to create a new Characters entry in the db
        let newChar = new Characters(req.body)
        //Save the new Characters entry
        await newChar.save()
        //Display what the new character entry is
        res.json(newChar)
    } catch(err){
        console.error(err)
        res.status(500).json({msg: 'Server Error'})
    }
})

router.patch('/:id', async (req, res) =>{ //patch route for updating character objects. 
    try{
        const updateChar = await Characters.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updateChar)
    } catch(err){
        console.error(err)
        res.status(500).json({msg: 'Server Error'})
    }
})

router.delete('/:id', async (req, res) =>{ //delete route for deleting character objects. 
    try{
        await Characters.findByIdAndDelete(req.params.id, req.body, {new: true})
        res.status(200).json({msg: 'Item Deleted'})
    } catch(err){
        console.error(err)
        res.status(500).json({msg: 'Server Error'})
    }
})

export default router;