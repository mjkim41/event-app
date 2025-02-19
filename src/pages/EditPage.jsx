import EventForm from "../components/EventForm.jsx";
import {useLoaderData} from "react-router-dom";

const EditPage = () => {

    const eventDetail = useLoaderData();
    console.log(eventDetail);

    return <EventForm method='PUT' event={eventDetail}/>

};

export default EditPage;