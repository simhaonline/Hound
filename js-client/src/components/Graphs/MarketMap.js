import React , {useEffect}from 'react'
import * as d3 from 'd3'
import L from 'leaflet'


const MarketMap = ({data}) => {

    useEffect(() => {
        //creates the market map
        createMarketMap(data)
    }, [])
    const width = window.innerWidth + 'px'
    const height = window.innerHeight + 'px'
    // const width = '100%'
    // const height = '100%'
    return (
        <div id='marketmap' style={{width,height}}></div>
    )
}

const createMarketMap = (data) => {
    var map = L.map('marketmap').setView([-41.2858, 174.7868], 13);
    var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' Contributors',
            maxZoom: 18,
    }).addTo(map);

    L.svg().addTo(map)

    var svg = d3.select("#marketmap").select("svg"),
    g = svg.append("g");
    
    data.forEach((d)=> {
        d.LatLng = new L.LatLng(d.circle.coordinates[0],
        d.circle.coordinates[1])
    })

    g.selectAll("circle")
			.data(data)
			.enter().append("circle")
			.style("stroke", "black")  
			.style("opacity", .9) 
			.style("fill", "rgb(248, 92, 81)")
            .attr("r", 5)
            .attr("cx", d => map.latLngToLayerPoint(d.LatLng).x)
            .attr("cy", d => map.latLngToLayerPoint(d.LatLng).y);
    function update() {
            g.selectAll("circle")
                .attr("cx", d => map.latLngToLayerPoint(d.LatLng).x)
                .attr("cy", d => map.latLngToLayerPoint(d.LatLng).y)

    }
        
    map.on("moveend",update)  
}

export default MarketMap
