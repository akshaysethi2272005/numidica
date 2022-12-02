import HomePage from "../components/homepage";
import { useEffect, useState } from "react";
import { getAuth } from "../Firebase/auth";
import { useRouter } from "next/router";
import ji from "../styles/Id.module.css";
import Head from "next/head";
export default function Home() {
  const [user, setUser] = useState(null);
  const routernet = useRouter();
  const {
    query:{nki1,nki2,year,month ,date,gender},
  } = routernet;
  const datareq = {nki1,nki2,year,month ,date , gender};
  const [apiconfig, setapiconfig] = useState(null);
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    initializeAuth();
    setLoading(true)
    const res = fetch(`https://akshay4.pythonanywhere.com/`,{
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        "name":nki2,
        "date":date,
        "month":month,
        "year":year,
        "gender":gender
    })
  }).then(ras => ras.json()).then(rsd => {
    setapiconfig(rsd[0])
    setLoading(false)
    console.log(apiconfig)
  }).catch(e => {
    routernet.push("/")
  })
  }, []);
  const initializeAuth = () => {
    const auth = getAuth();
    if (auth == null) {
      setUser(null);
    } else {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
    }
  };

  if (!user) {
    return <HomePage />;
  } else {
    if(!datareq.nki2){
      return (
      <div>
        <Head>
            <title>Numidica</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" type="image/x-icon" href="/logo.png"/>
          </Head>
          <p className={ji.tnt}>Person Not Found</p>
      </div>
      )
    }else{
      if (isLoading) return (
        <div className={ji.loadpage}>
          <Head>
            <title>Numidica</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" type="image/x-icon" href="/logo.png"/>
          </Head>
            <div className={ji.loadone}>
                <div className={ji.loadtwo}></div>
            </div>
        </div>
      )
      if (!apiconfig) return <p>No profile data</p>
      return (
        <div>
          <Head>
            <title>Numidica</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" type="image/x-icon" href="/logo.png"/>
          </Head>
          <div className={ji.numstacks}>
            <p className={ji.tile}>Birth Number</p>
            <div className={ji.numsubstack}>
              {apiconfig.birth}
            </div>
            
            <table className={ji.ctab}>
              <tbody>
              <tr>
                <td>ruling planet</td>
                <td>{apiconfig.birth_predict.ruling_planet}</td>
              </tr>
              <tr>
                <td>relation</td>
                <td>{apiconfig.birth_predict.relationship}</td>
              </tr>
              <tr>
                <td>stone</td>
                <td>{apiconfig.birth_predict.stone}</td>
              </tr>
              <tr>
                <td>metal</td>
                <td>{apiconfig.birth_predict.metal}</td>
              </tr>
              <tr>
                <td>direction</td>
                <td>{apiconfig.birth_predict.direction}</td>
              </tr>
              <tr>
                <td>day</td>
                <td>{apiconfig.birth_predict.day}</td>
              </tr>
              <tr>
                <td>friendly number</td>
                <td>{apiconfig.birth_predict.friendly_number}</td>
              </tr>
              <tr>
                <td>neutral number</td>
                <td>{apiconfig.birth_predict.neutral_number}</td>
              </tr>
              <tr>
                <td>enemy number</td>
                <td>{apiconfig.birth_predict.enemy_number}</td>
              </tr>
              <tr>
                <td>buiseness number</td>
                <td>{apiconfig.birth_predict.buiseness_number}</td>
              </tr>
              <tr>
                <td>romance number</td>
                <td>{apiconfig.birth_predict.romance_number}</td>
              </tr>
              <tr>
                <td>marriage number</td>
                <td>{apiconfig.birth_predict.marriage_number}</td>
              </tr>
              </tbody>
            </table>
            <div className={ji.dok} style={{color:"red"}}>Please ask numerologist and astrologist before doing remedies or wearing stones</div>
            <div className={ji.dok}>{apiconfig.birth_predict.birth}</div>
          </div>
          <div className={ji.numstacks}>
            <p className={ji.tile}>Life Path Number</p>
            <div className={ji.numsubstack}>
              {apiconfig.destiny}
            </div>
            <table className={ji.ctab}>
              <tbody>
              <tr>
                <td>friendly number</td>
                <td>{apiconfig.destiny_pred.friendly_number}</td>
              </tr>
              <tr>
                <td>neutral number</td>
                <td>{apiconfig.destiny_pred.neutral_number}</td>
              </tr>
              <tr>
                <td>enemy number</td>
                <td>{apiconfig.destiny_pred.enemy_number}</td>
              </tr>
              <tr>
                <td>buiseness number</td>
                <td>{apiconfig.destiny_pred.buiseness_number}</td>
              </tr>
              <tr>
                <td>romance number</td>
                <td>{apiconfig.destiny_pred.romance_number}</td>
              </tr>
              <tr>
                <td>marriage number</td>
                <td>{apiconfig.destiny_pred.marriage_number}</td>
              </tr>
              </tbody>
            </table>
            <div className={ji.dok}>{apiconfig.destiny_pred.destiny}</div>
          </div>
          <div className={ji.numstacks}>
            <p className={ji.tile}>Name Number</p>
            <div className={ji.numsubstack}>
              {apiconfig.name}
            </div>
            <table className={ji.ctab}>
              <tbody>
              <tr>
                <td>friendly number</td>
                <td>{apiconfig.name_pred.friendly_number}</td>
              </tr>
              <tr>
                <td>neutral number</td>
                <td>{apiconfig.name_pred.neutral_number}</td>
              </tr>
              <tr>
                <td>enemy number</td>
                <td>{apiconfig.name_pred.enemy_number}</td>
              </tr>
              <tr>
                <td>buiseness number</td>
                <td>{apiconfig.name_pred.buiseness_number}</td>
              </tr>
              <tr>
                <td>romance number</td>
                <td>{apiconfig.name_pred.romance_number}</td>
              </tr>
              <tr>
                <td>marriage number</td>
                <td>{apiconfig.name_pred.marriage_number}</td>
              </tr>
              </tbody>
            </table>
            <div className={ji.dok}>{apiconfig.name_pred.destiny}</div>
          </div>
          
          <div className={ji.numstacks}>
            <div className={ji.dok}>
              <div className={ji.lsd}>
                <div>{apiconfig.grid["4"]}</div>
                <div>{apiconfig.grid["9"]}</div>
                <div>{apiconfig.grid["2"]}</div>
                <div>{apiconfig.grid["3"]}</div>
                <div>{apiconfig.grid["5"]}</div>
                <div>{apiconfig.grid["7"]}</div>
                <div>{apiconfig.grid["8"]}</div>
                <div>{apiconfig.grid["1"]}</div>
                <div>{apiconfig.grid["6"]}</div>
              </div>
            </div>
            <p className={ji.tile}>{nki2} Chart</p>
            <div className={ji.dok}>
              <p className={ji.prophead}>Properties of number present in above Chart</p>
              {apiconfig.predict["1"] && <div className={ji.dok}><i className={ji.bhj}>1</i>: {apiconfig.predict["1"]}</div>}
              {apiconfig.predict["11"]  && <div className={ji.dok}><i className={ji.bhj}>11</i> : {apiconfig.predict["11"]}</div>}
              {apiconfig.predict["111"]  && <div className={ji.dok}><i className={ji.bhj}>111</i> : {apiconfig.predict["111"]}</div>}
              {apiconfig.predict["1111"]  && <div className={ji.dok}><i className={ji.bhj}>1111</i> : {apiconfig.predict["1111"]}</div>}
              {apiconfig.predict["11111"]  && <div className={ji.dok}><i className={ji.bhj}>11111</i> : {apiconfig.predict["11111"]}</div>}
              {apiconfig.predict["2"] && <div className={ji.dok}><i className={ji.bhj}>2</i>: {apiconfig.predict["2"]}</div>}
              {apiconfig.predict["22"]  && <div className={ji.dok}><i className={ji.bhj}>22</i> : {apiconfig.predict["22"]}</div>}
              {apiconfig.predict["222"] && <div className={ji.dok}><i className={ji.bhj}>222</i> : {apiconfig.predict["222"]}</div>}
              {apiconfig.predict["2222"]  && <div className={ji.dok}><i className={ji.bhj}>2222</i> : {apiconfig.predict["2222"]}</div>}
              {apiconfig.predict["22222"]  && <div className={ji.dok}><i className={ji.bhj}>22222</i> : {apiconfig.predict["22222"]}</div>}
              {apiconfig.predict["3"] && <div className={ji.dok}><i className={ji.bhj}>3</i>: {apiconfig.predict["3"]}</div>}
              {apiconfig.predict["33"]  && <div className={ji.dok}><i className={ji.bhj}>33</i> : {apiconfig.predict["33"]}</div>}
              {apiconfig.predict["333"]  && <div className={ji.dok}><i className={ji.bhj}>333</i> : {apiconfig.predict["333"]}</div>}
              {apiconfig.predict["3333"]  && <div className={ji.dok}><i className={ji.bhj}>3333</i> : {apiconfig.predict["3333"]}</div>}
              {apiconfig.predict["4"] && <div className={ji.dok}><i className={ji.bhj}>4</i>: {apiconfig.predict["4"]}</div>}
              {apiconfig.predict["44"]  && <div className={ji.dok}><i className={ji.bhj}>44</i> : {apiconfig.predict["44"]}</div>}
              {apiconfig.predict["444"]  && <div className={ji.dok}><i className={ji.bhj}>444</i> : {apiconfig.predict["444"]}</div>}
              {apiconfig.predict["4444"] && <div className={ji.dok}><i className={ji.bhj}>4444</i> : {apiconfig.predict["4444"]}</div>}
              {apiconfig.predict["5"] && <div className={ji.dok}><i className={ji.bhj}>5</i>: {apiconfig.predict["5"]}</div>}
              {apiconfig.predict["55"]  && <div className={ji.dok}><i className={ji.bhj}>55</i>: {apiconfig.predict["55"]}</div>}
              {apiconfig.predict["555"]  && <div className={ji.dok}><i className={ji.bhj}>555</i> : {apiconfig.predict["555"]}</div>}
              {apiconfig.predict["5555"]  && <div className={ji.dok}><i className={ji.bhj}>5555</i> : {apiconfig.predict["5555"]}</div>}
              {apiconfig.predict["6"] && <div className={ji.dok}><i className={ji.bhj}>6</i>: {apiconfig.predict["6"]}</div>}
              {apiconfig.predict["66"]  && <div className={ji.dok}><i className={ji.bhj}>66</i>: {apiconfig.predict["66"]}</div>}
              {apiconfig.predict["666"]  && <div className={ji.dok}><i className={ji.bhj}>666</i>: {apiconfig.predict["666"]}</div>}
              {apiconfig.predict["6666"]  && <div className={ji.dok}><i className={ji.bhj}>6666</i>: {apiconfig.predict["6666"]}</div>}
              {apiconfig.predict["7"] && <div className={ji.dok}><i className={ji.bhj}>7</i>: {apiconfig.predict["7"]}</div>}
              {apiconfig.predict["77"]  && <div className={ji.dok}><i className={ji.bhj}>77</i>: {apiconfig.predict["77"]}</div>}
              {apiconfig.predict["777"]  && <div className={ji.dok}><i className={ji.bhj}>777</i>: {apiconfig.predict["777"]}</div>}
              {apiconfig.predict["7777"]  && <div className={ji.dok}><i className={ji.bhj}>7777</i>: {apiconfig.predict["7777"]}</div>}
              {apiconfig.predict["8"] && <div className={ji.dok}><i className={ji.bhj}>8</i>: {apiconfig.predict["8"]}</div>}
              {apiconfig.predict["88"]  && <div className={ji.dok}><i className={ji.bhj}>88</i>: {apiconfig.predict["88"]}</div>}
              {apiconfig.predict["888"]  && <div className={ji.dok}><i className={ji.bhj}>888</i>: {apiconfig.predict["888"]}</div>}
              {apiconfig.predict["8888"]  && <div className={ji.dok}><i className={ji.bhj}>8888</i>: {apiconfig.predict["8888"]}</div>}
              {apiconfig.predict["9"] && <div className={ji.dok}><i className={ji.bhj}>9</i>: {apiconfig.predict["9"]}</div>}
              {apiconfig.predict["99"]  && <div className={ji.dok}><i className={ji.bhj}>99</i>: {apiconfig.predict["99"]}</div>}
              {apiconfig.predict["999"]  && <div className={ji.dok}><i className={ji.bhj}>999</i>: {apiconfig.predict["999"]}</div>}
              {apiconfig.predict["9999"]  && <div className={ji.dok}><i className={ji.bhj}>9999</i>: {apiconfig.predict["9999"]}</div>}
            </div>
            <div className={ji.dok}>
              <p className={ji.prophead}>Properties of number not present in above Chart</p>
              {apiconfig.non["1"] && <div className={ji.dok}><i className={ji.bhj}>1</i>: {apiconfig.non["1"]}</div>}
              {apiconfig.non["2"] && <div className={ji.dok}><i className={ji.bhj}>2</i>: {apiconfig.non["2"]}</div>}
              {apiconfig.non["3"] && <div className={ji.dok}><i className={ji.bhj}>3</i>: {apiconfig.non["3"]}</div>}
              {apiconfig.non["4"] && <div className={ji.dok}><i className={ji.bhj}>4</i>: {apiconfig.non["4"]}</div>}
              {apiconfig.non["5"] && <div className={ji.dok}><i className={ji.bhj}>5</i>: {apiconfig.non["5"]}</div>}
              {apiconfig.non["6"] && <div className={ji.dok}><i className={ji.bhj}>6</i>: {apiconfig.non["6"]}</div>}
              {apiconfig.non["7"] && <div className={ji.dok}><i className={ji.bhj}>7</i>: {apiconfig.non["7"]}</div>}
              {apiconfig.non["8"] && <div className={ji.dok}><i className={ji.bhj}>8</i>: {apiconfig.non["8"]}</div>}
              {apiconfig.non["9"] && <div className={ji.dok}><i className={ji.bhj}>9</i>: {apiconfig.non["9"]}</div>}
            </div>
            <div className={ji.dok}>
              <p className={ji.prophead}>Planes Prediction from Chart</p>
              <div className={ji.dok}>{apiconfig.plane}</div>
            </div>
            { apiconfig.fact && <div className={ji.dok}>
              <p className={ji.prophead}>Facts</p>
              <div className={ji.dok}>{apiconfig.fact}</div>
            </div>}
            <div className={ji.dok}>
              <p className={ji.prophead}>Marriage Prediction from Chart</p>
              <div className={ji.dok}>{apiconfig.marriage}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}
