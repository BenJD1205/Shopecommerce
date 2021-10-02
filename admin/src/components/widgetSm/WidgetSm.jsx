import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import {userRequest} from '../../requestMethod';

export default function WidgetSm() {

  const [users,setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try{
        const res = await userRequest.get("users/?new=true")
        console.log(res);
        setUsers(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getUsers();
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user)=>(
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={user.img || "https://el.tvu.edu.vn/images/avatar/no-avatar.png"} 
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
