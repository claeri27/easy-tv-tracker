import React from 'react'
import styled from 'styled-components';
import axios from 'axios'

const WelcomeContainer = styled.div`
  display: flex;
  background: grey;
  min-height: 500px;
`;

const Header = styled.h3`
`;

const ShowsContainer = styled.div`
`;

const TestButton = styled.button`
`;

const Welcome = () => {
  const PopularShows = async () => {
    const { data } = await axios(`https://www.episodate.com/api/most-popular?page=1`)
    // const { tv_shows } = data
    // const showList = tv_shows.map(({
    //   name,
    //   start_date: startDate,
    //   end_date: endDate,
    //   country,
    //   network,
    //   image_thumbnail_path: imageThumbnailPath,
    //   status,
    // }) => {
    //   return {
    //     name,
    //     startDate,
    //     endDate,
    //     country,
    //     network,
    //     status,
    //     imageThumbnailPath,
    //   }
    // })
    console.log(data);
  }

  return <WelcomeContainer>
    <Header>Keep track of all your favorite TV shows!</Header>
    <ShowsContainer>
      <TestButton onClick={() => PopularShows()}>TESTSHOWS</TestButton>
    </ShowsContainer>
  </WelcomeContainer>
}

export default Welcome