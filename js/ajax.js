import Cookies from './js.cookie.mjs'


// *** To send POST data to a URL
const sendPostData = async (url=new String, data=new Object, errorMessage=new String) => {
    try{
        const csrfToken = Cookies.get('csrftoken');
        if(!(data instanceof FormData)){
            jsonData = new FormData();
            jsonData.append('data', JSON.stringify(data));
        }
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'X-CSRFToken': csrfToken,
            }
        })
        if(response.status !== 200 || !response.ok){
            return Promise.reject(errorMessage);
        }
        let jsonResponse = await response.json();
        return jsonResponse;
    }
    catch(err){
        console.log(err);
        if(err instanceof TypeError){
            return Promise.reject('اتصال با سرور برقرار نشد');
        }
    }
}


export {sendPostData};