import React from 'react';
import styled from 'styled-components';
import { Grid, Avatar, Typography } from '@material-ui/core';

import { FaGithub, FaLinkedin, FaDribbble, FaBehance } from 'react-icons/fa';

import Background from "../../components/Background";

export default function Main() {

  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })

  const Container = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh auto;
  height: calc(var(--vh, 1vh) * 100);
`
  const UserDetails = styled(Grid)`
  display: flex;
  justify-content: center;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);

  .avatar {
    width: 5em;
    height: 5em;
  }

  @media only screen and (max-width: 1280px) {
    background-color: transparent;
  }
`
  const ProfilePicture = styled(Grid)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 20%;
`
  const UserName = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
`
  const Status = styled(Grid)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 10%;
  text-align: center;
`
  const About = styled(Grid)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 25%;
`

const Skills = styled(Grid)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 35%;
`
  const Main = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`
  const Content = styled(Grid)`
  height: 100% auto;
  display: flex;
  align-items: center;
  
  .band {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1em;
    
    display: grid;
    
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;

  }
  
  @media only screen and (min-width: 500px) {
    .band {
      grid-template-columns: 1fr 1fr;
    }  
  }
  
  @media only screen and (min-width: 850px) {
    .band {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  
  .card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    text-decoration: none;
    color: #444;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    min-height: 80%;
  
    border-radius: 10px;
    
    position: relative;
    top: 0;
    transition: all .1s ease-in;
  }
  
  .card:hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0,0,0,0.2);
  }
  
  .card article {
    padding: 20px;
  }
  
  .card .thumb {
    padding-bottom: 60%;
    background-size: cover;
    background-position: center center;
  }
  
  .card h1 {
    font-size: 20px;
    margin-bottom: 1vh;
    color: #009688;
  }
  
  .card p { 
    line-height: 1.4;
  }
  
  .card span {
    font-size: 12px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    letter-spacing: .05em;
    margin: 2em 0 0 0;
  }

  .card article {
    padding: 20px;
    flex: 1;
     
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card p { 
    flex: 1;
    line-height: 1.4;
  }
`

  return (
    <>
      <Background />
      <Container container item xs={12} sm={12} md={12} lg={12}>

        <UserDetails container item xs={12} sm={12} md={12} lg={3}>
          <ProfilePicture container item xs={11} sm={11} md={11} lg={11}>
            <Avatar alt="Brandow Buenos" className="avatar" src="https://avatars3.githubusercontent.com/u/52222495?s=400&u=bc8eea80b72ed91315f15410654712b8ad20285a&v=4" />
          </ProfilePicture>
          <UserName container item xs={11} sm={11} md={11} lg={11}>
            <i>Brandow Buenos</i>
          </UserName>
          <Status container item xs={11} sm={11} md={11} lg={11}>
            <h4>
              Graduating in Software Engineering <br />at Federal University of Pampa
          </h4>
          </Status>

          <About container item xs={11} sm={11} md={11} lg={11}>
            <div>
              <Typography variant="overline" display="block" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" gutterBottom>
                <p>Use things, love people. Not the other way around.</p>
                <p> Hello world!</p>
                <p>I am Software Engineering Student from Universidade Federal do Pampa and eternal Full Stack apprentice.</p>
              </Typography>
            </div>
          </About>

          <Skills container item xs={11} sm={11} md={11} lg={11}>
            <div>
              <Typography variant="overline" display="block" gutterBottom>
                Skills
              </Typography>
              <Typography variant="body1" gutterBottom>
                <p>UI / UX</p>
                <p>Design</p>
                <p>Java</p>
                <p>Javascript (ReactJS)</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Git</p>
                <p>CSS</p>
              </Typography>
              </div>
          </Skills>
        </UserDetails>

        <Main container item xs={11} sm={11} md={11} lg={9}>
          <Content container item xs={12} sm={12} md={12} lg={11}>
            <div className="band">
              <div className="item-1">
                <a href="https://github.com/BrandowBuenos" className="card">
                  <article>
                    <h1 style={{ color: "rgb(27,31,34)" }}>Github</h1>
                    <p>Code Jobs</p>
                    <span><FaGithub size={'1.5em'}/></span>
                  </article>
                </a>
              </div>
              <div className="item-2">
                <a href="https://www.linkedin.com/in/brandowbuenos" className="card">
                  <article>
                    <h1 style={{ color: "rgb(12,98,166)" }}>Linkedin</h1>
                    <p>Business profile</p>
                    <span><FaLinkedin size={'1.5em'}/></span>
                  </article>
                </a>
              </div>
              <div className="item-3">
                <a href="https://dribbble.com/BrandowBuenos" className="card">
                  <article>
                    <h1 style={{ color: "#ea4c89" }}>Dribbble</h1>
                    <p>UI/UX Projects</p>
                    <span><FaDribbble size={'1.5em'} /></span>
                  </article>
                </a>
              </div>
              <div className="item-4">
                <a href="https://www.behance.net/brandowbuenos/" className="card">
                  <article>
                    <h1 style={{ color: "#2b2b2b" }}>Behance</h1>
                    <p>UI/UX Projects</p>
                    <span><FaBehance size={'1.5em'}/></span>
                  </article>
                </a>
              </div>
            </div>
          </Content>
        </Main>
      </Container>

    </>
  );
}

