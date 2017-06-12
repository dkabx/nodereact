import axios from 'axios';
import jwt from 'jsonwebtoken';


 export const setUserList = (data) => {

	 return {
		 type:"SET_USER_LIST",
		 data:data
	 }
 }
export const getUserList = ()=>{
var token  = localStorage.getItem("jwtToken");
	return dispatch => {
		return   axios({
								url: 'http://localhost:5000/api/user-list',
								method:'get',
								 headers: {
						"Content-Type": "application/json",
						"Authorization":"Bearer "+token
					},
						 data: "send"
							}).then(function(res){
								if(res.data.success){
								console.log('MMMMMMMMMMMMMMMMMMMMm',res.data);
								dispatch(setUserList(res.data.userlist));
								}

							});
	}

}
