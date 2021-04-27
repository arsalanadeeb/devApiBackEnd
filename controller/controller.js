/**
 * @desc get list of all bootcamp
 * @access public
 */
exports.getBootCamps=(req,res,next)=>{
    res.json(
        {
            success: true,
            result: 'list of all bootcamps',
            
        }
    );
}

/**
 * @desc to create a bootcamp
 * @access public
 */
 exports.createBootCamp=(req,res,next)=>{
    res.json({
        success: true,
        result: 'new bootcamp got created'
    });
}

/**
 * @desc to update a bootcamp bootcamp
 * @access public
 */
 exports.updateBootCamp=(req,res,next)=>{
    res.json({
        success: true,
        result: `to be update bootcamp ${req.params.id}`
    });
}

/**
 * @desc to delete a bootcamp
 * @access public
 */
 exports.deleteBootCamp=(req,res,next)=>{
    res.json({
        success: true,
        result: `to be deleted bootcamp wit ID ${req.params.id}`,
    });
}