import styled from 'styled-components';

export const Header = styled.header`
  
  margin-bottom: 30px;
  
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #FFFF;
    transition: color 0.2s;

    &:hover {
      color: #63dc3f;
    }

    svg {
      margin-right: 4px;
    }
  }
`

export const Container = styled.div`

  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
}

select {
  background: #FBFBFB;
  color: #000000;
  height: 40px;
  border: none;
  border-bottom: 2px solid #878686;
  width: 100%;
  max-width: 380px;

  @media (min-width: 0) and (max-width: 767px) {
    width: 100%;
    max-width: 100%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    max-width: 100%;
  }
}

.section-plans {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;

  .card {
    border: 1px solid #949494;
    border-radius: 6px;
    max-width: 170px;
    width: 100%;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 5px 20px;

    .text {
      text-align: justify;
    }

    h5, h6, p {
      padding: 5px;
    }
  }

`