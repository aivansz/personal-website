import MainHeader from '../components/MainHeader';

const index = () => 
    <div>
        <MainHeader></MainHeader>
        <style global jsx>
        {`
            html{
                margin: 0 auto;
                padding: 0 0;
                height: auto
            }
            body{
                margin: 0 auto;
                padding: 0 0;
                height: auto;
                background-color: #000;
            }
        `}
        </style> 
    </div>

export default index;