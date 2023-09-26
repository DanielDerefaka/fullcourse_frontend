import React from 'react'

const CatFilter = () => {
    return (
        <div>
            <form action="" className='row pt-2 shadow-sm rounded mt-3 mb-4' style={{background: '#fafafa'}}>
                <p><b>Filter by Category</b></p>
                <div className="col-sm-10 form-group">
                    <select name="" id="" className="form-control">
                        <option value="">Category</option>
                    </select>
                </div>
                <div className="col-sm-2 form-group">
                    <input type="submit" value="Filter" className='btn btn-success'/>
                </div>
            </form>
        </div>
    )
}

export default CatFilter