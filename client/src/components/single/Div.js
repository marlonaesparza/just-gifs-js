import styled from 'styled-components';


const Div = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  text-align: center;
  
  ${
    ({ homePage, focusPage, favoritesPage, friendsPage, signupPage, loginPage, pageHeader, gifsCont, pageMenu, connectionsCont, imgCont, gifDetailsAndActions, focusGifCont }) => 
      homePage || focusPage || favoritesPage || friendsPage || signupPage || loginPage ?
      ` 
        overflow: unset;
        display: grid;
        gap: 0;
        grid-template-rows: 1fr 11fr;
      ` :
      pageHeader ?
      `
        overflow: unset;
        display: grid;
        gap: 0;
        grid-template-columns: 6fr 6fr;
        justify-content: center;
        align-content: center;
      ` :
      gifsCont || connectionsCont ?
      `
        background-color: rgba(234, 233, 233, 1);
        height: 75vh;
        overflow: auto;
        margin: .7rem auto;
        display: grid;
        gap: .4rem;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, 1fr);

        @media (max-width: 790px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(6, 1fr);
        }
        
        @media (max-width: 615px) {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(12, 1fr);
        }

        @media (min-width: 960px) {
          width: 70%
        }
      ` :
      pageMenu ?
      `
        display: flex;
        width: 100%;
        top: 3.4rem;
        position: fixed;
        height: auto;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
        background-color: #ffffff;
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
        justify-content: center;
        align-content: center;
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
