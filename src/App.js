import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

//https://gateway.marvel.com:443/v1/public/characters?apikey=b94a591bdcd3277566a2311d62df5ac2

//Key private: 86555f8b3342b4505dcf9ad14c82b1af0bbdbd63
// key public: b94a591bdcd3277566a2311d62df5ac2
//ts:1

//186555f8b3342b4505dcf9ad14c82b1af0bbdbd63b94a591bdcd3277566a2311d62df5ac2

//hash: 72aae658886a166ca58b9bd3c3ce402b


function App() {

  const [personagens, setPersonagens] = useState([])

  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b94a591bdcd3277566a2311d62df5ac2&hash=72aae658886a166ca58b9bd3c3ce402b').then(res => {

      setPersonagens(res.data.data.results)


    }).catch(error => console.log(error))
  }, [])

  console.log(personagens)

  return (
    <div className="App">
      <h1>Marvel</h1>

<div className="container"> 
<div className="row row-cols-1 row-cols-md-3 g-4">

        {personagens.map(per => (

          <div className="col " key={per.id}>

            <div className="card" style={{width: "18rem", height:"18rem"}}>

              <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" style={{width:"80%" , height:"80%"}} />

              <div className="card-body">
                <p className="card-text">{per.name}</p>
              </div>

            </div>
          </div>
        ))
        }
      </div>     
</div>

    </div>

  );
}

export default App;
