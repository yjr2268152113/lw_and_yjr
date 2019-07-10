import React, { Component } from 'react';
let generId = 0
class DynamicFiled extends Component {
    state = {
        data: [
            { name: 'name1', age: 18, id: 0 },
        ]
    }
    handleValueChange = (key, value, id) => {
        //不可变数据
        let data = this.state.data.slice(0)
        let index = data.findIndex((item) => item.id === id)
        data[index][key] = value
        this.setState({
            data
        })
    }
    handleDelete = (id) => {
        let data = this.state.data.slice(0)
        let index = data.findIndex((item) => item.id === id)
        data.splice(index, 1)
        this.setState({
            data
        })
    }
    handleAdd = () => {
        let data = this.state.data.slice(0)
        generId++;
        data.push({
            name:'', age: null, id: generId
        })
        //push返回一个数组长度
        this.setState({
            data
        })
    }
    render() {
        const { data } = this.state
        return (
            <>
                {data.map((filedData, i) => {
                    return (
                        <Filed key={filedData.id} filedData={filedData}

                            onFiledValueChange={this.handleValueChange}
                            onFiledDelete={this.handleDelete} />
                    )
                })}
                <br />
                <button onClick={this.handleAdd}>添加</button>
                <br />
                <button>提交</button>
            </>
        )
    }
}
class Filed extends Component {
    state = {}
    handleFiledChangeName = (e) => {
        const name = e.target.value
        const id = parseInt(e.target.dataset.id)
        const { onFiledValueChange } = this.props
        onFiledValueChange('name', name, id)
    }
    handleFiledChangeAge = (e) => {
        const age = e.target.value
        const id = parseInt(e.target.dataset.id)
        const { onFiledValueChange } = this.props
        onFiledValueChange('age', age, id)

    }
    handleDelete = (e) => {
        const id = parseInt(e.target.dataset.id)
        const { onFiledDelete } = this.props
        onFiledDelete(id)
    }
    render() {
        const { filedData } = this.props
        const { age, name } = filedData
        return (
            <div>
                姓名：<input type="text"
                    value={name}
                    onChange={this.handleFiledChangeName}
                    data-id={filedData.id} />
                年龄：<input type="number"
                    value={age}
                    onChange={this.handleFiledChangeAge}
                    data-id={filedData.id} />
                <button onClick={this.handleDelete}
                    data-id={filedData.id}>删除</button>

            </div>
        )
    }
}
export default DynamicFiled