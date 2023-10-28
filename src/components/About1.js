import UserClass from "./UserClass";
const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <h3>This is about Us page</h3>
            <UserClass name={"Sheena"} location={"Noida"} contact={"sheena@yopmail.com"}/>
        </div>
    )
}

export default About;