import React from 'react'

 const Categories = ({value, onChangeCategory}) => {
    const categories = ['все','мясные','вегетарианские','гриль','острые','закрытые'];
  return (
<div className='categories'>
    <ul>
        {
            categories.map((categoryName, index)=>(
                <li
                key={index}
                onClick={()=> onChangeCategory(index)}
                className={value===index? 'active': ''}>
                    {categoryName}</li>
            ))
        }
    </ul>
</div>
  )
}
export default Categories;
