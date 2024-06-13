import md5 from "js-md5";

import { ref } from "vue";

export default function (data){
    let md5Data=ref(md5(data))
    return md5Data
}