'use strict'
const env='dev'
const defaultAlertMessage='卓威就是个弟弟，服务器崩了'
const defaulShareText={
    en:"ikcampy英语-学英语口语听力四六级"
}
const defaulBarTitle={
    en:'ikcamp英语学习'
}
const defaultImg = {
    articleImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png',
    coverImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
  };
const core={
    env:"env",
    defaultAlertMessage:defaultAlertMessage,
    defaulShareText:defaulShareText['en'],
    defaulBarTitle:defaulBarTitle['en'],
    isDev:env==='dev',
    isProduction:env==='production',
} 
export default core;


