// 数组是最廉价的数据结构
let enc_qq=[6,3,1,7,5,8,9,2,4],
// console.log(enc_qq.length,enc_qq[0]);
// enc_qq.shift();

// enc_qq.unshift(0);
// console.log(enc_qq);
// enc_qq.pop();
// enc_qq.push(0);

// console.log(enc_qq);
qq=[],
head=0,    //队首指针    要移除的元素位置
tail=9;     //队尾指针    要加入的元素位置
     while(head<tail)     
{
          qq.push(enc_qq[head]);
      head++;               //第一个数移除
      enc_qq[tail]=enc_qq[head];
      tail++;
      head++; 
     }
