import "./maping.css";

function TCard({ description, name, companyname }) {
    return (
        <div className="pt-6 mb-12 relative">
            <div className="hidden md:block">
                <img className="pix absolute" src="images/“.svg" alt="" />
            </div>
            <div>
                <p>{description}</p>
                <div className="pt-4">
                    <h5>{name}</h5>
                    <p className="text-gray-400">{companyname}</p>
                </div>
            </div>
        </div>
    );
}

export default TCard;
