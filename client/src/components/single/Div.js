import styled from 'styled-components';


const Div = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  
  ${
    ({ homePage, focusPage, favoritesPage, friendsPage, signupPage, loginPage, pageHeader, gifsCont, pageMenu, connectionsCont, imgCont, gifDetailsAndActions, focusGifCont }) => 
      homePage || focusPage || favoritesPage || friendsPage || signupPage || loginPage ?
      ` 
        // height: 100%;
        display: grid;
        gap: 0;
        grid-template-rows: 1fr 11fr;
      ` :
      pageHeader ?
      `
        display: grid;
        gap: 0;
        grid-template-columns: 6fr 6fr;
      ` :
      gifsCont || connectionsCont ?
      `
        margin: .7rem auto;
        display: grid;
        gap: .4rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(4, minmax(0, 1fr));

        @media (max-width: 960px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: .5em;
            background-color: white;
        }
        
        @media (max-width: 615px) {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: .5em;
            background-color: white;
        }
      ` :
      pageMenu ?
      `
        position: fixed;
        top: 3.5rem;
        right: 3em;
        width: 30%;
        height: auto;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
        background-color: #ffffff;
        display: flex;
      ` :
      imgCont ?
      `
        justify-content: center;
        align-content: center;
      ` :  
      gifDetailsAndActions ?
      `
        display: grid;
        gap: 0;
        grid-template-columns: 8fr 4fr;
      ` :
      focusGifCont ?
      `
        height: 90%;
        width: 95%;
        margin: .7rem auto;
      ` :
      null
  }
`;


export default Div;
