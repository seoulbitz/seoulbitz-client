import Div from '../components/styled-system/div/div';

const Home = () => {
  return (
    <>
      <Div mb="20px" backgroundColor="red" width={['10px', '50px', '200px']}>
        안녕!
      </Div>
      <Div mb="20px" backgroundColor="blue" width={['10px', '50px', '200px']}>
        안녕!
      </Div>
    </>
  );
};

export default Home;
