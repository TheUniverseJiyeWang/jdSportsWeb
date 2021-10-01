import axios from 'axios';
// import "reflect-metadata";
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
// import { createConnection } from "typeorm";
// import { User } from '../../entity/User';


export const searchPkg = ( term : string ) => {
    return async ( dispatch: Dispatch<Action> ) => {
        dispatch({
            type : ActionType.SEARCH_PKG,
            // payload : null,
        });

        try {

////Get data from npm packge search API
            const { data } = await axios.get(
                'https://registry.npmjs.org/-/v1/search',
                {
                    params: {
                        text: term,
                    },
                }
            );
            const pkgs = data.objects.map( ( result : any ) => {
                return result.package;
            }); 

////Prepare for inserted value
            const result = JSON.stringify(pkgs.map((result:any) => {
                return result.name;
            }));
            console.log(result);

            console.log("retrieved ", pkgs.length);
            
            const resultNumber = pkgs.length;
            console.log(resultNumber);

            const curId = await axios.get(
                "http://localhost:3001/api/getCurRecordId",{}
            );
            const nextId = curId.data[0].curId+1;

////Get a random user id
            const usersAll = await axios.get(
                "http://localhost:3001/api/get",{}
            );

            const userLength = usersAll.data.length;
            const getRandomUser = (max) => {
                return Math.floor(Math.random()*max)
            }
            const randomUser = getRandomUser(userLength)+1;
            console.log("random user id", randomUser);

////Insert Search Record into MySQL
            await axios.post(
                "http://localhost:3001/api/insertRecord",{
                    id: nextId,
                    keyword: term,
                    resultNumber: resultNumber,
                    result: result,
                    userId: randomUser
                }
            ).then((res) => {
                console.log(res);
            });

////Testing searching records by user id function.
            await axios.post(
                "http://localhost:3001/api/getRecordsByUserId",{
                    userId: randomUser
                }
            ).then((res) => {
                console.log(res);
                res.data.map((res:any) => {
                    console.log(res.USER_NAME," ",res.RECORDS_ID," ",res.KEYWORD, " ", res.RESULT_NUMBER);
                });
            });



////Testing MySQL
            // await axios.post(
            //     "http://localhost:3001/api/insertUser",{
            //         userId: 4,
            //         userName: "Ash"
            //     }
            // ).then((response) => {
            //     console.log(response);
            // });

            // const results_users = await axios.get(
            //     "http://localhost:3001/api/get",{}
            // ).then((res) => {
            //     console.log(res.data);
            // });


////Experimental with TypeORM
            // createConnection(
            //     {
            //     type: "mysql",
            //     host: "localhost",
            //     port: 3306,
            //     username: "root",
            //     password: "wangjiye920116",
            //     database: "jd_sports",
            //     entities: [
            //         User
            //     ],
            //     synchronize: true,
            //     logging: false
            //   }
                // ).then( connection => {
                // // here you can start to work with your entities
                //     console.log("connected");
                //     let user = new User();
                //     user.userName = "John";
                //     return connection.manager.save(user).then(
                //         () => {
                //             console.log("John has been saved.");
                //         }
                //     );
                
                // }).catch(error => console.log(error));

            dispatch({
                type: ActionType.SEARCH_SUCCESS,
                payload: pkgs,
            });

        } catch (error:any) {

            dispatch({
                type: ActionType.SEARCH_ERR,
                payload: error.message,
            });

        }

    };
};