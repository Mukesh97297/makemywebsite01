import React from 'react'
import Rgland from '../images/RG-Land.jpg'
import unitedtool from '../images/United-Tools.jpg'
import ticgroup from '../images/TIC-Group.jpg'
import Sunshine from '../images/Sunshine-Collectables.jpg'
import darbin from '../images/Darebin-Gas.jpg'
import dal from '../images/dal.jpg'
import Coburns from '../images/Coburns-Rise.jpg'
import carrabbas from '../images/Carrabbas-Group.jpg'


function Works() {
    return (
        <div>
            <div className='container-fluid' id='works'>
                <div className='container py-5'>
                    <div className='row'>
                        <div id='heroTag'>
                            <h1>Latest Works</h1>
                        </div>
                    </div>
                    <div className='row py-5'>
                        <div className=" mb-4 screen">
                                <img src={unitedtool} alt=""  />
                                <div className='overlay1'>
                                   United Tools
                                </div>
                           
                        </div>
                        <div className=" screen mb-4">
                            
                                <img src={dal} alt="" className='img-fluid'  />
                                <div className='overlay1'>
                                   Dal
                                </div>
                           
                        </div>
                        <div className=" mb-4 screen">
                           
                                <img src={Coburns} alt="" className='img-fluid' />
                                <div className='overlay1'>
                                   Coburns Rise
                                </div>
                           
                        </div>
                        <div className=" screen mb-4">
                           
                                <img src={Rgland} alt="" className='img-fluid' />
                                <div className='overlay1'>
                                   Rg Land
                                </div>
                        </div>
                        <div className=" screen  mb-4">
                            
                                <img src={Sunshine} alt="" className='img-fluid' />
                                <div className='overlay1'>
                                   Sunshine Collactables
                                </div>
                            
                        </div>
                        <div className=" screen mb-4">
                           
                                <img src={ticgroup} alt="" className='img-fluid' />
                                <div className='overlay1'>
                                   Tic Group
                                </div>
                            
                        </div>
                        <div className=" screen mb-4">
                           
                                <img src={carrabbas} alt="" className='img-fluid' />
                                <div className='overlay1'>
                                   Carrabba's Group
                                </div>
                            
                        </div>
                        <div className=" screen mb-4">
                            
                                <img src={darbin} alt="" className='img-fluid' />
                                <div className='overlay1'>
                                   Darbin Gas
                                </div>
                          
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div>
                            <button className='btn view-btn'>View All Pojects</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works