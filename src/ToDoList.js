import React, { useState } from 'react'

function ToDoList() {
    const [activity, setActivity] = useState("")
    const [listData, setListData] = useState([])
    function addActivity(){
            // setListData([...listData, activity])
            // console.log(listData)
            setListData((listData)=>{
                const updatedList = [...listData, activity]
                console.log(updatedList)
                setActivity('');
                return updatedList
            })
       
    }
    function eraseActivity(i){
        const updatedListData = listData.filter((elem, id)=>{
            return i!=id;
        })
        setListData(updatedListData);

}
function eraseAll(){
    setListData([])
}
    return (
        <>
            <div className='container'>
                <div className='header'>To Do List</div>
                <input type='text' placeholder='Add activity' value={activity} onChange={(e) => setActivity(e.target.value)}/>
                <button onClick={addActivity}> Add</button>
                <p className='list-header'>Your List goes here!!</p>
                {listData!=[] && listData.map((data, i)=>{
                    return(<>
                        <p key={i}>
                            <div className='list-data'>{data}</div>
                            <div className='button-position'><button onClick={()=>eraseActivity(i)}>Erase</button></div>
                            
                            </p> 
                    </>)
                })}
                <div className='btn-erase'>
                {listData.length>=1 && 
                <button onClick={eraseAll}>Erase All</button>}
                </div>
            </div>
        </>
    )
}

export default ToDoList
