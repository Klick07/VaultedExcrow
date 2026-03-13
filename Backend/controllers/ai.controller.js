exports.askAI = async (req,res,next)=>{

    console.log("AI endpoint hit");

    try{

        const {prompt} = req.body;

        console.log("Prompt:",prompt);

        const result = await aiService.askAI(prompt);

        res.json({
            success:true,
            data:result
        });

    }catch(err){
        console.log("AI ERROR:",err);
        next(err);
    }

};