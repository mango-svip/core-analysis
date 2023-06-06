export async function get({ params }) {
    const report_id = params.report_id;
    const vip_response = await fetch("https://iu8xq68rii.execute-api.ap-southeast-1.amazonaws.com/default/vip-trade-analysis?report_id=" + report_id);
    const html = await vip_response.text();
    return new Response(html, {
        status: 200,
        headers: {
            'Content-type': 'text/html'
        }
    })
}