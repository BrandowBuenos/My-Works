import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Background from "../../assets/img/png/background.png";

export default function Main() {

  const Container = styled(Grid)`
    background-color: #F1F1F1;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    height:100vh;
    font-size: larger;
  `;

  const Card = styled(Grid)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const ProfilePictureContent = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;

    img {
      border-radius:50%;
      width:15vh;
    }
  `;

  const UserDescription = styled(Grid)`
    display: flex;
    align-items: flex-start;
    height: 10vh;
  `;

  const SocialNetworks = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
    height:10vh;
  `;

  const Networks = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Link = styled.a`
    text-decoration: none;
    color: #333;
    font-size:20vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;


  return (
    <>
      <Container item xs={12} sm={12} md={12} lg={12}>
        <Card container item xs={12} sm={12} md={12} lg={12}>
          <ProfilePictureContent item xs={11} sm={2} md={2} lg={2}>
            <img src='https://avatars3.githubusercontent.com/u/52222495?s=400&u=bc8eea80b72ed91315f15410654712b8ad20285a&v=4' alt="" />
          </ProfilePictureContent>
          <UserDescription container item xs={11} sm={6} md={4} lg={4}>
            <div>
              <i>Brandow Buenos Aires Madeira</i><br />
              <h4>
                Graduating in Software Engineering at Federal University of Pampa
               </h4>
            </div>
          </UserDescription>

          <SocialNetworks container item xs={11} sm={11} md={11} lg={4}>
            <Link href="https://github.com/BrandowBuenos"><Networks item xs={2} sm={2} md={2} lg={2}><FaGithub /></Networks></Link>
            <Link href="https://www.linkedin.com/in/brandowbuenos/"><Networks item xs={2} sm={2} md={2} lg={2}><FaLinkedin /></Networks></Link>
          </SocialNetworks>
        </Card>
      </Container>
    </>
  );
}

var availableScrolHeight = document.body.scrollHeight;
window.scrollTo(0, availableScrolHeight);
