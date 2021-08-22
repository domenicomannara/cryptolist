import {useState, useEffect} from 'react';
import {Tabs, Tab} from 'react-bootstrap';

const CoinGecko = require('coingecko-api');


const CryptoDetails = (props) => {
  const name = props.name;
  const [details, setDetails] = useState({});
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    const CoinGeckoClient = new CoinGecko();
    
    var func = async() => {
      let res = await CoinGeckoClient.coins.fetch(name);
      setDetails(res.data);
      setFetching(false);
    };  

    return func();
  }, [name]);


  
  return (
    <div>
      <h1>{!isFetching ? details.name : ''}</h1>
      
      {!isFetching ? (
        <Tabs defaultActiveKey="description">
          <Tab eventKey="description" title="Description">
            <div dangerouslySetInnerHTML={{ __html: details.description.en }} /> 
          </Tab>
          <Tab eventKey="links" title="Links">
          {details.links.homepage[0] ? <p><a target="_blank" rel="noreferrer" href={details.links.homepage[0]}>Homepage</a></p> : ''}
          {details.links.blockchain_site[0] ? <p><a target="_blank" rel="noreferrer"  href={details.links.blockchain_site[0]}>Blockchain Site</a></p> : ''}
          {details.links.chat_url[0] ? <p><a target="_blank" rel="noreferrer"  href={details.links.chat_url[0]}>Chat Url</a></p> : ''}
          {details.links.announcement_url[0] ? <p><a target="_blank" rel="noreferrer" href={details.links.announcement_url[0]}>Announcement Url</a></p> : ''}
          </Tab>
        </Tabs>
      ) : 
      ('')
      }
    </div>
  );
  
}
 
export default CryptoDetails;