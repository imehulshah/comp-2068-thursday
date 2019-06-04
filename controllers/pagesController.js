exports.show = (req, res)=>{
    // https://localhost:4000/about

    const path =(req.path ==='/') ? '/home' : req.path;
    //render view
    res.render(`pages${path}`); // view/pages/about

};