import { data } from 'jquery';
import { useEffect, useState } from 'react'
export default function DataLayerEdit() {
    const [data60, setData60] = useState([])
    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
            "X-VTEX-API-AppKey", "vtexappkey-ninjasom-CTHLCL"
        );
        myHeaders.append(
            "X-VTEX-API-AppToken",
            "WIUSOMDKAIKYOWZBSYUGIZESGEFUXUTRBBWQSKJMEGJSLTOCQWNNURTXXYTVBOWNHQRYICAOUWDXLRVAXNPULYNXDLNVLTKFNGCWBGJSCDDHEHYAWMHLUTMJSPVUZTCZ"
        );
        myHeaders.append(
            "Cookie",
            "janus_sid=3d9bd537-a180-4386-a68e-55e8b7c8029f"
        );

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

        fetch(
            "/api/catalog/pvt/collection/160/products?pageSize=50",
            requestOptions
        )
            .then((response) => response.json())
            .then(async (response) => {
                var i = 1
                console.log(response.TotalPage);
                var epa = []
                window['data60'] = []
                while (i <= response.TotalPage) {
                    fetch("/api/catalog/pvt/collection/160/products?pageSize=50&page=" + i, requestOptions)
                        .then(resp => resp.json())
                        .then(resp => {
                            resp.Data.map((e) => {
                                window.data60.push(e.ProductId)
                            })
                        })
                    i++
                }
            })
    }, []);
    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
            "X-VTEX-API-AppKey", "vtexappkey-ninjasom-CTHLCL"
        );
        myHeaders.append(
            "X-VTEX-API-AppToken",
            "WIUSOMDKAIKYOWZBSYUGIZESGEFUXUTRBBWQSKJMEGJSLTOCQWNNURTXXYTVBOWNHQRYICAOUWDXLRVAXNPULYNXDLNVLTKFNGCWBGJSCDDHEHYAWMHLUTMJSPVUZTCZ"
        );
        myHeaders.append(
            "Cookie",
            "janus_sid=3d9bd537-a180-4386-a68e-55e8b7c8029f"
        );

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

        fetch(
            "/api/catalog/pvt/collection/159/products?pageSize=50",
            requestOptions
        )
            .then((response) => response.json())
            .then(async (response) => {
                var i = 1
                console.log(response.TotalPage);
                var epa = []
                window['data59'] = []
                console.log(response)
                while (i <= response.TotalPage) {
                    fetch("/api/catalog/pvt/collection/159/products?pageSize=50&page=" + i, requestOptions)
                        .then(resp => resp.json())
                        .then(resp => {
                            resp.Data.map((e) => {
                                window.data59.push(e.ProductId)
                            })
                        })
                    i++
                }
            })
    }, []);
    return null
}