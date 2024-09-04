import React from 'react'

function Empty() {
  return (
    <form className="tableForm" onSubmit={handleFirmSubmit}>
<h3>Add Firm</h3>
    <label >Firm Name</label>
    <input type="text" name='firmName' value={firmName} onChange={(e)=>setFirmName(e.target.value)}/>
    <label >Area</label>
    <input type="text"  name='area' value={area} onChange={(e)=>setArea(e.target.value)} />
    {/* <label >Category</label>
    <input type="text"  /> */}
<div className="checkInp">
<label >Category</label>
<div className="inputsContainer">
<div className="checboxContainer">
      <label>Veg</label>
      <input type="checkbox" checked ={category.includes('veg')}  value="veg" onChange={handleCategoryChange}/>
    </div>
    <div className="checboxContainer">
      <label>Non-Veg</label>
      <input type="checkbox" checked ={category.includes('non-veg')} value="non-veg" onChange={handleCategoryChange}/>
    </div>
</div>

</div>
<label >Offer</label>
    <input type="text" name='offer' value={offer} onChange={(e)=>setOffer(e.target.value)}/>
<div className="checkInp">
<label >Region</label>
<div className="inputsContainer">
<div className="regBoxContainer">
      <label>South Indian</label>
      <input type="checkbox" value="south-indian"   checked ={region.includes('south-indian')}
      onChange={handleRegionChange}
      />
    </div>
    <div className="regBoxContainer">
      <label>North-Indian</label>
      <input type="checkbox" value="north-indian"  checked ={region.includes('north-indian')}
      onChange={handleRegionChange}
      />
    </div>
    <div className="regBoxContainer">
      <label>Chinese</label>
      <input type="checkbox" value="chinese" checked ={region.includes('chinese')}
      onChange={handleRegionChange}
      />
    </div>
    <div className="regBoxContainer">
      <label>Bakery</label>
      <input type="checkbox" value="bakery" checked ={region.includes('bakery')}
      onChange={handleRegionChange}
      />
    </div>
</div>

</div>
   
    <label >Firm Image</label>
    <input type="file" onChange={handleImageUpload} />
    <br />
<div className="btnSubmit">
<button type='submit'>Submit</button>
</div>
</form>
 

  )
}

export default Empty

 