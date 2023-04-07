import axios from "axios";

const url = "http://127.0.0.1:5000/"

export async function api_medals(q){
    const response = await axios.get( url + 'medals/' + q ,{});
    return response.data;
}
export async function api_medals2(q){
    const response = await axios.get( url + 'medals2/' + q ,{});
    return response.data;
}
export async function api_events(){
    const response = await axios.get( url + 'events',{});
    return response.data;
}
export async function api_regions(){
    const response = await axios.get( url + 'regions',{});
    return response.data;
}
export async function api_count_by_sex(){
    const response = await axios.get( url + 'count_by_sex' ,{});
    return response.data;
}
export async function api_count_by_sex2(q){
    const response = await axios.get( url + 'count_by_sex2/' + q ,{});
    return response.data;
}
export async function api_events2(q){
    const response = await axios.get( url + 'event_by_noc/' + q ,{});
    return response.data;
}
export async function api_event_sex(q){
    const response = await axios.get( url + 'count_by_sex2/' + q ,{});
    return response.data;
}
export async function api_weight_by_age(q){
    const response = await axios.get( url + 'weight_by_age/' + q ,{});
    return response.data;
}
export async function api_height_by_age(q){
    const response = await axios.get( url + 'height_by_age/' + q ,{});
    return response.data;
}
export async function api_medals_by_noc_year(q){
    const response = await axios.get( url + 'medals_by_noc_year/' + q ,{});
    return response.data;
}



