import Router, { useRouter } from "next/router";
import Nav from "./nav";
import styless from "../styles/Main.module.css";
import stylesss from "../styles/Nav.module.css";
import { useEffect, useState } from "react";
import { signOut, getAuth, signIn } from "../Firebase/auth";
import updateUserData from "../Firebase/firestore";
import readUser from "../Firebase/read";
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
          <div className={styless.datetime}>
            <input id="dkio3" placeholder="year" type="number" className={styless.inpse} /><br />
            <input id="dkio4" placeholder="month" type="number" className={styless.inpse} /><br />
            <input id="dkio5" placeholder="date" type="number" className={styless.inpse} /><br />
          </div>
          <select id="dkio6" placeholder="Enter Gender" type="option"  className={styless.inpse}>
            <option className={styless.inpse} value="male">Male</option>
            <option className={styless.inpse} value="female">Female</option>
          </select>
          <br />
          <button
            className={stylesss.btns1}
            style={{ marginLeft: "15px", marginTop: "10px" }}
            onClick={() => {
              const dkio1 = document.getElementById("dkio1").value;
              const dkio3 = document.getElementById("dkio3").value;
              const dkio4 = document.getElementById("dkio4").value;
              const dkio5 = document.getElementById("dkio5").value;
              const dkio6 = document.getElementById("dkio6").value;
              const iid = Math.random().toString(16).slice(2);
              if (dkio1 === "" ||  dkio3 === "" || dkio4 === "" || dkio5 === "" || dkio6 === "") {
                alert("fill the values");
              } else {
                const dobyear = dkio3.toString() + "-" + dkio4.toString() + "-" + dkio5.toString();
                const juio = {
                  id: iid,
                  name: dkio1,
                  dob: dobyear,
                  gender : dkio6
                };
                const ghy = ik.concat(juio);
                updateUserData(user, ghy);
                setik(ghy);
              }
              document.getElementById("dkio1").value = "";
              document.getElementById("dkio3").value = "";
              document.getElementById("dkio4").value = "";
              document.getElementById("dkio5").value = "";
              document.getElementById("dkio6").value = "";
            }}
          >
            Add
          </button>
        </div>
      </div>
      <p className={styless.history}>Records</p>

        <div className={styless.viewbn}>
          {ik.map((data, i) => (
            <div id={data.id} key={i} className={styless.select2}>
              <p className={styless.his1}>{data.name}</p>
              <p className={styless.his2}>{data.dob}</p>
              <p className={styless.his2}>{data.gender}</p>
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
                id={data.id}
                className={stylesss.btns3}
                style={{ marginLeft: "15px", marginTop: "10px" }}
                onClick={(o) => {
                  const yuid = o.target.id;
                  let buyq = ik.filter((u) => {
                    if (u.id == yuid) {
                      return u;
                    }
                  });
                  let payh = "/" + buyq[0].id;
                  let nki1 = buyq[0].id;
                  let nki2 = buyq[0].name;
                  let nki3 = buyq[0].dob.split("-");
                  let year = nki3[0]
                  let month = nki3[1]
                  let date = nki3[2]
                  let gender = buyq[0].gender;
                  Router.push({
                    pathname: payh,
                    query: {
                      nki1,
                      nki2,
                      year,
                      month,
                      date,
                      gender
                    },
                  });
                }}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
  );
};
export default MainPage;
