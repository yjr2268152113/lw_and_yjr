var express=require('express')
var app=express()
var port=process.env.PORT||8080;
app.listen(port)
var router=express.Router();
var bodyParser=require('body-parser')
app.get('/',function(req,res){
    res.send('<h1>hello</h1>')

})
app.use('/home',router)
router.get('/:name',function(req,res){
    res.send('<h1>qq'+req.params.name+'</h1>')
})
app.use(bodyParser.urlencoded({
    extended:true
}))
router.post('/',function(req,res){
    var naem=req.body.name;
    res.json({message:'hello'+name})
})
console.log('magic happens on port'+port)

