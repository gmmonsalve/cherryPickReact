import CreateForm from "../../components/CreateForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const dates = [{
    title: 'prueba'
}]

const Dashboard = ()=>{
    return (
        <>
            <Header></Header>
            <CreateForm></CreateForm>
            {dates.map(date=><h2>date.title</h2>)}
            <Footer></Footer>
        </>
    );
}

export default Dashboard;