function Grid(size){
    // size大小和规格
    this.size=size;
    this.cells=this.empty();
}
Grid.prototype={
    //返回一个空大的矩阵（网格） 二维数组
    empty:function(){
        var cells=[];
        for(let i=0;i<this.size;i++){
            cells[i]=[];
            for(let j=0;j<this.size;j++){
                cells[i].push(null)
            }
        }
        return cells;
    },
    availablecCells(){
        //空位置
        var cells=[];
        for(let i=0;i<this.size;i++){
            for(let j=0;j<this.size;j++){
                if(!this.cells[i][j]){
                    cells.push({
                        x:i,
                        y:j
                    })

                }
            }
        }
        return cells

    },
    cellAvailable(){
        //0||>0
        //!!强转为true || false
        return !!this.availablecCells().length
    },
    //空位置里面找随机挑一个
    randomAvailabelCell(){
        const cells=this.availablecCells()
        return cells[Math.floor(Math.random()*cells.length)]

    },
    inserTile(tile){
        this.cells[tile.x][tile.y]=tile
    }
}
//commonJS
module.exports=Grid;