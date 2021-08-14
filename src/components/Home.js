import React, { useEffect, useState } from 'react'
import '../App.css';
import Header from "./Header";
import {SRLWrapper} from 'simple-react-lightbox';


function Home(){

  const [users,setuser]=useState([]);
  const [latest , setlatest] = useState('');
  const [modalIsOpen ,setModalIsOpen] =useState(false);


  async function addNote(search) {
    const newsearch= await search;
      setlatest(newsearch);
  }


  async function getdata(){
    try{
      const keyword=latest;
      const apiKey = '26e63ab8d2aa9c5f19f569c980d892bb';
      const method = 'flickr.photos.search';
      const response=await fetch(`https://api.flickr.com/services/rest/?method=${method}&api_key=${apiKey}&tags=${keyword}&format=json&nojsoncallback=1`);
      const data= await response.json();
      setuser(data.photos.photo);
    }
    catch(err){
      console.log(err);
    } 
  }

  useEffect(()=>{
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[latest])
 
    async function firsttime(){
      try{
        const keyword="tree";
        const apiKey = '26e63ab8d2aa9c5f19f569c980d892bb';
        const method = 'flickr.photos.search';
        const response=await fetch(`https://api.flickr.com/services/rest/?method=${method}&api_key=${apiKey}&tags=${keyword}&format=json&nojsoncallback=1`);
        const data= await response.json();
        setuser(data.photos.photo);
      }
      catch(err){
        console.log(err);
      } 
    } 
  
    useEffect(()=>{
      firsttime();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

   const options={
     settings:{
     }
   }

  return(
    <>
    <Header onAdd={addNote}  />
    <div className="container box">
    <div className="row ">
    { users.map((user) => {
        const farm=user.farm;
        const server=user.server;
        const id=user.id
        const secret=user.secret
        const url='https://farm'+farm+'.staticflickr.com/'+server+'/'+id+'_'+secret+'.jpg'
        return(
          <div className="col col-md-4 col-xs-12 col-sm-6 col-lg-4 images" key={user.id}>
          <SRLWrapper options={options}>
          <a  href={url} ><img  src={url}  srl_gallery_image="true"  /></a>
          </SRLWrapper>
          </div> 
        )
      })}  
    </div>
    </div>
           
     </>
     )
}

export default Home