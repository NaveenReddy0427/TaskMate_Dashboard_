// import React from 'react';
import { IoIosArrowDown, IoMdSettings } from 'react-icons/io';
import p1 from '../assets/p1.png'
import {Typography, Card, Button } from '@mui/material'; 
import { CiLight } from 'react-icons/ci';
import { MdDashboard, MdOutlineDarkMode } from 'react-icons/md';
import { FaRegCalendarAlt, FaTasks } from 'react-icons/fa';
import { BsEmojiSunglassesFill, BsListTask } from 'react-icons/bs';

const Sidebar = () => {
 
  
  return (
    
      <div>
      <Card elevation={4} sx={{minWidth:'265px',height:'200vh', backgroundColor:'#e6e6e6'}}>
        <div style={{display:'flex', margin:'20px 20px 0px 20px'}}>
          <Typography  style={{fontSize:'2.5rem', fontWeight:"800"}} color={'orange'}>Task</Typography>
          <Typography  style={{fontSize:'2.5rem', fontWeight:"800"}} >mate</Typography>
        </div>
          <Typography style={{marginLeft:"25px", marginTop:"-10px"}}>Focus.Priority.Execute</Typography>

          <Card elevation={3} style={{width:'85%', margin:'25px 10px 10px 10px', borderRadius:"10%", backgroundColor:"#e6e6e6"}}>
            <aside style={{display:'flex'}}>
            <div>
              <Typography><img src={p1} height="50px" width="50px" alt="p1" /></Typography>
            </div>
            <div style={{marginTop:'5px'}}>
              <Typography style={{fontWeight:'600'}}>Irvan Moses<IoIosArrowDown style={{fontWeight:'600'}}/></Typography>
              <Typography style={{fontSize:'0.8rem'}}>irvanmoses10@gmail.com</Typography>
          </div>
            </aside>
          </Card>

                
                <Button variant='outlined' style={{color:'black', width:'90%', margin:'10px',border:'none'}}>Menu <IoIosArrowDown style={{marginLeft:'150px'}}/></Button>
                


                <div style={{display:'flex' ,flexDirection:'column', gap:'10px'}}>
                  <Button variant='outlined' style={{ width:'80%', fontSize:"1rem", marginLeft:'25px', gap:"10px" ,color:'black', border:"none", textTransform:'capitalize'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                  <MdDashboard style={{display:'flex', }} />Overview</Button>

                  <Button variant='outlined' style={{ width:'80%', marginLeft:'20px', gap:"10px", color:'black', border:"none", textTransform:'capitalize'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                  <BsListTask style={{display:'flex', }}/>Task List</Button>

                  <Button variant='outlined' style={{ width:'80%', marginLeft:'45px', gap:"10px", color:'black', border:"none", textTransform:'capitalize'}} onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                  <MdDashboard style={{display:'flex'}} />Project Overview</Button>

                  <Button variant='outlined' style={{ width:'80%', marginLeft:'20px',  color:'black', border:"none", textTransform:'capitalize'}} onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                  <FaRegCalendarAlt  style={{display:'flex', marginRight:"10px"}}/>Calendar</Button>

                  <Button variant='outlined' style={{ width:'80%', marginLeft:'20px', gap:"1px", color:'black', border:"none", textTransform:'capitalize'}} onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                  <IoMdSettings style={{display:'flex', marginRight:"10px"}}/>Settings</Button>
                </div>
                
                <div>
                <Button variant='outlined' style={{color:'black', width:'90%', margin:'10px',border:'none'}}>List <IoIosArrowDown style={{marginLeft:'150px'}}/></Button>
                </div>

                <div style={{display:'flex' ,flexDirection:'column', gap:'10px'}}>
                <Button variant='outlined' style={{ width:'80%', marginLeft:'20px', color:'black', border:"none", textTransform:'capitalize'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                <span style={{display:"flex", marginRight:"10px", fontSize:"15px"}}>😎</span>Personal</Button>

                <Button variant='outlined' style={{ width:'80%', marginLeft:'12px',color:'black', border:"none",
                textTransform:'capitalize'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                <span style={{display:"flex", marginRight:"10px", fontSize:"15px"}}>🎨</span>Design</Button>

                <Button variant='outlined' style={{ width:'80%', marginLeft:'27px',color:'black', border:"none",
                textTransform:'capitalize'}} onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                 <span style={{display:"flex", marginRight:"10px", fontSize:"15px"}}>💻</span>Department</Button>
                
                <Button variant='outlined' style={{ width:'80%', marginLeft:'18px',color:'black', border:"none", textTransform:'capitalize'}} onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                 <span style={{display:"flex", marginRight:"10px", fontSize:"15px"}}>📝</span>Research</Button>
                </div>
                  
                
                <div>
      <header style={{ padding: '20px', textAlign: 'center' }}>
      </header>
      <footer style={{ position: 'fixed', bottom: '20px', left: '20px', display: 'flex', alignItems: 'center' }}>
        <Button variant='contained' style={{ color: 'white', border: 'none', borderRadius: '10px', marginRight: '10px' }} >
          <CiLight />
          Light
        </Button>
        <Button variant='contained' style={{ color: 'white', border: 'none', borderRadius: '10px' }} >
          <MdOutlineDarkMode />
          Dark
        </Button>
      </footer>
    </div>
          
      </Card>
      </div>
    

    
  );
};

export default Sidebar;
