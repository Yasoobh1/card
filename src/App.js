import logo from './logo.svg';
import './App.scss';
import { useEffect } from 'react';
import html2canvas from 'html2canvas'

function App() {

  useEffect(() => {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      const url = canvas.toDataURL("image/png", 1.0)
      document.getElementById("def").style.backgroundImage = `url(${url})`
    });
  }, [])

  return (
    <>
      <div className='canvas-cont'>
        <div id='def' className='def' />
        <div className='capture-main'>
          <div id={'capture'} className="border-wrap capture">
            <div className="body">
              <div className='body-wrap'>
                <p>NAME OF THE ITEM</p>
                <div className='type'>
                  <span>Capacity:</span>
                  <span>Pcs in Pallet:</span>
                </div>
                <div className='seperator'></div>

                <div className='price-sec'>
                  <p>Stock : </p>
                  <input />
                </div>

                <div className='price-sec'>
                  <p>Net Price : </p>
                  <input />

                </div>

                <div className='price-sec'>
                  <p>Additions on Price FZ : </p>
                  <div className='quantity'>
                    <div className='increase'><span>-</span></div>
                    <div></div>
                    <div className='decrease'><span>+</span></div>
                  </div>
                  <p>% Total :</p>
                </div>
                <div className='seperator-right'></div>

                <div className='price-sec'>
                  <p>Local Additions on FZ total : </p>
                  <div className='quantity'>
                    <div className='increase'><span>-</span></div>
                    <div></div>
                    <div className='decrease'><span>+</span></div>
                  </div>
                  <p>% Total :</p>
                </div>
                <div className='seperator-right'></div>
              </div>

              <div className='pic-cont'>
                <img className='pic' src='/images/picture.jpeg' width={290} />
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default App;
