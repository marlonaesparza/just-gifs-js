import styled from 'styled-components';


const Div = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  text-align: center;
  
  ${
    ({ homePage, focusPage, favoritesPage, friendsPage, signupPage, loginPage, pageHeader, gifsCont, pageMenu, connectionsCont, imgCont, gifDetailsAndActions, focusGifCont, paginationCont }) => 
      homePage || focusPage || favoritesPage || friendsPage ?
      ` 
        font-family: 'Poppins', sans-serif;
        overflow: unset;
        display: grid;
        gap: 0;
        grid-template-rows: 1fr 10fr 1fr;
        background: hsla(64, 41%, 92%, 1);
        background: linear-gradient(90deg, hsla(64, 41%, 92%, 1) 0%, hsla(196, 83%, 84%, 1) 50%, hsla(305, 75%, 83%, 1) 100%);
        background: -moz-linear-gradient(90deg, hsla(64, 41%, 92%, 1) 0%, hsla(196, 83%, 84%, 1) 50%, hsla(305, 75%, 83%, 1) 100%);
        background: -webkit-linear-gradient(90deg, hsla(64, 41%, 92%, 1) 0%, hsla(196, 83%, 84%, 1) 50%, hsla(305, 75%, 83%, 1) 100%);
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F2F3E2", endColorstr="#B2E5F8", GradientType=1 );
      ` :
      signupPage || loginPage ?
      ` 
        font-family: 'Poppins', sans-serif;
        overflow: unset;
        display: grid;
        gap: 0;
        grid-template-rows: 1fr 10fr;
        background: hsla(64, 41%, 92%, 1);
        background: linear-gradient(90deg, hsla(64, 41%, 92%, 1) 0%, hsla(196, 83%, 84%, 1) 50%, hsla(305, 75%, 83%, 1) 100%);
        background: -moz-linear-gradient(90deg, hsla(64, 41%, 92%, 1) 0%, hsla(196, 83%, 84%, 1) 50%, hsla(305, 75%, 83%, 1) 100%);
        background: -webkit-linear-gradient(90deg, hsla(64, 41%, 92%, 1) 0%, hsla(196, 83%, 84%, 1) 50%, hsla(305, 75%, 83%, 1) 100%);
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F2F3E2", endColorstr="#B2E5F8", GradientType=1 );
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
        // background-color: rgba(234, 233, 233, 1);
        height: 75vh;
        width: 90%;
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
        background: linear-gradient(180deg, hsla(64, 41%, 92%, .95) 0%, hsla(196, 83%, 84%, .95) 50%, hsla(305, 75%, 83%, .95) 100%);

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
        width: 90%;
        margin: .7rem auto;
      ` :
      paginationCont ?
      `
        max-width: 1090px;
        display: grid;
        grid-template-columns: 3fr 6fr 3fr;
        justify-content: center;
        align-content: center;
      ` :
      null
  }
`;


export default Div;
