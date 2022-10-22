import Router, { useRouter } from "next/router";
import Nav from "./nav";
import styless from "../styles/Main.module.css";
import stylesss from "../styles/Nav.module.css";
import { useEffect, useState } from "react";
import { signOut, getAuth, signIn } from "../Firebase/auth";
import updateUserData from "../Firebase/firestore";
import readUser from "../Firebase/read";
import { async } from "@firebase/util";
import delUserData from "../Firebase/del";
const MainPage = () => {
  const r = useRouter();
  const [user, setuser] = useState(null);
  const [ip1, setip1] = useState(false);
  const [ip2, setip2] = useState(false);
  const [ik, setik] = useState([]);
  const initializeAuth = () => {
    const auth = getAuth();
    if (!auth) {
      setuser(null);
    } else {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          setuser(user);
          setip1(user.uid);
          const newuser = await readUser(user.uid);
          setik(newuser);
        } else {
          setuser(null);
        }
      });
    }
  };

  useEffect(() => {
    initializeAuth();
  }, []);
  return (
    <div>
      <Nav />
      <div className={styless.navtype}>
        <div className={styless.select}>
          <input
            id="dkio1"
            type="text"
            placeholder="Enter Name"
            className={styless.inpse}
          />
          <br />
          <input id="dkio2" type="date" className={styless.inpse} />
          <br />
          <button
            className={stylesss.btns1}
            style={{ marginLeft: "15px", marginTop: "10px" }}
            onClick={() => {
              const dkio1 = document.getElementById("dkio1").value;
              const dkio2 = document.getElementById("dkio2").value;
              const iid = Math.random().toString(16).slice(2);
              if (dkio1 === "" || dkio2 === "") {
                alert("fill the values");
              } else {
                const juio = {
                  id: iid,
                  name: dkio1,
                  dob: dkio2,
                };
                const ghy = ik.concat(juio);
                updateUserData(user, ghy);
                setik(ghy);
              }
              document.getElementById("dkio1").value = "";
              document.getElementById("dkio2").value = "";
            }}
          >
            Add
          </button>
        </div>
      </div>
      <p className={styless.history}>Records</p>
      <div className={styless.hsible}>
        {/* {
        readUser(ip1).then(data => {
          data.todoList.map(e => (
          <div id={data.id} className={styless.select2}>
            <p className={styless.his1}>{data.name}</p>
            <p className={styless.his1}>{data.dob}</p>
            <button className={stylesss.btns2} style={{marginLeft:"15px",marginTop:"10px"}}>Delete</button>
            <button className={stylesss.btns3} style={{marginLeft:"15px",marginTop:"10px"}}>View</button>
          </div>
        ))})
      } */}
        <div>
          {ik.map((data, i) => (
            <div id={data.id} key={i} className={styless.select2}>
              <p className={styless.his1}>{data.name}</p>
              <p className={styless.his1}>{data.dob}</p>
              <button
                id={data.id}
                className={stylesss.btns2}
                style={{ marginLeft: "15px", marginTop: "10px" }}
                onClick={(k) => {
                  const new_id = k.target.id;
                  const buy = ik.filter((u) => {
                    return u.id != new_id;
                  });
                  delUserData(user, buy);
                  setik(ik);
                  var et = document.getElementById(new_id);
                  et.parentNode.removeChild(et);
                }}
              >
                Delete
              </button>
              <button
                className={stylesss.btns3}
                style={{ marginLeft: "15px", marginTop: "10px" }}
                onClick={(o) => {
                  const yuid = o.target.id;

                  const buyq = ik.map((u) => {
                    if (u.id != yuid) {
                      return u;
                    }
                  });
                  const payh = "/" + buyq[0].id;
                  const nki1 = buyq[0].id;
                  const nki2 = buyq[0].name;
                  const nki3 = buyq[0].dob;
                  Router.push({
                    pathname: payh,
                    query: {
                      nki1,
                      nki2,
                      nki3,
                    },
                  });
                }}
              >
                View
              </button>
            </div>
          ))}
        </div>
        {/* <div>
          {
            ik.forEach(data => {
              return (
              <div id={data.id} className={styless.select2}>
                <p className={styless.his1}>{data.name}</p>
                <p className={styless.his1}>{data.dob}</p>
                <button className={stylesss.btns2} style={{marginLeft:"15px",marginTop:"10px"}}>Delete</button>
                <button className={stylesss.btns3} style={{marginLeft:"15px",marginTop:"10px"}}>View</button>
              </div>
            )})
          }
        </div> */}
      </div>
    </div>
  );
};
export default MainPage;
