export default function User({user}){
    const {id, title}=user;
    return (
        <div className="box">
            <h4>Id: {id}</h4>
            <p>Title: {title} </p>
        </div>
    )
}