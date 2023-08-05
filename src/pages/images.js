export async function post ({params, request}){
    const data = await request.json();
    console.log(data);
    if(data.link == '') {
        return {
            body: JSON.stringify({
                error: "数据不能为空"
            }),
            status: "400"
        }
    }
    // 短链
    let targetUrl = data.link;
    if(targetUrl.indexOf('xhslink.com') > -1) {
        const response = await fetch(targetUrl, {
            redirect: "manual",
        })
        if (response.status > 300 && response.status < 400) {
            const location = response.headers.get('location');
            console.log(location);
            targetUrl = location;
        }
    }
    // discovery
    if(targetUrl.indexOf("discovery/item") > -1) {
        targetUrl = "https://www.xiaohongshu.com/explore" + targetUrl.substring(targetUrl.lastIndexOf("item/") + 4, targetUrl.indexOf('?'));

    }
    console.log("target_url", targetUrl);
    const response = await fetch(targetUrl);
    const text = await response.text();
    const regex = /<script>window\.__INITIAL_STATE__=\s*(.*?)<\/script>/;
    const result = regex.exec(text)
    
    if (result && result.length === 2) {
        let initialStateJSON = result[1].replaceAll("undefined", "\"\"");
        let initialState = JSON.parse(initialStateJSON);
        let note = initialState.note;
        console.log(note)
        let images = Object.values(note.noteDetailMap)
        
        return {
            body: JSON.stringify({
                images,
            })
        }
      }
    
    return {
       body: JSON.stringify({
         
       })
    }
}