import React from 'react';
import '../firstyear/firstyear.css';
import '../footer/footer.css'

import Physics1 from '../../pdf/PhysicsLab/Carey-Foster Bridge(20212028)_watermark.pdf';
import Physics2 from '../../pdf/PhysicsLab/Differaction grating(20212028)_watermark.pdf';
import Physics3 from '../../pdf/PhysicsLab/Exp9 Stewart and gee experiment(20212028)_watermark.pdf';
import Physics4 from '../../pdf/PhysicsLab/Four Probe(20212028)_watermark.pdf';
import Physics5 from '../../pdf/PhysicsLab/Fresnels biprism(20212028)_watermark.pdf';
import Physics6 from '../../pdf/PhysicsLab/Half shade polarimeter (20212028)_watermark.pdf';
import Physics7 from '../../pdf/PhysicsLab/Helmholtz coil(20212028)_watermark.pdf';
import Physics8 from "../../pdf/PhysicsLab/Newton's ring(20212028)_watermark.pdf";
import Physics9 from '../../pdf/PhysicsLab/Nodal slide(20212028)_watermark.pdf';
import Physics10 from '../../pdf/PhysicsLab/Resolving power of telescope (20212028)_watermark.pdf';
import Physics11 from '../../pdf/PhysicsLab/sextant (20212028)_watermark.pdf';
import Physics12 from '../../pdf/PhysicsLab/Thermal conductivity(20212028)_watermark.pdf';


import WorkshopLab1 from '../../pdf/workshoplab/WORKSHOP(20212028)_watermark.pdf';
import WorkshopLab2 from '../../pdf/workshoplab/Carpentary_Exp 1_watermark.pdf';
import WorkshopLab3 from '../../pdf/workshoplab/Blacksmithy(20212028)_watermark.pdf';
import WorkshopLab4 from '../../pdf/workshoplab/Fitting shop(20212028)_watermark.pdf';
import WorkshopLab5 from '../../pdf/workshoplab/Foundry(20212028)_watermark.pdf';
import WorkshopLab6 from '../../pdf/workshoplab/Machine shop(20212028)_watermark.pdf';
import WorkshopLab7 from '../../pdf/workshoplab/sheet metal work(20212028)_watermark.pdf';
import WorkshopLab8 from '../../pdf/workshoplab/Welding (20212028)_watermark.pdf';
import WorkshopLabBook from '../../pdf/workshoplab/Workshop Lab manual- MNNIT_watermark.pdf';

import DEL from '../../pdf/Snehashish (Electronics lab) _watermark.pdf';
import POE from '../../pdf/poe lab_watermark.pdf'; 

const firstyearlab = () => {
  return (
    <div className='all'>

            <div id='body_footer'>
                <div className='material'>
                    <div className='parallel'>

                        <ul id="navlist" >



                            <div>
                                <li >Physics
                                <ul id="sub_navlist">
                                        <a download href={Physics1}><li>Carey Foster Bridge</li></a>
                                        <a download href={Physics2}><li>Differaction Grating</li></a>
                                        <a download href={Physics3}><li>Stewart Gee Experiment</li></a>
                                        <a download href={Physics4}><li>Four Probe</li></a>
                                        <a download href={Physics5}><li>Fresnels Biprism</li></a>
                                        <a download href={Physics6}><li>Half Shade Polarimeter</li></a>
                                        <a download href={Physics7}><li>Helmholtz Coil</li></a>
                                        <a download href={Physics8}><li>Newton's Ring</li></a>
                                        <a download href={Physics9}><li>Nodal Slide</li></a>
                                        <a download href={Physics10}><li>Resolving Power</li></a>
                                        <a download href={Physics11}><li>Sextant</li></a>
                                        <a download href={Physics12}><li>Thermal Conductivity</li></a>
                                    </ul>
                                </li>
                            </div>

                            <div>
                                <li>Workshop
                                <ul id="sub_navlist">
                                        <a download href={WorkshopLab1}><li>Carpentary1</li></a>
                                        <a download href={WorkshopLab2}><li>Carpentary2</li></a>
                                        <a download href={WorkshopLab3}><li>Blacksmithy</li></a>
                                        <a download href={WorkshopLab4}><li>Fitting Shop</li></a>
                                        <a download href={WorkshopLab5}><li>Foundary</li></a>
                                        <a download href={WorkshopLab6}><li>Machine Shop</li></a>
                                        <a download href={WorkshopLab7}><li>Sheet Metal Working</li></a>
                                        <a download href={WorkshopLab8}><li>Welding</li></a>
                                        <a download href={WorkshopLabBook}><li id='book'>FULL MANUAL</li></a>
                                </ul>

                                    
                                </li>
                            </div>

                            <div>
                                <li>Basic Electronics Lab
                                    
                            <ul id="sub_navlist">
                                <a download href={POE}><li id='book'>FULL MANUAL</li></a>
                                </ul>   
                                </li>
                                
                            </div>

                            <div>
                                <li>Digital Electronics Lab
                                    
                            <ul id="sub_navlist">
                                <a download href={DEL}><li id='book'>FULL MANUAL</li></a>
                                </ul>
                                </li>
                            </div>

                            <div>
                                <li>Principle of Electronics
                            <ul id="sub_navlist">
                                <a download href={POE}><li id='book'>FULL MANUAL</li></a>
                                </ul>
                                </li>
                            </div>

                        </ul>
                    </div>


                </div>


                <div class="row copyright">
                    <div class="footer-menu">

                    </div>
                    <p>Copyright &copy; 2023Pendown. || All rights reserved</p>
                </div>
            </div>

        </div>
  )
}

export default firstyearlab
