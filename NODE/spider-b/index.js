const url='https://movie.douban.com/top250'
const https=require('https')
const cheerio=require('cheerio')
const imageDir='./math/'
const fs=require('fs')
const path=require('path')
const movieDir='./doubanmoviesData/'
function doSpider(start){
    https.get(url+`?start=${start}`,(res)=>{
        //源源不断收到数据
        let html=''
        res.on('data',(chunk)=>{
            html+=chunk
        });
        //完毕
        res.on('end',()=>{
            console.log(html)
            const $=cheerio.load(html)
            let movies=[];
            $('.item').each(function(){
                //this 限制 第一个参数的选择区域  li
                //默认全局  第一个电影的图片   
                const title=$('.info .title',this).text();
                const picUrl=$('.pic img',this).attr('src');
                const star=$('.star .rating_num',this).text();
                const link=$('.hd a',this).attr('href')
                const movie=[
                    title,
                    star,
                    link,
                    picUrl
                ]
                movies.push(movie);
                
                // console.log(picUrl)
                downloadImage(picUrl)
            })
            saveLocalData(start/25,movies);
        })
    })
}

function saveLocalData(pageNum,movies){

    fs.writeFile(movieDir+`data${pageNum}.json`,JSON.stringify(movies),(err)=>{
        if(!err){
            console.log('数据保存成功')
        }
    })

}
function downloadImage(picUrl){
    https.get(picUrl,(res)=>{
        let data=''
        res.setEncoding('binary');
        res.on('data',(chunk)=>{
            data+=chunk
        });
        res.on('end',()=>{
            const filename=path.basename(picUrl)
            fs.writeFile(imageDir+filename,data,'binary',()=>{

                (err)=>{
                    console.log(err);
                    if(!err){
                        console.log(filename,'保存成功')
                    }
                }
            })

        })
    })

}
const total=250;
let start=0;
while(start<total){
    doSpider(start);
    start+=25
}