import link from "../../api/Link.js"
import apiUrl from "../../api/url.js"

let HomeModule: Object = {
    state: {
        navBool: true,
        dialogFormVisible:false,
        uplistData:{}
    },
    mutations: {
        SET_NAV_BOOL(state:any){
            state.navBool=!state.navBool;
        },
        SET_DIALOG(state:any,paylog:any){
            state.dialogFormVisible=!state.dialogFormVisible;

            state.uplistData=paylog
        },
        DIALOG(state:any){
            state.dialogFormVisible=!state.dialogFormVisible;
        }
    },
    actions: {
        //删除
        DEL_DATA(context: any,paylog:any){
            link(apiUrl.userlist+"/","delete").then((ok:any)=>{
                console.log(ok);
                window.location.reload()
                
            })
        }
    },
    getters: {

    }
}

export default HomeModule