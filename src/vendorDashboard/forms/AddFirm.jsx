import React from 'react'
import { useState } from 'react'
import {API_URL} from '../data/apiPath'
import { SlCloudUpload } from "react-icons/sl";


 function AddFirm({firmIdPresent}) {
  const [firmName,setFirmName] = useState("");
  const [area,setArea] = useState("");
  const [category,setCategory] = useState([]);
  const [region,setRegion] = useState([]);
  const [offer,setOffer] = useState("");
  const [file,setFile] = useState(null);

  const handleCategoryChange = (event) =>{
    const value = event.target.value;
    if(category.includes(value)){
      setCategory(category.filter((item)=> item !== value))
    }
    else{
      setCategory([...category,value])
    }
  }
  
  const handleRegionChange = (event) =>{
    const value = event.target.value;
    if(region.includes(value)){
      setRegion(region.filter((item)=> item !== value))
    }
    else{
      setRegion([...region,value])
    }
  } 
  const handleImageUpload =(event)=>{
    const selectedImage = event.target.files[0];
    setFile(selectedImage)
  }
  

  const handleFirmSubmit = async (e) => {
    e.preventDefault();

    try {
        const loginToken = localStorage.getItem('loginToken');
        if (!loginToken) {
            console.error("User Not Authenticated");
            return;  
        }

        const formData = new FormData();  
        formData.append('firmName', firmName);
        formData.append('area', area);
        formData.append('offer', offer);
        formData.append('image', file);
        category.forEach((value) => {
            formData.append('category', value);
        });
        region.forEach((value) => {
            formData.append('region', value);
        });

        const response = await fetch(`${API_URL}/firm/add-firm`, {
            method: 'POST',
            headers: {
                'token': loginToken
            },
            body: formData
        });

        const data = await response.json(); // Correctly handle the response
        // console.log("data:",data);
        if (response.ok) {
            console.log("data:",data);
            setFirmName("")
            setArea("")
            setCategory([])
            setRegion([])
            setOffer("")
            setFile(null)
            alert("Firm Added Successfully");

        }else if(data.message === "Vendor can have only one Firm "){
          alert('Firm Exist 🥣.only 1 firm can be added')         
         }
         else{
          alert('Failed to add firm')
         }
        // console.log("This is firmID",data.firmId);
         const mango = data.firmId;  
        // console.log(mango)
        localStorage.setItem('firmId',data.firmId) 
          firmIdPresent()
        } catch (error) {
          alert("Exist Firm Here Already");
          console.error("Failed to Add Firm", error);
    }
};
/* const firmSubmit = () =>{
  const firmId = localStorage.getItem('firmId');
  if(!firmId){
    setShowFirm(false)
    console.log("firmSubmit clicked")  
    }} */
 

  return (
    <div className="firmSection">
         <form className="tableForm" onSubmit={handleFirmSubmit}>
            <div className='addfirmCompany'>Add Firm</div>
            <div className='firmNameAreaBox'>
                 <div className='firmNameLable'>
                <label>Firm Name :</label>
                <input required type="text" name='firmName' value={firmName}  onChange={(e)=>setFirmName(e.target.value)} placeholder='Name'/>
                </div>
                <div className='area'>
                <label>Area :</label>
                <input  type="text" name='area' value={area} required onChange={(e)=>setArea(e.target.value)} placeholder='Area'/>
                </div>
            </div> 

            <div className="vegNonVegRegionBox">
            <div className="vegNonVegBox">
              <label>Category :</label>
              <div className="inputContainers">
              <div  className="checkboxcontainer">
                <input type="checkbox" value="veg" checked ={category.includes('veg')} onChange = {handleCategoryChange}  />
                <label>VEG</label>
              </div>
              <div className="checkboxcontainer">
                <input type="checkbox" value="non-veg" checked ={category.includes('non-veg')} onChange = {handleCategoryChange}  />
                <label>NON-VEG</label>
              </div>
              </div>
            </div>
        
            <div className="RegionBox">
              <label>Region :</label>
              <div className="RegionBoxCheckboxcontainer">
              <div className="checkboxcontainer">
                <input type="checkbox" value="south-india" checked = {region.includes('south-india')} onChange= {handleRegionChange} />
                <label>South-Indian</label>
              </div>
              <div className="checkboxcontainer">
                <input type="checkbox" value="north-india" checked = {region.includes('north-india')} onChange = {handleRegionChange} />
                <label>North-Indian</label>
              </div>
              <br />
              <div className="checkboxcontainer">
                <input type="checkbox" value="chinese" checked = {region.includes('chinese')} onChange = {handleRegionChange} />
                <label>Chines</label>
              </div>
              <div className="checkboxcontainerBakery">
                <input type="checkbox" value="bakery" checked = {region.includes('bakery')} onChange = {handleRegionChange}  />
                <label>Bakery</label>
              </div>
            </div>
            </div>
            </div>
            <div className='offersBox'>
            <label>Offer :</label>
            <input required type="text" name='offer'  value={offer}  placeholder='Offers'  onChange={(e)=>setOffer(e.target.value)} />
            </div>
            <div className='firmImageBox'>
            <label>Firm Image :</label>
             <input required type="file" onChange={handleImageUpload}/>
             <div className='uploadImg'>
         <SlCloudUpload  className='firmImg'/>
        </div>
             </div>
            <div className="firmBtnSubmit">
                <button   type='submit'>
                    SUBMIT
                </button>
            </div>
         </form>
    </div>
  )
}

export default AddFirm

/* manoj24@gmail.com
ssmanoj24 */